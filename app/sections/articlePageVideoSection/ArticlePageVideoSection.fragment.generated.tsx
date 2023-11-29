import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ArticlePageVideoSectionFragment = { __typename?: 'SectionFullWidthVideo', id: string, videoTitle?: string | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, videoFile?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null };

export const ArticlePageVideoSectionFragmentDoc = gql`
    fragment ArticlePageVideoSection on SectionFullWidthVideo {
  id
  thumbnail {
    altText
    height
    url
    width
  }
  videoFile {
    altText
    height
    width
    url
  }
  videoTitle
}
    `;