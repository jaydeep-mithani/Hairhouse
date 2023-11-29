import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionFullWidthVideoFragment = { __typename?: 'SectionFullWidthVideo', id: string, adminTitle?: string | null, videoTitle?: string | null, salonsVideoDescription?: string | null, desktopLogoHeader?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, mobileLogoHeader?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, tabletLogoHeader?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, videoFile?: { __typename?: 'Asset', url: string, height?: number | null, width?: number | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null };

export const SectionFullWidthVideoFragmentDoc = gql`
    fragment SectionFullWidthVideo on SectionFullWidthVideo {
  id
  adminTitle
  videoTitle
  salonsVideoDescription: description
  desktopLogoHeader {
    altText
    height
    width
    url
  }
  mobileLogoHeader {
    altText
    height
    width
    url
  }
  tabletLogoHeader {
    altText
    height
    width
    url
  }
  videoFile {
    url
    height
    width
  }
  thumbnail {
    altText
    height
    width
    url
  }
}
    `;