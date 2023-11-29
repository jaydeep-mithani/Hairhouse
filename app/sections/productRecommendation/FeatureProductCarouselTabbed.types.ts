import { FeatureProductCarouselTabbedFragment } from './FeatureProductCarouselTabbed.fragment.generated'

export type FeatureProductCarouselTabbedProps = FeatureProductCarouselTabbedFragment

export type ProductCarouselCollection = {
  __typename: 'ProductCarouselCollection'
  id: string
  tabName: string
  shopifyCollectionId: string
}
export type ProductCarouselCurated = {
  __typename: 'ProductCarouselCurated'
  id: string
  tabName: string
  products: Array<{
    __typename?: 'ProductPage'
    id: string
    shopifyId: string
    adminTitle?: string | null
    publishedAt?: unknown | null
    product?: {
      __typename?: 'ShopifyStorefront_Product'
      title: string
      vendor: string
      variants: {
        __typename: 'ShopifyStorefront_ProductVariantConnection'
        nodes: Array<{
          __typename?: 'ShopifyStorefront_ProductVariant'
          id: string
          image?: {
            __typename?: 'ShopifyStorefront_Image'
            url: unknown
            altText?: string | null
            width?: number | null
            height?: number | null
          } | null
          price: {
            __typename?: 'ShopifyStorefront_MoneyV2'
            amount: unknown
            currencyCode: Types.ShopifyStorefront_CurrencyCode
          }
          compareAtPrice?: {
            __typename?: 'ShopifyStorefront_MoneyV2'
            amount: unknown
            currencyCode: Types.ShopifyStorefront_CurrencyCode
          } | null
          product: {
            __typename?: 'ShopifyStorefront_Product'
            handle: string
            title: string
          }
        }>
      }
    } | null
  }>
}
