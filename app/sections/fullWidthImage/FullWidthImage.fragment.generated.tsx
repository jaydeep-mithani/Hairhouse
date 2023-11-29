import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type FullWidthImageFragment = { __typename?: 'FullWidthImage', adminTitle?: string | null, imageDesktop?: { __typename?: 'ModuleImage', altText: string, image: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null } } | null, imageMobile?: { __typename?: 'ModuleImage', altText: string, image: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null } } | null };

export const FullWidthImageFragmentDoc = gql`
    fragment FullWidthImage on FullWidthImage {
  adminTitle
  imageDesktop {
    altText
    image {
      height
      url
      width
    }
  }
  imageMobile {
    altText
    image {
      height
      url
      width
    }
  }
}
    `;