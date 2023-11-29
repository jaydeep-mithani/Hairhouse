import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
import { SectionAccountSignupCtaFragmentDoc } from '../../components/customerLogin/CustomerLogin.fragment.generated';
export type HeaderFragment = { __typename?: 'HeaderConfig', id: string, promoBarExpiry?: any | null, logo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, megaMenu?: { __typename?: 'MegaMenu', navigationItems: Array<{ __typename?: 'TopNavigation', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn1: Array<{ __typename?: 'MenuColumn1', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menurow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null }> } | null }> } | null }>, pageBlogArticles: Array<{ __typename?: 'ArticlePage', id: string, url?: string | null, title?: string | null, shortDescription?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, blog?: { __typename?: 'BlogPage', title?: string | null } | null }>, offerTiles: Array<{ __typename?: 'MenuTile', id: string, name?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, link?: { __typename?: 'Link', linkText: string, url?: string | null } | null }> }> }> } | null, mobileMenuFooter: Array<{ __typename?: 'LinkPromoImage', id: string, adminTitle?: string | null, imageLink?: string | null, promoImage?: { __typename?: 'Asset', url: string } | null }>, brandsBrandsLogos: Array<{ __typename?: 'BrandsBrandLogo', id: string, brandName?: string | null, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', id: string, url: string } | null }>, promoBarContent?: { __typename?: 'RichText', text: string, html: string } | null, promoBarBackgroundColour?: { __typename?: 'Color', css: string, hex: any, rgba: { __typename?: 'RGBA', a: any, b: any, g: any, r: any } } | null, storeLocatorLinks?: { __typename?: 'Storelocatornav', id: string, name?: string | null, storeLocatorLinks: Array<{ __typename?: 'Link', id: string, linkText: string, url?: string | null, openInNewWindow?: boolean | null }> } | null, sectionAccountSignupCta?: { __typename?: 'SectionAccountSignupCta', benefits: Array<string>, id: string, headline?: { __typename?: 'RichText', html: string } | null, signupButtons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> } | null };

export type PromoBarBackgroundColourFragment = { __typename?: 'Color', css: string, hex: any, rgba: { __typename?: 'RGBA', a: any, b: any, g: any, r: any } };

export type RgbaFragment = { __typename?: 'RGBA', a: any, b: any, g: any, r: any };

export const RgbaFragmentDoc = gql`
    fragment RGBA on RGBA {
  a
  b
  g
  r
}
    `;
export const PromoBarBackgroundColourFragmentDoc = gql`
    fragment PromoBarBackgroundColour on Color {
  css
  hex
  rgba {
    ... on RGBA {
      ...RGBA
    }
  }
}
    ${RgbaFragmentDoc}`;
export const HeaderFragmentDoc = gql`
    fragment Header on HeaderConfig {
  id
  logo {
    id
    altText
    url
    mimeType
  }
  megaMenu {
    navigationItems(first: 15) {
      id
      headingText
      name
      url
      menuColumn1 {
        id
        name
        bottomLinkText
        shopAllUrl
        menurow {
          id
          headingText
          name
          url
          menuColumn2 {
            id
            name
            bottomLinkText
            shopAllUrl
            menuRow {
              id
              headingText
              name
              url
              menuColumn2 {
                id
                name
                bottomLinkText
                shopAllUrl
                menuRow {
                  id
                  headingText
                  name
                  url
                }
              }
            }
          }
        }
        pageBlogArticles {
          id
          url
          title
          shortDescription
          image {
            altText
            url
          }
          blog {
            title
          }
        }
        offerTiles {
          id
          name
          image {
            altText
            url
          }
          link {
            linkText
            url
          }
        }
      }
    }
  }
  mobileMenuFooter {
    id
    adminTitle
    imageLink
    promoImage {
      url
    }
  }
  brandsBrandsLogos {
    id
    brandName
    brandUrl
    brandLogo {
      id
      url
    }
  }
  promoBarContent {
    text
    html
  }
  promoBarExpiry
  promoBarBackgroundColour {
    ... on Color {
      ...PromoBarBackgroundColour
    }
  }
  storeLocatorLinks {
    id
    name
    storeLocatorLinks(first: 15) {
      id
      linkText
      url
      openInNewWindow
    }
  }
  sectionAccountSignupCta {
    ...SectionAccountSignupCta
  }
}
    ${PromoBarBackgroundColourFragmentDoc}
${SectionAccountSignupCtaFragmentDoc}`;