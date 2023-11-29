import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionProductCompareFragment = { __typename?: 'SectionProductCompare', id: string, title?: string | null, collections: Array<{ __typename?: 'ProductCompareTable', id: string, displayTitle?: string | null, collectionHandle?: string | null }>, tableRows: Array<{ __typename: 'MetafieldListItem', id: string, metafieldLabel?: string | null, metafieldReference?: string | null }> };

export const SectionProductCompareFragmentDoc = gql`
    fragment SectionProductCompare on SectionProductCompare {
  id
  title
  collections {
    ... on ProductCompareTable {
      id
      displayTitle
      collectionHandle
    }
  }
  tableRows {
    __typename
    ... on MetafieldListItem {
      id
      metafieldLabel
      metafieldReference
    }
  }
}
    `;