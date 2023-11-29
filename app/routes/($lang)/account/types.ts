import type { Customer, MailingAddress, Order, Menu, Product } from '@shopify/hydrogen/storefront-api-types'
import { AccountSidebarProps } from '~/sections/accountSidebar/AccountSidebar.types'

export enum Theme {
  Link = 'link',
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Text = 'text',
}

export interface AccountDataProps {
  accountSidebarMenu: Menu
}

export interface AccountProps {
  customer: Customer
  orders: Order[]
  heading: string
  addresses: MailingAddress[]
  featuredData: any
  accountData?: AccountDataProps
  products?: ProductsFull
  assistanceData?: AccountSidebarProps['data']
}

export type Wishlists = Wishlist[]

export type Wishlist = {
  customerid?: string
  id: string
  wishlist_title?: string
  products: WishlistProduct[]
  wishlists?: Wishlists
}

export type WishlistProduct = {
  id: string
  title?: string
  image?: {
    admin_graphql_api_id?: string
    id?: string
    src?: string
  }
}

export type ProductsFull = {
  nodes: Product[]
}
