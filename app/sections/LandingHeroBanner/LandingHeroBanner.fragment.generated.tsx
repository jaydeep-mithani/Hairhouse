import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionHeroBannerWithLinkFragment = { __typename?: 'SectionHeroBannerWithLink', id: string, title?: string | null, menuBackground?: string | null, bannerDesktopImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, mobileImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, tabletImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, logoDesktopImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, logoMobileImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, logoTabletImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, links: Array<{ __typename?: 'Cta', buttonText?: string | null, url?: string | null, id: string }> };

export const SectionHeroBannerWithLinkFragmentDoc = gql`
    fragment SectionHeroBannerWithLink on SectionHeroBannerWithLink {
  id
  title
  bannerDesktopImage: desktopImage {
    height
    width
    url
    altText
  }
  mobileImage {
    height
    width
    url
    altText
  }
  tabletImage {
    height
    width
    url
    altText
  }
  logoDesktopImage {
    height
    width
    url
    altText
  }
  logoMobileImage {
    height
    width
    url
    altText
  }
  logoTabletImage {
    height
    width
    url
    altText
  }
  menuBackground
  links {
    buttonText
    url
    id
  }
}
    `;