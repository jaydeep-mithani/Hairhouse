import { useOutletContext } from '@remix-run/react'
import { AccountCommunication, AccountSidebar } from '~/sections'

import { AccountDataProps } from '../types'

export interface AccountOutletContext {
  accountData?: AccountDataProps
}

export const handle = {
  account: true,
}

export default function Communication() {
  const { accountData } = useOutletContext<AccountOutletContext>()
  return (
    <div className="block lg:flex lg:justify-between px-4 md:px-12 pt-3 md:pt-16 pb-16 md:pb-[100px] bg-white gap-[5%] xl:gap-[125px]">
      <AccountSidebar menu={accountData?.accountSidebarMenu} />
      <div className="w-full grow-0 overflow-hidden">
        <AccountCommunication />
      </div>
    </div>
  )
}
