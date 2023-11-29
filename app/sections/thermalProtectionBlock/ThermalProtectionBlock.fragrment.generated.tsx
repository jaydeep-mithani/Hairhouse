import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionFeatureGridFragment = { __typename?: 'SectionFeatureGrid', heading?: string | null, description?: string | null, url?: { __typename?: 'Link', linkText: string, url?: string | null } | null, products: Array<{ __typename?: 'ProductCarouselCurated', products: Array<{ __typename?: 'ProductPage', id: string, shopifyId: string }> }> };

export const SectionFeatureGridFragmentDoc = gql`
    fragment SectionFeatureGrid on SectionFeatureGrid {
  heading
  description
  url {
    linkText
    url
  }
  products {
    products {
      id
      shopifyId
    }
  }
}
    `;