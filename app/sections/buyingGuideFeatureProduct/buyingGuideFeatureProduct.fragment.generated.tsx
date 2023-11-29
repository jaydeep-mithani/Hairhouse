import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';

export type BuyingGuidesFeaturedProductsElementsFragment = { __typename?: 'FeaturedProducts', id: string, title?: string | null, subtitle?: string | null,rating?: number | null,totalRating?: number | null, products?: { __typename?: 'GetCollectionByHandle', id: string, handle: string, collection?: Array<{ __typename?: 'ShopifyTest_Product', id: string, title: string, publishedAt: any, handle: string, vendor: string, description: string, variants: { __typename?: 'ShopifyTest_ProductVariantConnection', nodes: Array<{ __typename?: 'ShopifyTest_ProductVariant', id: string, image?: { __typename?: 'ShopifyTest_Image', url: any, altText?: string | null, width?: number | null, height?: number | null } | null, price: { __typename?: 'ShopifyTest_MoneyV2', amount: any, currencyCode: Types.ShopifyTest_CurrencyCode }, compareAtPrice?: { __typename?: 'ShopifyTest_MoneyV2', amount: any, currencyCode: Types.ShopifyTest_CurrencyCode } | null, selectedOptions: Array<{ __typename?: 'ShopifyTest_SelectedOption', name: string, value: string }>, product: { __typename?: 'ShopifyTest_Product', handle: string, title: string } }> } }> | null } | null };

export const BuyingGuidesFeaturedProductsElementsFragmentDoc = gql`
    fragment BuyingGuidesFeaturedProductsElements on FeaturedProducts {
  id
  title
  subtitle
  rating
  totalRating
  products: getCollectionByHandle {
    id
    handle
    collection {
      id
      title
      publishedAt
      handle
      vendor
      variants(first: 1) {
        nodes {
          id
          image {
            url
            altText
            width
            height
          }
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          product {
            handle
            title
          }
        }
      }
      description(truncateAt: 100)
    }
  }
}
    `;