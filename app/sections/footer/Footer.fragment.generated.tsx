import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type FooterFragment = { __typename?: 'FooterConfig', androidAppStoreUrl?: string | null, iOsAppStoreUrl?: string | null, instagramUrl?: string | null, facebookUrl?: string | null, tiktokUrl?: string | null, youtubeUrl?: string | null, styleSocietyHeading?: string | null, styleSocietyContent?: string | null, socialLinksHeadingText?: string | null, acknowledgementTitle?: string | null, footerLogo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, paymentLogos: Array<{ __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string }>, styleSocietyCta?: { __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null } | null, legalLinks: Array<{ __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null }>, helpCentreBox?: { __typename?: 'RichText', html: string, text: string } | null, footerLinks: Array<{ __typename?: 'LinkCollection', id: string, links: Array<{ __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string }>, headingLink?: { __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string } | null }>, acknowledgementContent?: { __typename?: 'RichText', html: string, text: string } | null, assistanceCtAs: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, openInNewWindow?: boolean | null, url?: string | null }>, uniqueSellingPoints: Array<{ __typename?: 'FooterUsp', description?: string | null, headingText?: string | null, id: string, uspIcon: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string } }> };

export const FooterFragmentDoc = gql`
    fragment Footer on FooterConfig {
  androidAppStoreUrl
  iOsAppStoreUrl
  instagramUrl
  facebookUrl
  tiktokUrl
  youtubeUrl
  footerLogo {
    id
    altText
    url
    mimeType
  }
  paymentLogos {
    height
    url
    width
    altText
    id
  }
  styleSocietyHeading
  styleSocietyCta {
    id
    linkText
    openInNewWindow
    url
  }
  styleSocietyContent
  socialLinksHeadingText
  legalLinks {
    id
    linkText
    openInNewWindow
    url
  }
  helpCentreBox {
    html
    text
  }
  footerLinks {
    ... on LinkCollection {
      id
      links {
        url
        openInNewWindow
        linkText
        id
      }
      headingLink {
        url
        openInNewWindow
        linkText
        id
      }
    }
  }
  acknowledgementTitle
  acknowledgementContent {
    html
    text
  }
  assistanceCtAs {
    buttonText
    ctaType
    id
    openInNewWindow
    url
  }
  uniqueSellingPoints {
    description
    headingText
    id
    uspIcon {
      height
      url
      width
      altText
      id
    }
  }
}
    `;