import { cssBundleHref } from '@remix-run/css-bundle'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useMatches,
  useNavigate,
} from '@remix-run/react'
import { ShopifySalesChannel, Seo, type SeoHandleFunction } from '@shopify/hydrogen'
import { Shop, Cart } from '@shopify/hydrogen/storefront-api-types'
import {
  defer,
  type LinksFunction,
  type MetaFunction,
  type LoaderArgs,
  type AppLoadContext,
} from '@shopify/remix-oxygen'
import { Layout } from '~/components'
import { DrawersProvider } from '~/provider/drawersContext'
import { EmbeddedProvider } from '~/provider/embeddedContext'
import { GlobalLoaderProvider } from '~/provider/globalLoader'
// import { LocalStorageProvider } from './provider/localstorage'
import { useEffect } from 'react'
import invariant from 'tiny-invariant'

import favicon from '../public/favicon.ico'
import { GenericError } from './components/GenericError'
import { useAnalytics } from './hooks/useAnalytics'
import { DEFAULT_LOCALE, parseMenu, type EnhancedMenu } from './lib/utils'
import styles from './styles/app.css'

const seo: SeoHandleFunction<typeof loader> = ({ data, pathname }) => ({
  title: data?.layout?.shop?.name,
  titleTemplate: '%s | Hydrogen Demo Store',
  description: data?.layout?.shop?.description,
  handle: '@shopify',
  url: `https://hydrogen.shop${pathname}`,
})

export const handle = {
  seo,
}

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
    { rel: 'stylesheet', href: styles },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css',
    },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    { rel: 'icon', type: 'image/x-icon', href: favicon },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
})

export async function loader({ request, params, context }: LoaderArgs) {
  const { session } = context
  const headers = new Headers()
  const queryParams = new URL(request.url).searchParams

  const googleKey = context?.env?.GOOGLE_MAPS_KEY

  // If the customer has an active cart id provided in the `cart-id`
  // query param we add it to the Hydrogen session.
  const persistingSessionCartId = queryParams.get('cart-id')

  // If the customer is signed in within the app, customer access token will be provided
  // in the `customer-token` query param. If provided we add it to the Hydrogen session.
  const persistingSessionCustomerAccessToken = queryParams.get('customerAccessToken')

  if (persistingSessionCartId) {
    session.set('cartId', persistingSessionCartId)
    headers.set('Set-Cookie', await session.commit())
  } else if (persistingSessionCustomerAccessToken) {
    session.set('customerAccessToken', persistingSessionCustomerAccessToken)
    headers.set('Set-Cookie', await session.commit())
  }

  const [cartId, layout] = await Promise.all([context.session.get('cartId'), getLayoutData(context)])
  const { language, country } = context.storefront.i18n

  if (params.lang && params.lang.toLowerCase() !== `${language}-${country}`.toLowerCase()) {
    // If the lang URL param is defined, yet we still are on `EN-US`
    // the the lang param must be invalid, send to the 404 page
    throw new Response(null, { status: 404 })
  }

  return defer({
    layout,
    googleKey,
    selectedLocale: context.storefront.i18n,
    cart: cartId ? getCart(context, cartId) : undefined,
    analytics: {
      shopifySalesChannel: ShopifySalesChannel.hydrogen,
      shopId: layout.shop.id,
    },
  })
}

export default function App() {
  const data = useLoaderData<typeof loader>()
  const locale = data.selectedLocale ?? DEFAULT_LOCALE
  const hasUserConsent = true

  useAnalytics(hasUserConsent, locale)

  return (
    <html lang={locale.language}>
      <head>
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <EmbeddedProvider>
          <GlobalLoaderProvider>
            <DrawersProvider>
              <Layout layout={data.layout as LayoutData} key={`${locale.language}-${locale.country}`}>
                <Outlet />
              </Layout>
            </DrawersProvider>
          </GlobalLoaderProvider>
        </EmbeddedProvider>
        <ScrollRestoration />
        <script
          type="text/javascript"
          src="https://www.bugherd.com/sidebarv2.js?apikey=ktvtwzlxtxeohcabbiehaa"
          async="true"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.googleKey)}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  )
}

export function CatchBoundary() {
  const [root] = useMatches()
  const caught = useCatch()
  const isNotFound = caught.status === 404
  const locale = root.data?.selectedLocale ?? DEFAULT_LOCALE
  const navigate = useNavigate()

  useEffect(() => {
    if (isNotFound) {
      navigate('/pages/404')
    }
  }, [isNotFound, navigate])

  return (
    <html lang={locale.language}>
      <head>
        <title>{isNotFound ? 'Not found' : 'Error'}</title>
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <EmbeddedProvider>
          <GlobalLoaderProvider>
            {/* <LocalStorageProvider> */}
            <DrawersProvider>
              <Layout layout={root?.data?.layout as LayoutData} key={`${locale.language}-${locale.country}`}>
                {!isNotFound && <GenericError error={{ message: `${caught.status} ${caught.data}` }} />}
                <Outlet />
              </Layout>
            </DrawersProvider>
            {/* </LocalStorageProvider> */}
          </GlobalLoaderProvider>
        </EmbeddedProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  const [root] = useMatches()
  const locale = root?.data?.selectedLocale ?? DEFAULT_LOCALE

  return (
    <html lang={locale.language}>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout layout={root?.data?.layout}>
          <GenericError error={error} />
        </Layout>
        <Scripts />
      </body>
    </html>
  )
}

const LAYOUT_QUERY = `#graphql
  query layoutMenus(
    $language: LanguageCode
    $mainMenuHandle: String!
    $footerMenuHandle: String!
    $footerBottomHandle: String!
  ) @inContext(language: $language) {
    shop {
      id
      name
      description
    }
    mainMenu: menu(handle: $mainMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
          items {
            ...MenuItem
          }
        }
      }
    }
    footerMenu: menu(handle: $footerMenuHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
    footerBottom: menu(handle: $footerBottomHandle) {
      id
      items {
        ...MenuItem
        items {
          ...MenuItem
        }
      }
    }
    footerBottom: menu(handle: $footerBottomHandle) {
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

export interface LayoutData {
  mainMenu: EnhancedMenu
  footerMenu: EnhancedMenu
  footerBottom: EnhancedMenu
  shop: Shop
  cart?: Promise<Cart>
}

async function getLayoutData({ storefront }: AppLoadContext) {
  const MAIN_MENU_HANDLE = 'main-menu'
  const FOOTER_MENU_HANDLE = 'footer'
  const FOOTER_BOTTOM_HANDLE = 'footer-bottom'

  const data = await storefront.query<LayoutData>(LAYOUT_QUERY, {
    variables: {
      mainMenuHandle: MAIN_MENU_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
      footerBottomHandle: FOOTER_BOTTOM_HANDLE,
      language: storefront.i18n.language,
    },
  })

  invariant(data, 'No data returned from Shopify API')

  /*
    Modify specific links/routes (optional)
    @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
    e.g here we map:
      - /blogs/news -> /news
      - /blog/news/blog-post -> /news/blog-post
      - /collections/all -> /products
  */
  const customPrefixes = { BLOG: '', CATALOG: 'products' }

  const mainMenu = data?.mainMenu ? parseMenu(data.mainMenu, customPrefixes) : undefined

  const footerMenu = data?.footerMenu ? parseMenu(data.footerMenu, customPrefixes) : undefined

  const footerBottom = data?.footerBottom ? parseMenu(data.footerBottom, customPrefixes) : undefined

  return { shop: data.shop, mainMenu, footerMenu, footerBottom }
}

const CART_QUERY = `#graphql
  query CartQuery($cartId: ID!, $country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartFragment
    }
  }

  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...MoneyFragment
              }
              price {
                ...MoneyFragment
              }
              requiresShipping
              title
              image {
                ...ImageFragment
              }
              product {
                vendor
                handle
                title
                id
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...MoneyFragment
      }
      totalAmount {
        ...MoneyFragment
      }
      totalDutyAmount {
        ...MoneyFragment
      }
      totalTaxAmount {
        ...MoneyFragment
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
    }
  }

  fragment MoneyFragment on MoneyV2 {
    currencyCode
    amount
  }

  fragment ImageFragment on Image {
    id
    url
    altText
    width
    height
  }
`

export async function getCart({ storefront }: AppLoadContext, cartId: string) {
  invariant(storefront, 'missing storefront client in cart query')

  const { cart } = await storefront.query<{ cart?: Cart }>(CART_QUERY, {
    variables: {
      cartId,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
    cache: storefront.CacheNone(),
  })

  return cart
}
