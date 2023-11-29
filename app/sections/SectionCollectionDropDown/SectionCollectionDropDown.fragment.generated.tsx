import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type CollectionPageFragment = { __typename?: 'CollectionPage', collection?: { __typename?: 'ShopifyStorefront_Collection', handle: string, title: string } | null };

export type SectionCollectionDropDownFragment = { __typename?: 'SectionCollectionDropDown', id: string, adminTitle?: string | null, headline?: string | null, shopifyCollections: Array<{ __typename?: 'CollectionLink', title: string, id: string, collectionPage?: { __typename?: 'CollectionPage', collection?: { __typename?: 'ShopifyStorefront_Collection', handle: string, title: string } | null } | null }> };

export const CollectionPageFragmentDoc = gql`
    fragment CollectionPage on CollectionPage {
  collection {
    ... on ShopifyStorefront_Collection {
      handle
      title
    }
  }
}
    `;
export const SectionCollectionDropDownFragmentDoc = gql`
    fragment SectionCollectionDropDown on SectionCollectionDropDown {
  id
  adminTitle
  headline
  shopifyCollections {
    title
    id
    collectionPage {
      ... on CollectionPage {
        ...CollectionPage
      }
    }
  }
}
    ${CollectionPageFragmentDoc}`;