import { Metafield } from '@shopify/hydrogen/storefront-api-types'

export type TradingHours = {
  name: string
  start: string
  end: string
}

export type StoreLocationTypes = {
  address1: string
  address2: string
  address3: string
  phone: string
  tradingHours: Array<TradingHours>
  latitude?: string
  longitude?: string
}

export type LocationType = {
  id: string
  name: string
  metafields: Metafield[]
}

export type SectionStoreDetailsTypes = {
  location: LocationType
  id: string
  googleKey: string
}
