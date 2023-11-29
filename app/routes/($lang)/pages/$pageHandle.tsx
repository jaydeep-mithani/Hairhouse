import { useLoaderData } from '@remix-run/react'
import { AnalyticsPageType } from '@shopify/hydrogen'
import { defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { CMsPagesDocument } from 'graphql/cmsPage/CMSPage.generated'
import { createClient } from 'urql'
import { generateBreadCrumbsByUrl } from '~/components/breadcrumbs'
import { ComposeSections } from '~/components/composeSections/ComposeSections'
import { Gap } from '~/components/productSection/Gap'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'

export async function loader({ params, request, context }: LoaderArgs) {
  const { pageHandle } = params
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
    .query(CMsPagesDocument, { url: pageHandle })
    .toPromise()
    .then((result) => {
      return result.data || { pages: [], websiteConfigs: [] }
    })

  const [page, header, footer] = [pages?.[0], websiteConfigs?.[0]?.header, websiteConfigs?.[0]?.footer]

  if (!page?.id) {
    throw new Response(null, { status: 404 })
  }

  return defer({
    isLoggedIn: customerAccessToken,
    page,
    header,
    footer,
    pathname,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
  })
}

export default function Page() {
  const { page, header, footer, pathname } = useLoaderData<typeof loader>()
  const Breadcrumbs = generateBreadCrumbsByUrl({ pathname, hide: page?.hideBreadcrumb })
  return (
    <>
      {header && <HeaderSection page={page} {...header} />}
      <Gap gap="1rem" mobileGap="1rem" />
      {Breadcrumbs}
      <Gap gap="1rem" mobileGap="1rem" />
      {page && <ComposeSections sections={page?.sections} page={page} />}
      {footer && <Footer page={page} {...footer} />}
    </>
  )
}
