import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionFullWidthImageFragment = { __typename?: 'SectionFullWidthImage', imageLayout?: Types.ImageLayout | null, images: Array<{ __typename?: 'Asset', altText?: string | null, url: string, size?: number | null, mimeType?: string | null }> };

export const SectionFullWidthImageFragmentDoc = gql`
    fragment SectionFullWidthImage on SectionFullWidthImage {
  imageLayout
  images {
    altText
    url
    size
    mimeType
  }
}
    `;