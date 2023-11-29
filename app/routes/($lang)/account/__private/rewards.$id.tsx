import { useLoaderData } from '@remix-run/react'
import type { Menu, Product } from '@shopify/hydrogen/storefront-api-types'
import { json, redirect, type LoaderArgs, type AppLoadContext } from '@shopify/remix-oxygen'
import { parseMenu } from '~/lib/utils'
import { AccountSidebar, AccountReward } from '~/sections'
import invariant from 'tiny-invariant'

import { AccountDataProps } from '../types'

export type ProductsFull = {
  nodes: Product[]
}

export async function loader({ context, params }: LoaderArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken')

  if (!customerAccessToken) {
    return redirect(params.lang ? `${params.lang}/account/login` : '/account/login')
  }

  const accountData = await getAccountData(context)

  return json({
    accountData,
  })
}

export default function WishlistRoute() {
  const { accountData } = useLoaderData<typeof loader>()

  return (
    <div className="block lg:flex lg:justify-between px-4 md:px-12 pt-3 md:pt-16 pb-16 md:pb-[100px] bg-white gap-[5%] xl:gap-[125px]">
      <AccountSidebar menu={accountData?.accountSidebarMenu as Menu} />
      <div className="w-full grow-0 overflow-hidden">
        <AccountReward />
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
