import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ArticleProductCarouselFragment = { __typename?: 'SectionRelatedProduct', id: string, headline?: string | null, subText?: string | null, products: Array<{ __typename?: 'ProductPage', id: string, product?: { __typename?: 'ShopifyStorefront_Product', id: string, availableForSale: boolean, descriptionHtml: any, productType: string, publishedAt: any, tags: Array<string>, title: string, totalInventory?: number | null, vendor: string, compareAtPriceRange: { __typename?: 'ShopifyStorefront_ProductPriceRange', maxVariantPrice: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode }, minVariantPrice: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } }, featuredImage?: { __typename?: 'ShopifyStorefront_Image', altText?: string | null, height?: number | null, src: any, url: any, width?: number | null } | null, priceRange: { __typename?: 'ShopifyStorefront_ProductPriceRange', maxVariantPrice: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode }, minVariantPrice: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } }, variants: { __typename?: 'ShopifyStorefront_ProductVariantConnection', nodes: Array<{ __typename?: 'ShopifyStorefront_ProductVariant', availableForSale: boolean, currentlyNotInStock: boolean, quantityAvailable?: number | null, id: string, requiresShipping: boolean, sku?: string | null, title: string, compareAtPrice?: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } | null, image?: { __typename?: 'ShopifyStorefront_Image', altText?: string | null, src: any, url: any, height?: number | null, width?: number | null } | null, selectedOptions: Array<{ __typename?: 'ShopifyStorefront_SelectedOption', name: string, value: string }>, price: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } }> } } | null }> };

export const ArticleProductCarouselFragmentDoc = gql`
    fragment ArticleProductCarousel on SectionRelatedProduct {
  id
  headline
  subText
  products(first: 10) {
    id
    product {
      id
      availableForSale
      compareAtPriceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      descriptionHtml
      featuredImage {
        altText
        height
        src
        url
        width
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      productType
      publishedAt
      tags
      title
      totalInventory
      vendor
      variants(first: 10) {
        nodes {
          availableForSale
          compareAtPrice {
            amount
            currencyCode
          }
          currentlyNotInStock
          quantityAvailable
          image {
            altText
            src
            url
            height
            width
          }
          id
          requiresShipping
          selectedOptions {
            name
            value
          }
          sku
          title
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
    `;