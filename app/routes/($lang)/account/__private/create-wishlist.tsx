import { Typography, Input, Button } from '@overdose/components'
import { useOutletContext, useLoaderData } from '@remix-run/react'
import { json, redirect, type LoaderArgs } from '@shopify/remix-oxygen'
import { AccountSidebar } from '~/sections'
import { useState } from 'react'

import { AccountDataProps } from '../types'

export interface AccountOutletContext {
  accountData?: AccountDataProps
}

export const handle = {
  account: true,
}

export async function loader({ context, params }: LoaderArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken')

  if (!customerAccessToken) {
    return redirect(params.lang ? `${params.lang}/account/login` : '/account/login')
  }

  return json({
    customerAccessToken,
  })
}

export default function CreateWishlist() {
  const [inputValue, setInputValue] = useState('')
  const [isValidName, setIsValidName] = useState(true)
  const { accountData } = useOutletContext<AccountOutletContext>()
  const { customerAccessToken } = useLoaderData<typeof loader>()

  const handleInput = (value: string) => {
    if (value && value !== '') {
      setInputValue(value)
      setIsValidName(true)
    } else {
      setIsValidName(false)
    }
  }

  const createNewWishlist = (newTitle: string) => {
    if (newTitle && newTitle !== '') {
      return fetch(
        `
        https://shopifyservices-ggyjkzlnja-ts.a.run.app/api/v1/wishlistcollection`,
        {
          method: 'POST',
          headers: {
            Authorization: customerAccessToken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: newTitle }),
        },
      )
    }
  }

  return (
    <div className="block lg:flex lg:justify-between px-4 md:px-12 pt-3 md:pt-16 pb-16 md:pb-[100px] bg-white gap-[5%] xl:gap-[125px]">
      <AccountSidebar menu={accountData?.accountSidebarMenu} />
      <div className="w-full grow-0 overflow-hidden">
        <div className="max-w-[678px] mt-8 lg:m-0">
          <div className="flex flex-col gap-6 md:gap-5">
            <Typography tag="p" variant="displayLarge">
              Create New Wishlist
            </Typography>
            <Input label="Name" name="name" theme={{ root: 'w-full' }} onChange={handleInput} />
            {!isValidName && (
              <Typography tag="p" variant="caption" theme={{ root: 'pl-3 text-red-500' }}>
                Name is incorrect.
              </Typography>
            )}
          </div>
          <Button
            status="primary"
            theme={{ root: 'w-full md:w-[250px] mt-8' }}
            onClick={() =>
              createNewWishlist(inputValue)?.then(() => {
                window.location.href = '/account/wishlists'
              })
            }>
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}
