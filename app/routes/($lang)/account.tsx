import { Typography } from '@overdose/components'
import { Outlet, useLoaderData, useMatches, useOutlet } from '@remix-run/react'
import { flattenConnection } from '@shopify/hydrogen'
import type { Customer, Order } from '@shopify/hydrogen/storefront-api-types'
import { json, defer, redirect, type LoaderArgs, type AppLoadContext } from '@shopify/remix-oxygen'
import { ProductCard } from '~/components'
import { parseMenu } from '~/lib/utils'
import { AccountLoyaltyBlock, AccountOrders, AccountRewards, AccountSidebar } from '~/sections'
import invariant from 'tiny-invariant'

import { doLogout } from './account/__private/logout'
import { AccountProps, AccountDataProps, ProductsFull } from './account/types'
import { getFeaturedData } from './featured-products'

// Combining json + Response + defer in a loader breaks the
// types returned by useLoaderData. This is a temporary fix.
type TmpRemixFix = ReturnType<typeof defer<{ isAuthenticated: false }>>

export async function loader({ request, context, params }: LoaderArgs) {
  const { pathname } = new URL(request.url)
  const lang = params.lang
  const customerAccessToken = await context.session.get('customerAccessToken')
  const isAuthenticated = Boolean(customerAccessToken)
  const loginPath = lang ? `/${lang}/account/login` : '/account/login'

  if (!isAuthenticated) {
    if (
      /\/account\/login$/.test(pathname) ||
      /\/account\/register$/.test(pathname) ||
      /\/account\/recover$/.test(pathname)
    ) {
      return json({ isAuthenticated }) as unknown as TmpRemixFix
    }

    return redirect(loginPath) as unknown as TmpRemixFix
  }

  const customer = await getCustomer(context, customerAccessToken)
  const accountData = await getAccountData(context)

  const heading = customer
    ? customer.firstName
      ? `Welcome, ${customer.firstName}.`
      : `Welcome to your account.`
    : 'Account Details'

  const orders = flattenConnection(customer.orders) as Order[]

  const uniqueProductIds = new Set()
  orders.forEach((order) => {
    order.lineItems.edges.forEach((lineItem) => {
      const productId = lineItem?.node?.variant?.product.id
      if (productId) {
        uniqueProductIds.add(productId)
      }
    })
  })
  const productsIds = Array.from(uniqueProductIds).slice(0, 6)
  const products: ProductsFull = await context.storefront.query(PRODUCTS_QUERY, {
    variables: {
      ids: productsIds,
    },
  })
  invariant(products, 'No data returned from Shopify API')

  return defer({
    isAuthenticated,
    customer,
    heading,
    orders,
    addresses: flattenConnection(customer.addresses),
    featuredData: getFeaturedData(context.storefront),
    accountData,
    products,
  })
}

export default function Authenticated() {
  const data = useLoaderData<typeof loader>()
  const outlet = useOutlet()
  const matches = useMatches()

  const renderAccount = matches.some((match) => {
    return match?.handle?.account
  })

  // Public routes
  if (!data.isAuthenticated) {
    return <Outlet />
  }

  // Authenticated routes
  if (outlet) {
    if (renderAccount) {
      return (
        <Outlet
          context={{
            orders: data?.orders,
            accountData: data?.accountData,
            customer: data?.customer,
          }}
        />
      )
    }
    return (
      <Outlet
        context={{
          customer: data?.customer,
          accountData: data?.accountData,
        }}
      />
    )
  }

  return <Account {...(data as AccountProps)} />
}

function Account({ orders, heading, accountData, products }: AccountProps) {
  return (
    <div className="block lg:flex lg:justify-between px-4 md:px-12 pt-3 md:pt-16 pb-16 md:pb-[100px] bg-white gap-[5%] xl:gap-[125px]">
      <AccountSidebar menu={accountData?.accountSidebarMenu} />
      <div className="w-full grow-0 overflow-hidden">
        <Typography tag="p" variant="displayLarge" theme={{ root: 'mb-5 mt-8 lg:m-0' }}>
          {heading}
        </Typography>
        <AccountLoyaltyBlock />
        {/* <AccountBarcode accountNumber={customer.id} /> */}
        <AccountRewards />
        <AccountOrders orders={orders} isMainPage />
        {products && (
          <>
            <Typography tag="p" variant="pageheading" theme={{ root: 'mb-5' }}>
              Reorder a favourite
            </Typography>
            <div className="grid gap-x-4 gap-y-5 md:gap-x-8 grid-cols-[minmax(160px,_1fr)_minmax(160px,_1fr)] md:grid-cols-[minmax(160px,_281px)_minmax(160px,_281px)_minmax(160px,_281px)]">
              {products.nodes.map((product) => {
                return product && <ProductCard product={product} quickAdd isRatting={1} productTag key={product.id} />
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const CUSTOMER_QUERY = `#graphql
  query CustomerDetails(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      phone
      email
      defaultAddress {
        id
        formatted
        firstName
        lastName
        company
        address1
        address2
        country
        province
        city
        zip
        phone
      }
      addresses(first: 6) {
        edges {
          node {
            id
            formatted
            firstName
            lastName
            company
            address1
            address2
            country
            province
            city
            zip
            phone
          }
        }
      }
      orders(first: 250, sortKey: PROCESSED_AT, reverse: true) {
        edges {
          node {
            id
            orderNumber
            processedAt
            financialStatus
            fulfillmentStatus
            currentTotalPrice {
              amount
              currencyCode
            }
            lineItems(first: 10) {
              edges {
                node {
                  variant {
                    id
                    image {
                      url
                      altText
                      height
                      width
                    }
                    product {
                      id
                    }
                  }
                  title
                }
              }
            }
          }
        }
      }
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

const ACCOUNT_QUERY = `#graphql
query accountData(
  $language: LanguageCode
  $accountSidebarMenuHandle: String!
) @inContext(language: $language) {
    accountSidebarMenu: menu(handle: $accountSidebarMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
  }
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
`

async function getAccountData({ storefront }: AppLoadContext) {
  const ACCOUNT_SIDEBAR_MENU_HANDLE = 'account-sidebar-menu'

  const data = await storefront.query<AccountDataProps>(ACCOUNT_QUERY, {
    variables: {
      accountSidebarMenuHandle: ACCOUNT_SIDEBAR_MENU_HANDLE,
    },
  })

  invariant(data, 'No data returned from Shopify API')

  const customPrefixes = { BLOG: '', CATALOG: 'products' }

  const accountSidebarMenu = data?.accountSidebarMenu ? parseMenu(data.accountSidebarMenu, customPrefixes) : undefined

  return { accountSidebarMenu }
}

const PRODUCTS_QUERY = `#graphql
  query products( $ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        id
        title
        vendor
        handle
        options {
          name
          values
        }
        variants(first: 1) {
          nodes {
            id
            availableForSale
            selectedOptions {
              name
              value
            }
            image {
              id
              url
              altText
              width
              height
            }
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            sku
            title
            unitPrice {
              amount
              currencyCode
            }
            product {
              title
              handle
            }
          }
        }
      }
    }
  }
`
