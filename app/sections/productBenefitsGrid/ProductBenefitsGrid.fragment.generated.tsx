import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ProductBenefitsGridFragment = { __typename?: 'ProductBenefitsGrid', id: string, items?: { __typename?: 'ProductBenefitsItem', id: string, image?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null, id: string } | null } | null };

export const ProductBenefitsGridFragmentDoc = gql`
    fragment ProductBenefitsGrid on ProductBenefitsGrid {
  id
  items {
    ... on ProductBenefitsItem {
      id
      image {
        altText
        url
        width
        height
        id
      }
    }
  }
}
    `;