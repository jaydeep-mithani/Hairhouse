import { useLoaderData } from '@remix-run/react'
import { AnalyticsPageType, flattenConnection } from '@shopify/hydrogen'
import { defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { generateBreadCrumbsByUrl } from '~/components/breadcrumbs'
import { ComposeSections } from '~/components/composeSections/ComposeSections'
import { Gap } from '~/components/productSection/Gap'
import { BrandLogoGrid } from '~/sections/brandLogoGrid'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'
import { CMsPagesDocument } from 'graphql/cmsPage/CMSPage.generated'
import { createClient } from 'urql'

export const BrandsLogos = `#graphql
query getBrandsLogos($first: Int) {
  pages: brandsBrandsLogosConnection(first: $first) {
    edges {
      node {
        brandLogo {
          url
        }
        brandName
        brandTags
        brandUrl
      }
    }
  }
}
`

export async function loader({ request, context }: LoaderArgs) {
  const { pathname } = new URL(request.url)
  const customerAccessToken = await context.session.get('customerAccessToken')

  const client = createClient({
    url: context?.env?.HYGRAPH_API_ENDPOINT,
    fetchOptions: () => {
      const token = context?.env?.PRIVATE_HYGRAPH_PERMANENT_AUTH_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })

  const { pages, websiteConfigs } = await client
    .query(CMsPagesDocument, { url: 'brands' })
    .toPromise()
    .then((result) => {
      return result.data || { pages: [], websiteConfigs: [] }
    })

  const { data: brandData } = await client
    .query(BrandsLogos, { first: 100 })
    .toPromise()
    .then((result) => {
      return result || null
    })

  const brandLogos = flattenConnection(brandData?.pages)

  const [page, header, footer] = [pages?.[0], websiteConfigs?.[0]?.header, websiteConfigs?.[0]?.footer]

  return defer({
    isLoggedIn: customerAccessToken,
    page,
    header,
    footer,
    pathname,
    brandLogos,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
  })
}

export default function Brands() {
  const { page, header, footer, pathname, brandLogos } = useLoaderData<typeof loader>()
  const Breadcrumbs = generateBreadCrumbsByUrl({ pathname, hide: page?.hideBreadcrumb })

  return (
    <>
      {header && <HeaderSection page={page} {...header} />}
      {!page?.hideBreadcrumb && (
        <>
          <Gap gap="1rem" mobileGap="1rem" />
          {Breadcrumbs}
          <Gap gap="1rem" mobileGap="1rem" />
        </>
      )}
      {!!brandLogos?.length && (
        <BrandLogoGrid asGrid brandsBrands={brandLogos} subtext="Exclusive professional brands" hdText={page?.title} />
      )}
      {page && <ComposeSections sections={page?.sections} page={page} />}
      {footer && <Footer page={page} {...footer} />}
    </>
  )
}
