import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ArticlePageImageSectionFragment = { __typename?: 'SectionFullWidthImage', id: string, imageLayout?: Types.ImageLayout | null, images: Array<{ __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null }> };

export const ArticlePageImageSectionFragmentDoc = gql`
    fragment ArticlePageImageSection on SectionFullWidthImage {
  id
  imageLayout
  images {
    altText
    height
    url
    width
  }
}
    `;