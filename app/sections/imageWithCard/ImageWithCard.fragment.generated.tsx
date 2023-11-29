import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionFullWidthImageAndCopyFragment = { __typename?: 'SectionFullWidthImageAndCopy', adminTitle?: string | null, layout?: Types.HeroLayout | null, title?: string | null, subtitle?: string | null, copy?: string | null, desktopImg?: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null, width?: number | null } | null, mobileImage?: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null, width?: number | null } | null, ctaButton: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> };

export const SectionFullWidthImageAndCopyFragmentDoc = gql`
    fragment SectionFullWidthImageAndCopy on SectionFullWidthImageAndCopy {
  adminTitle
  layout
  title
  subtitle
  copy
  desktopImg: desktopImage {
    altText
    url
    height
    width
  }
  mobileImage {
    altText
    url
    height
    width
  }
  ctaButton: cta {
    buttonText
    ctaType
    openInNewWindow
    url
  }
}
    `;