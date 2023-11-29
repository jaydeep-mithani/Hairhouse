import * as Types from '../../../graphql/types'

export type PdpProductRecommendationsProps = {
  data: {
    tabs: Array<{
      title: string | null
      getCollectionByHandle?: {
        __typename?: 'GetCollectionByHandle'
        id: string
        handle?: string
        collection?: Array<{
          __typename?: 'ShopifyTest_Product'
          id: string
          title?: string
          publishedAt?: any
          handle?: string
          vendor?: string
          variants?: {
            __typename?: 'ShopifyTest_ProductVariantConnection'
            nodes?: Array<{
              __typename?: 'ShopifyTest_ProductVariant'
              id: string
              image?: {
                __typename?: 'ShopifyTest_Image'
                url: any
                altText?: string | null
                width?: number | null
                height?: number | null
              } | null
              price: {
                __typename?: 'ShopifyTest_MoneyV2'
                amount: any
                currencyCode: Types.ShopifyStorefront_CurrencyCode
              }
              compareAtPrice?: {
                __typename?: 'ShopifyTest_MoneyV2'
                amount: any
                currencyCode: Types.ShopifyStorefront_CurrencyCode
              } | null
              selectedOptions?: Array<{
                __typename?: 'ShopifyTest_SelectedOption'
                name: string
                value: string
              }>
              product: {
                __typename?: 'ShopifyTest_Product'
                handle: string
                title: string
              }
            }>
          }
        }> | null
      }
    }>
  }
}
