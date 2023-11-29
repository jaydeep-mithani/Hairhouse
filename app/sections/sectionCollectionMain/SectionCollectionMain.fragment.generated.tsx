import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionCollectionMainFragment = { __typename: 'SectionCollectionMain', id: string, modulePromoBanner?: { __typename?: 'ModulePromoBanner', adminTitle?: string | null, urlLink?: string | null, desktopImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, mobileImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null } | null };

export const SectionCollectionMainFragmentDoc = gql`
    fragment SectionCollectionMain on SectionCollectionMain {
  id
  __typename
  modulePromoBanner {
    adminTitle
    desktopImage {
      altText
      height
      url
      width
    }
    mobileImage {
      altText
      height
      url
      width
    }
    urlLink
  }
}
    `;