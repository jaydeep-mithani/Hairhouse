import { useOutletContext, useLoaderData } from '@remix-run/react'
import { json, redirect, type LoaderArgs } from '@shopify/remix-oxygen'
import { AccountSidebar, AccountWishlists } from '~/sections'

import { AccountDataProps } from '../types'

export async function loader({ context, params }: LoaderArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken')

  if (!customerAccessToken) {
    return redirect(params.lang ? `${params.lang}/account/login` : '/account/login')
  }

  const wishlists = await fetch(`${context?.env?.WISHLIST_API_ENDPOINT}/wishlistcollection/`, {
    method: 'GET',
    headers: {
      Authorization: `${customerAccessToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  return json({
    wishlists,
  })
}

export interface AccountOutletContext {
  accountData?: AccountDataProps
}

export const handle = {
  account: true,
}

export default function Wishlists() {
  const { accountData } = useOutletContext<AccountOutletContext>()
  const { wishlists } = useLoaderData<typeof loader>()

  return (
    <div className="block lg:flex lg:justify-between px-4 md:px-12 pt-3 md:pt-16 pb-16 md:pb-[100px] bg-white gap-[5%] xl:gap-[125px]">
      <AccountSidebar menu={accountData?.accountSidebarMenu} />
      <div className="w-full grow-0 overflow-hidden">
        <AccountWishlists wishlists={wishlists} />
      </div>
    </div>
  )
}
