import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SocialMediaCtaLargeFragment = { __typename?: 'SocialMediaCtaLarge', id: string, adminTitle?: string | null, handle?: string | null, ctaText?: string | null, platformLinks: Array<{ __typename?: 'LinkIcon', linkUrl?: string | null, openInNewWindow?: boolean | null, iconFile?: { __typename?: 'Asset', url: string, fileName: string } | null }>, imageGrid: Array<{ __typename?: 'Asset', url: string, fileName: string, altText?: string | null }>, fullWidthTemplates: Array<{ __typename?: 'CMSPage', url?: string | null }> };

export const SocialMediaCtaLargeFragmentDoc = gql`
    fragment SocialMediaCtaLarge on SocialMediaCtaLarge {
  id
  adminTitle
  handle
  ctaText
  platformLinks {
    ... on LinkIcon {
      linkUrl
      openInNewWindow
      iconFile {
        url
        fileName
      }
    }
  }
  imageGrid {
    ... on Asset {
      url
      fileName
      altText
    }
  }
  fullWidthTemplates {
    url
  }
}
    `;