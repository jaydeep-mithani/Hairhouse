import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ProductHighlightsFragment = { __typename?: 'ProductHighlights', adminTitle?: string | null, totalReviews?: number | null, ratings?: number | null, accordions: Array<{ __typename?: 'ModuleAccordion', title?: string | null, description?: { __typename?: 'RichText', html: string } | null }>, button?: { __typename?: 'Button', buttonText: string, buttonTheme?: Types.Theme | null, buttonUrl?: string | null, displayButton?: boolean | null } | null, getProductByHandles: Array<{ __typename?: 'GetProductByHandle', handle?: string | null, productData?: Array<{ __typename?: 'ShopifyTest_ProductVariantEdge', node: { __typename?: 'ShopifyTest_ProductVariant', id: string, title: string, price: { __typename?: 'ShopifyTest_MoneyV2', amount: any }, image?: { __typename?: 'ShopifyTest_Image', url: any, altText?: string | null, height?: number | null, width?: number | null } | null, product: { __typename?: 'ShopifyTest_Product', id: string, title: string, description: string } } }> | null }> };

export const ProductHighlightsFragmentDoc = gql`
    fragment ProductHighlights on ProductHighlights {
  adminTitle
  totalReviews
  ratings
  accordions {
    ... on ModuleAccordion {
      title
      description {
        html
      }
    }
  }
  button {
    buttonText
    buttonTheme
    buttonUrl
    displayButton
  }
  getProductByHandles(first: 10) {
    handle
    productData {
      node {
        id
        title
        price {
          amount
        }
        image {
          url
          altText
          height
          width
        }
        product {
          id
          title
          description
        }
      }
    }
  }
}
    `;
