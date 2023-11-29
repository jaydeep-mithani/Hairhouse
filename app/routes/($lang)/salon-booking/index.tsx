import { useLoaderData } from '@remix-run/react'
import { AnalyticsPageType } from '@shopify/hydrogen'
import { Customer } from '@shopify/hydrogen/storefront-api-types'
import { AppLoadContext, defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { SalonBooking } from '~/sections/salonBooking'
import { CMsPagesDocument } from 'graphql/cmsPage/CMSPage.generated'
import { createClient } from 'urql'

import { doLogout } from '../account/__private/logout'

export async function loader({ request, context }: LoaderArgs) {
  const { pathname } = new URL(request.url)
  const customerAccessToken = await context.session.get('customerAccessToken')
  const isAuthenticated = !!customerAccessToken

  const googleKey = context?.env?.GOOGLE_MAPS_KEY

  const customer = customerAccessToken ? await getCustomer(context, customerAccessToken) : null

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
    .query(CMsPagesDocument, { url: 'salon-booking' })
    .toPromise()
    .then((result) => {
      return result.data || { pages: [], websiteConfigs: [] }
    })

  const [page, header, footer] = [pages?.[0], websiteConfigs?.[0]?.header, websiteConfigs?.[0]?.footer]

  return defer({
    customerAccessToken,
    page,
    header,
    footer,
    pathname,
    googleKey,
    customer,
    isAuthenticated,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
  })
}

export default function SalonBookingPage() {
  const { page, googleKey, customer, isAuthenticated } = useLoaderData<typeof loader>()
  return page?.sections?.length ? (
    <SalonBooking
      section={page?.sections[0]}
      googleKey={googleKey}
      customer={customer as Customer}
      isAuthenticated={isAuthenticated}
    />
  ) : null
}

const CUSTOMER_QUERY = `#graphql
  query CustomerDetails(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      phone
      email
    }
  }
`

export async function getCustomer(context: AppLoadContext, customerAccessToken: string) {
  const { storefront } = context

  const data = await storefront.query<{
    customer: Customer
  }>(CUSTOMER_QUERY, {
    variables: {
      customerAccessToken,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  })

  /**
   * If the customer failed to load, we assume their access token is invalid.
   */
  if (!data?.customer) {
    throw await doLogout(context)
  }

  return data.customer
}
