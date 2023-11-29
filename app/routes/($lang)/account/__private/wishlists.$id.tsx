import { useLoaderData } from '@remix-run/react'
import type { Menu, Product } from '@shopify/hydrogen/storefront-api-types'
import { json, redirect, type LoaderArgs, type AppLoadContext } from '@shopify/remix-oxygen'
import { parseMenu } from '~/lib/utils'
import { AccountWishlist, AccountSidebar } from '~/sections'
import invariant from 'tiny-invariant'

import { AccountDataProps, Wishlist } from '../types'

export type ProductsFull = {
  nodes: Product[]
}

export async function loader({ request, context, params }: LoaderArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken')

  if (!customerAccessToken) {
    return redirect(params.lang ? `${params.lang}/account/login` : '/account/login')
  }

  const wishlistId = new URL(request.url).searchParams.get('id')
  const wishlist: Wishlist = await fetch(
    `
        https://shopifyservices-ggyjkzlnja-ts.a.run.app/api/v1/wishlistcollection/${wishlistId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `${customerAccessToken}`,
      },
    },
  ).then((response) => {
    return response.json()
  })

  const productsId = wishlist.products.map((product) => `gid://shopify/Product/${product.id}`)
  const products: ProductsFull = await context.storefront.query(PRODUCTS_QUERY, {
    variables: {
      ids: productsId,
    },
  })
  invariant(products, 'No data returned from Shopify API')

  const accountData = await getAccountData(context)

  return json({
    accountData,
    wishlist,
    customerAccessToken,
    products,
  })
}

export default function WishlistRoute() {
  const { accountData, wishlist, customerAccessToken, products } = useLoaderData<typeof loader>()
  const removeWishlist = (id: string) => {
    return fetch(
      `
      https://shopifyservices-ggyjkzlnja-ts.a.run.app/api/v1/wishlistcollection/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `${customerAccessToken}`,
        },
      },
    )
  }
  const removeProductFromWishlist = (wishlistId: string, productId: string) => {
    return fetch(
      `
      https://shopifyservices-ggyjkzlnja-ts.a.run.app/api/v1/wishlistcollection/${wishlistId}/${productId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `${customerAccessToken}`,
        },
      },
    )
  }

  const updateWishlistTitle = (wishlistId: string, newTitle: string) => {
    const productids = products.nodes.map((node) => node?.id?.split('/').pop()).join(', ')

    return fetch(
      `
      https://shopifyservices-ggyjkzlnja-ts.a.run.app/api/v1/wishlistcollection/${wishlistId}`,
      {
        method: 'PUT',
        headers: {
          Authorization: customerAccessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productids, title: newTitle }),
      },
    )
  }

  return (
    <div className="block lg:flex lg:justify-between px-4 md:px-12 pt-3 md:pt-16 pb-16 md:pb-[100px] bg-white gap-[5%] xl:gap-[125px]">
      <AccountSidebar menu={accountData?.accountSidebarMenu as Menu} />
      <div className="w-full grow-0 overflow-hidden">
        <AccountWishlist
          wishlist={wishlist}
          removeWishlist={removeWishlist}
          removeProductFromWishlist={removeProductFromWishlist}
          productsFull={products}
          updateWishlistTitle={updateWishlistTitle}
        />
      </div>
    </div>
  )
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
