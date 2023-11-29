import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionVideoCarouselFragment = { __typename?: 'SectionVideoCarousel', id: string, headline?: string | null, videos: Array<{ __typename?: 'ModuleVideo', id: string, altText?: string | null, name?: string | null, time?: string | null, video?: { __typename?: 'Asset', id: string, url: string } | null, thumbnail?: { __typename?: 'Asset', id: string, url: string } | null }> };

export const SectionVideoCarouselFragmentDoc = gql`
    fragment SectionVideoCarousel on SectionVideoCarousel {
  id
  headline
  videos(first: 50) {
    id
    altText
    name
    time
    video {
      id
      url
    }
    thumbnail {
      id
      url
    }
  }
}
    `;