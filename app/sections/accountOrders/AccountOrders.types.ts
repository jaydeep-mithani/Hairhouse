import type { Order } from '@shopify/hydrogen/storefront-api-types'

export type AccountOrdersProps = {
  isMainPage: boolean
  orders: Order[]
}

export type AccountOrder = Order
