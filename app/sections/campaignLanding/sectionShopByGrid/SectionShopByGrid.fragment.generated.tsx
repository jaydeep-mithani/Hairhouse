import * as Types from '../../../../graphql/types';

import gql from 'graphql-tag';
export type SectionShopByGridFragment = { __typename?: 'SectionShopByGrid', id: string, title?: string | null, description?: string | null, categoryTiles: Array<{ __typename?: 'EditorialItem', heading?: string | null, url?: string | null, description?: string | null, image: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } }> };

export type EditorialItemFragment = { __typename?: 'EditorialItem', heading?: string | null, url?: string | null, description?: string | null, image: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } };

export const EditorialItemFragmentDoc = gql`
    fragment EditorialItem on EditorialItem {
  heading
  url
  description
  image {
    altText
    height
    size
    width
    url
  }
}
    `;
export const SectionShopByGridFragmentDoc = gql`
    fragment SectionShopByGrid on SectionShopByGrid {
  id
  title
  description
  categoryTiles {
    ... on EditorialItem {
      ...EditorialItem
    }
  }
}
    ${EditorialItemFragmentDoc}`;