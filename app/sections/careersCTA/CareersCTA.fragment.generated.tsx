import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type CareersCtaFragmentFragment = { __typename?: 'SectionContentLinkBlock', adminTitle?: string | null, contentBlock: Array<{ __typename?: 'ModuleIconAndText', adminTitle?: string | null, headingText?: string | null, linkText?: string | null, linkUrl?: string | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, icon?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } | null }> };

export const CareersCtaFragmentFragmentDoc = gql`
    fragment CareersCTAFragment on SectionContentLinkBlock {
  adminTitle
  contentBlock {
    adminTitle
    headingText
    backgroundColour {
      hex
    }
    icon {
      altText
      url
      width
      height
    }
    linkText
    linkUrl
  }
}
    `;