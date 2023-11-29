import { useLoaderData } from '@remix-run/react'
import { AnalyticsPageType } from '@shopify/hydrogen'
import { defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { ComposeSections } from '~/components/composeSections/ComposeSections'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'
import { CMsPagesDocument } from 'graphql/cmsPage/CMSPage.generated'
import { createClient } from 'urql'

export async function loader({ params, request, context }: LoaderArgs) {
  const { language, country } = context.storefront.i18n
  const { pathname } = new URL(request.url)
  const customerAccessToken = await context.session.get('customerAccessToken')

  // TODO: seems hacky we need function commments for this
  if (params.lang && params.lang.toLowerCase() !== `${language}-${country}`.toLowerCase()) {
    // If the lang URL param is defined, yet we still are on `EN-US`
    // the the lang param must be invalid, send to the 404 page
    throw new Response(null, { status: 404 })
  }

  // TODO: turn this into a reusable function
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
    .query(CMsPagesDocument, { url: 'home' })
    .toPromise()
    .then((result) => {
      return result.data || { pages: [], websiteConfigs: [] }
    })

  const [page, header, footer] = [pages?.[0], websiteConfigs?.[0]?.header, websiteConfigs?.[0]?.footer]

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

export default function Homepage() {
  const { page, header, footer } = useLoaderData<typeof loader>()

  // TODO: make this a reusable component
  return (
    <>
      {header && <HeaderSection page={page} {...header} />}
      {page && <ComposeSections sections={page?.sections} page={page} />}
      {footer && <Footer page={page} {...footer} />}
    </>
  )
}
