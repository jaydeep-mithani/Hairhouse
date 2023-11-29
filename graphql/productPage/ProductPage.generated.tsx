import * as Types from '../types';

import gql from 'graphql-tag';
import { SectionProductMainFragmentDoc } from '../../app/sections/sectionProductMain/SectionProductMain.fragment.generated';
import { ProductHowToFragmentDoc } from '../../app/sections/productHowTo/ProductHowTo.fragment.generated';
import { FeatureProductCarouselTabbedFragmentDoc } from '../../app/sections/productRecommendation/FeatureProductCarouselTabbed.fragment.generated';
import { EditorialTileFragmentDoc } from '../../app/sections/multiColumnContent/MultiColumnContent.fragment.generated';
import { FooterFragmentDoc } from '../../app/sections/footer/Footer.fragment.generated';
import { HeaderFragmentDoc } from '../../app/sections/header/Header.fragment.generated';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ProductPagesQueryVariables = Types.Exact<{
  handle?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ProductPagesQuery = { __typename?: 'Query', productPages: Array<{ __typename?: 'ProductPage', hideBreadcrumb?: boolean | null, id: string, shopifyId: string, product?: { __typename?: 'ShopifyStorefront_Product', id: string, description: string, handle: string } | null, sections: Array<{ __typename: 'EditorialTile', id: string, name?: string | null, heading?: string | null, tiles: Array<{ __typename?: 'EditorialItem', description?: string | null, heading?: string | null, image: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } }>, cta?: { __typename?: 'Cta', buttonText?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null, url?: string | null } | null } | { __typename: 'FeatureProductCarouselTabbed', id: string, adminTitle?: string | null, stage: Types.Stage, navigationPostion?: Types.LinkPositions | null, tabbedContent: Array<{ __typename: 'ProductCarouselCollection', id: string, tabName: string, shopifyCollectionId: string } | { __typename: 'ProductCarouselCurated', id: string, tabName: string, products: Array<{ __typename?: 'ProductPage', id: string, shopifyId: string, adminTitle?: string | null, publishedAt?: any | null, product?: { __typename?: 'ShopifyStorefront_Product', title: string, vendor: string, handle: string, variants: { __typename: 'ShopifyStorefront_ProductVariantConnection', nodes: Array<{ __typename?: 'ShopifyStorefront_ProductVariant', id: string, image?: { __typename?: 'ShopifyStorefront_Image', url: any, altText?: string | null, width?: number | null, height?: number | null } | null, price: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode }, compareAtPrice?: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } | null, product: { __typename?: 'ShopifyStorefront_Product', handle: string, title: string } }> } } | null }> } | { __typename: 'ProductCarouselUnbxd', id: string, tabName: string, stage: Types.Stage, unbxdSectionId?: string | null }>, header?: { __typename?: 'RichText', html: string } | null } | { __typename: 'ProductHowTo', id: string, headline?: { __typename?: 'RichText', html: string } | null, content?: { __typename?: 'RichText', html: string } | null, howToAsset1?: { __typename?: 'Asset', width?: number | null, height?: number | null, size?: number | null, mimeType?: string | null, altText?: string | null, fileName: string, url: string } | null, howToAsset2?: { __typename?: 'Asset', width?: number | null, height?: number | null, size?: number | null, mimeType?: string | null, altText?: string | null, fileName: string, url: string } | null } | { __typename: 'SectionBlogCarousel', id: string } | { __typename: 'SectionProductMain', id: string } | { __typename: 'SectionProductReview', id: string } | { __typename: 'SectionRelatedProduct', id: string }> }>, websiteConfigs: Array<{ __typename?: 'WebsiteConfig', footer?: { __typename?: 'FooterConfig', androidAppStoreUrl?: string | null, iOsAppStoreUrl?: string | null, instagramUrl?: string | null, facebookUrl?: string | null, tiktokUrl?: string | null, youtubeUrl?: string | null, styleSocietyHeading?: string | null, styleSocietyContent?: string | null, socialLinksHeadingText?: string | null, acknowledgementTitle?: string | null, footerLogo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, paymentLogos: Array<{ __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string }>, styleSocietyCta?: { __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null } | null, legalLinks: Array<{ __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null }>, helpCentreBox?: { __typename?: 'RichText', html: string, text: string } | null, footerLinks: Array<{ __typename?: 'LinkCollection', id: string, links: Array<{ __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string }>, headingLink?: { __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string } | null }>, acknowledgementContent?: { __typename?: 'RichText', html: string, text: string } | null, assistanceCtAs: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, openInNewWindow?: boolean | null, url?: string | null }>, uniqueSellingPoints: Array<{ __typename?: 'FooterUsp', description?: string | null, headingText?: string | null, id: string, uspIcon: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string } }> } | null, header?: { __typename?: 'HeaderConfig', id: string, promoBarExpiry?: any | null, logo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, megaMenu?: { __typename?: 'MegaMenu', navigationItems: Array<{ __typename?: 'TopNavigation', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn1: Array<{ __typename?: 'MenuColumn1', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menurow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null }> } | null }> } | null }>, pageBlogArticles: Array<{ __typename?: 'ArticlePage', id: string, url?: string | null, title?: string | null, shortDescription?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, blog?: { __typename?: 'BlogPage', title?: string | null } | null }>, offerTiles: Array<{ __typename?: 'MenuTile', id: string, name?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, link?: { __typename?: 'Link', linkText: string, url?: string | null } | null }> }> }> } | null, mobileMenuFooter: Array<{ __typename?: 'LinkPromoImage', id: string, adminTitle?: string | null, imageLink?: string | null, promoImage?: { __typename?: 'Asset', url: string } | null }>, brandsBrandsLogos: Array<{ __typename?: 'BrandsBrandLogo', id: string, brandName?: string | null, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', id: string, url: string } | null }>, promoBarContent?: { __typename?: 'RichText', text: string, html: string } | null, promoBarBackgroundColour?: { __typename?: 'Color', css: string, hex: any, rgba: { __typename?: 'RGBA', a: any, b: any, g: any, r: any } } | null, storeLocatorLinks?: { __typename?: 'Storelocatornav', id: string, name?: string | null, storeLocatorLinks: Array<{ __typename?: 'Link', id: string, linkText: string, url?: string | null, openInNewWindow?: boolean | null }> } | null, sectionAccountSignupCta?: { __typename?: 'SectionAccountSignupCta', benefits: Array<string>, id: string, headline?: { __typename?: 'RichText', html: string } | null, signupButtons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> } | null } | null }> };


export const ProductPagesDocument = gql`
    query productPages($handle: String) {
  productPages(where: {handle: $handle}, first: 1) {
    hideBreadcrumb
    id
    shopifyId
    product {
      id
      description
      handle
    }
    sections {
      ... on Node {
        id
        __typename
      }
      ... on SectionProductMain {
        ...SectionProductMain
      }
      ... on ProductHowTo {
        ...ProductHowTo
      }
      ... on FeatureProductCarouselTabbed {
        ...FeatureProductCarouselTabbed
      }
      ... on EditorialTile {
        ...EditorialTile
      }
    }
  }
  websiteConfigs(first: 1) {
    footer {
      ...Footer
    }
    header {
      ...Header
    }
  }
}
    ${SectionProductMainFragmentDoc}
${ProductHowToFragmentDoc}
${FeatureProductCarouselTabbedFragmentDoc}
${EditorialTileFragmentDoc}
${FooterFragmentDoc}
${HeaderFragmentDoc}`;

export function useProductPagesQuery(options?: Omit<Urql.UseQueryArgs<ProductPagesQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductPagesQuery, ProductPagesQueryVariables>({ query: ProductPagesDocument, ...options });
};