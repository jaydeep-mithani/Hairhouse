import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type FeatureProductCarouselTabbedFragment = { __typename?: 'FeatureProductCarouselTabbed', adminTitle?: string | null, id: string, stage: Types.Stage, navigationPostion?: Types.LinkPositions | null, tabbedContent: Array<{ __typename: 'ProductCarouselCollection', id: string, tabName: string, shopifyCollectionId: string } | { __typename: 'ProductCarouselCurated', id: string, tabName: string, products: Array<{ __typename?: 'ProductPage', id: string, shopifyId: string, adminTitle?: string | null, publishedAt?: any | null, product?: { __typename?: 'ShopifyStorefront_Product', title: string, vendor: string, handle: string, variants: { __typename: 'ShopifyStorefront_ProductVariantConnection', nodes: Array<{ __typename?: 'ShopifyStorefront_ProductVariant', id: string, image?: { __typename?: 'ShopifyStorefront_Image', url: any, altText?: string | null, width?: number | null, height?: number | null } | null, price: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode }, compareAtPrice?: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } | null, product: { __typename?: 'ShopifyStorefront_Product', handle: string, title: string } }> } } | null }> } | { __typename: 'ProductCarouselUnbxd', id: string, tabName: string, stage: Types.Stage, unbxdSectionId?: string | null }>, header?: { __typename?: 'RichText', html: string } | null };

export const FeatureProductCarouselTabbedFragmentDoc = gql`
    fragment FeatureProductCarouselTabbed on FeatureProductCarouselTabbed {
  adminTitle
  ... on FeatureProductCarouselTabbed {
    tabbedContent: content {
      __typename
      ... on ProductCarouselCollection {
        id
        tabName
        shopifyCollectionId
      }
      ... on ProductCarouselCurated {
        id
        tabName
        products {
          id
          shopifyId
          adminTitle
          publishedAt
          product {
            title
            vendor
            handle
            variants {
              __typename
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
                product {
                  handle
                  title
                }
              }
            }
          }
        }
      }
      ... on ProductCarouselUnbxd {
        id
        tabName
        stage
        unbxdSectionId
      }
    }
  }
  id
  header: heading {
    html
  }
  stage
  navigationPostion
}
    `;