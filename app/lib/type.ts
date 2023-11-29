import type { Storefront as HydrogenStorefront } from '@shopify/hydrogen'
import type { CountryCode, CurrencyCode, LanguageCode } from '@shopify/hydrogen/storefront-api-types'

export type Locale = {
  language: LanguageCode
  country: CountryCode
  label: string
  currency: CurrencyCode
}

export type Localizations = Record<string, Locale>

export type I18nLocale = Locale & {
  pathPrefix: string
}

export type Storefront = HydrogenStorefront<I18nLocale>

export enum CartAction {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_CART = 'UPDATE_CART',
  UPDATE_DISCOUNT = 'UPDATE_DISCOUNT',
  UPDATE_BUYER_IDENTITY = 'UPDATE_BUYER_IDENTITY',
}
export type CartActions = keyof typeof CartAction

export enum WishlistAction {
  GET_WISHLIST = 'GET_WISHLIST',
  ADD_ITEM_TO_WISHLIST = 'ADD_ITEM_TO_WISHLIST',
  REMOVE_ITEMS_FROM_WISHLIST = 'REMOVE_ITEMS_FROM_WISHLIST',
  UPSERT_WISHLIST = 'UPSERT_WISHLIST',
}

export type WishlistActions = keyof typeof WishlistAction

export enum SalonBookingAction {
  GET_HAIR_LENGTH = 'GET_HAIR_LENGTH',
  GET_HAIR_SERVICES = 'GET_HAIR_SERVICES',
  GET_ADDONS = 'GET_ADDONS',
  GET_HAIR_STYLIST = 'GET_HAIR_STYLIST',
  CALCULATE_AVALIABLE_APPOINTMENTS = 'CALCULATE_AVALIABLE_APPOINTMENTS',
  POST_BOOKING = 'POST_BOOKING',
}

export type SalonBookingActions = keyof typeof SalonBookingAction

export enum LocationServicesAction {
  GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS',
  GET_MAPS_DATA = 'GET_MAPS_DATA',
  GET_LOCATION_LISTINGS = 'GET_LOCATION_LISTINGS',
}

export type LocationServicesActions = keyof typeof LocationServicesAction
