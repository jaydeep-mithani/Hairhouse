import { Typography } from '@overdose/components'
import { useOutletContext } from '@remix-run/react'
import { Customer } from '@shopify/hydrogen/storefront-api-types'
import {
  AccountSidebar,
  AccountLoyaltyBlock,
  AccountRewards,
  AccountMembership,
  FaqAccordions,
  AccountBarcode,
} from '~/sections'

import { AccountDataProps } from '../types'

export interface AccountOutletContext {
  accountData?: AccountDataProps
  customer: Customer
}

export const handle = {
  account: true,
}

// This is a mock accordion data for the account that will come from Hygraph in the future
const ACCORDION_DATA = {
  title: 'Style Society FAQs',
  layout: 'verticalLeft',
  accordions: [
    {
      title: 'How do I earn points?',
      description: {
        text: 'How do I earn points?',
      },
    },
    {
      title: 'How do I claim points?',
      description: {
        text: 'How do I claim points?',
      },
    },
    {
      title: 'How do I claim your eGift vouchers?',
      description: {
        text: 'How do I claim your eGift vouchers?',
      },
    },
    {
      title: 'Can I earn points if I shop in-store?',
      description: {
        text: 'Can I earn points if I shop in-store?',
      },
    },
    {
      title: 'Do I earn points on salon visits?',
      description: {
        text: 'Do I earn points on salon visits?',
      },
    },
    {
      title: 'Do my points expire?',
      description: {
        text: 'Do my points expire?',
      },
    },
  ],
}

export default function StyleStatus() {
  const { accountData, customer } = useOutletContext<AccountOutletContext>()
  return (
    <div className="block lg:flex lg:justify-between px-4 md:px-12 pt-3 md:pt-16 pb-16 md:pb-[100px] bg-white gap-[5%] xl:gap-[125px]">
      <AccountSidebar menu={accountData?.accountSidebarMenu} />
      <div className="w-full grow-0 overflow-hidden">
        <Typography tag="p" variant="displayLarge" theme={{ root: 'mb-5 mt-8 lg:m-0' }}>
          Style Status
        </Typography>
        <AccountLoyaltyBlock />
        <AccountBarcode accountNumber={customer.id} />
        <AccountRewards />
        <AccountMembership />
        <FaqAccordions data={ACCORDION_DATA} />
      </div>
    </div>
  )
}
