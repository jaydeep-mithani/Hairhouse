import * as Types from '../types';

import gql from 'graphql-tag';
import { SectionCollectionMainFragmentDoc } from '../../app/sections/sectionCollectionMain/SectionCollectionMain.fragment.generated';
import { SectionPreezieProductFinderFragmentDoc } from '../../app/sections/sectionPreezieProductFinder/SectionPreezieProductFinder.fragment.generated';
import { SectionBlogCarouselFragmentDoc } from '../../app/sections/blogCarousel/BlogCarousel.fragment.generated';
import { BrandLogoGridFragmentDoc } from '../../app/sections/brandLogoGrid/BrandLogoGrid.fragment.generated';
import { SectionCategoryCarouselFragmentDoc } from '../../app/sections/collectionCarousel/CollectionCarousel.fragment.generated';
import { SectionCollectionSubcategoryLinkFragmentDoc } from '../../app/sections/subcategoriesCarousel/SubcategoriesCarousel.fragment.generated';
import { SectionCollectionDropDownFragmentDoc } from '../../app/sections/SectionCollectionDropDown/SectionCollectionDropDown.fragment.generated';
import { TwoColumnTextFragmentDoc } from '../../app/sections/twoColumnText/TwoColumnText.fragment.generated';
import { SectionFullWidthImageAndCopyFragmentDoc } from '../../app/sections/imageWithCard/ImageWithCard.fragment.generated';
import { SectionVideoCarouselFragmentDoc } from '../../app/sections/videoBlock/SectionVideoCarousel.fragment.generated';
import { EditorialTileFragmentDoc } from '../../app/sections/multiColumnContent/MultiColumnContent.fragment.generated';
import { FeatureProductCarouselTabbedFragmentDoc } from '../../app/sections/productRecommendation/FeatureProductCarouselTabbed.fragment.generated';
import { TextAndImageBlockSectionFragmentDoc } from '../../app/sections/textAndImageBlockSection/TextAndImageBlockSection.fragment.generated';
import { FooterFragmentDoc } from '../../app/sections/footer/Footer.fragment.generated';
import { HeaderFragmentDoc } from '../../app/sections/header/Header.fragment.generated';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CollectionPagesQueryVariables = Types.Exact<{
  handle?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CollectionPagesQuery = { __typename?: 'Query', collectionPages: Array<{ __typename?: 'CollectionPage', id: string, hideBreadcrumb: boolean, heroBannerHeading?: string | null, shopifyId: string, heroBannerDescription?: { __typename?: 'RichText', html: string } | null, desktopImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, mimeType?: string | null, url: string, width?: number | null } | null, mobileImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, mimeType?: string | null, url: string, width?: number | null } | null, collection?: { __typename?: 'ShopifyStorefront_Collection', id: string, handle: string, title: string } | null, seoText1?: { __typename?: 'RichText', html: string, text: string } | null, seoText2?: { __typename?: 'RichText', html: string, text: string } | null, sections: Array<{ __typename: 'BrandLogoGrid', id: string, subtext?: string | null, carousel?: boolean | null, hdText: string, brandsBrands: Array<{ __typename?: 'BrandsBrandLogo', brandName?: string | null, brandTags: Array<Types.BrandTags>, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', url: string } | null }>, cta?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null } | null } | { __typename: 'EditorialTile', id: string, name?: string | null, heading?: string | null, tiles: Array<{ __typename?: 'EditorialItem', description?: string | null, heading?: string | null, image: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } }>, cta?: { __typename?: 'Cta', buttonText?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null, url?: string | null } | null } | { __typename: 'FeatureProductCarouselTabbed', id: string, adminTitle?: string | null, stage: Types.Stage, navigationPostion?: Types.LinkPositions | null, tabbedContent: Array<{ __typename: 'ProductCarouselCollection', id: string, tabName: string, shopifyCollectionId: string } | { __typename: 'ProductCarouselCurated', id: string, tabName: string, products: Array<{ __typename?: 'ProductPage', id: string, shopifyId: string, adminTitle?: string | null, publishedAt?: any | null, product?: { __typename?: 'ShopifyStorefront_Product', title: string, vendor: string, handle: string, variants: { __typename: 'ShopifyStorefront_ProductVariantConnection', nodes: Array<{ __typename?: 'ShopifyStorefront_ProductVariant', id: string, image?: { __typename?: 'ShopifyStorefront_Image', url: any, altText?: string | null, width?: number | null, height?: number | null } | null, price: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode }, compareAtPrice?: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } | null, product: { __typename?: 'ShopifyStorefront_Product', handle: string, title: string } }> } } | null }> } | { __typename: 'ProductCarouselUnbxd', id: string, tabName: string, stage: Types.Stage, unbxdSectionId?: string | null }>, header?: { __typename?: 'RichText', html: string } | null } | { __typename: 'HeroBanner', id: string } | { __typename: 'OfferTiles', id: string } | { __typename: 'SectionBlogCarousel', id: string, heading?: string | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, articles: Array<{ __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, publishedAt?: any | null, publishDate?: any | null, url?: string | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, width?: number | null, url: string, height?: number | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null }> } | { __typename: 'SectionBlogListing', id: string } | { __typename: 'SectionCategoryCarousel', id: string, title?: string | null, tilesAlignment: Types.TilesAlignment, backgroundColour?: { __typename?: 'Color', hex: any } | null, categories: Array<{ __typename?: 'EditorialItem', heading?: string | null, url?: string | null, image: { __typename?: 'Asset', altText?: string | null, id: string, url: string } }> } | { __typename: 'SectionCollectionDropDown', id: string, adminTitle?: string | null, headline?: string | null, shopifyCollections: Array<{ __typename?: 'CollectionLink', title: string, id: string, collectionPage?: { __typename?: 'CollectionPage', collection?: { __typename?: 'ShopifyStorefront_Collection', handle: string, title: string } | null } | null }> } | { __typename: 'SectionCollectionFeatureLarge', id: string } | { __typename: 'SectionCollectionMain', id: string, modulePromoBanner?: { __typename?: 'ModulePromoBanner', adminTitle?: string | null, urlLink?: string | null, desktopImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, mobileImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null } | null } | { __typename: 'SectionCollectionSubcategoryLink', id: string, adminTitle?: string | null } | { __typename: 'SectionCuratedBlog', id: string } | { __typename: 'SectionFullWidthImageAndCopy', id: string, adminTitle?: string | null, layout?: Types.HeroLayout | null, title?: string | null, subtitle?: string | null, copy?: string | null, desktopImg?: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null, width?: number | null } | null, mobileImage?: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null, width?: number | null } | null, ctaButton: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> } | { __typename: 'SectionImageAndTextGrid', id: string, imageAndTextBlocks: Array<{ __typename?: 'ModuleImageAndText', heading?: string | null, contentAlignment?: Types.TextAlignment | null, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, id: string, text?: { __typename?: 'RichText', html: string } | null, image?: { __typename?: 'Asset', url: string, altText?: string | null } | null, buttons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null }> }> } | { __typename: 'SectionPreezieProductFinder', id: string, preezieGuideKey?: string | null } | { __typename: 'SectionSearchTermList', id: string } | { __typename: 'SectionSeoText', id: string, adminTitle?: string | null, textLayout?: Types.TextLayout | null, content?: { __typename?: 'RichText', html: string } | null, colun2Content?: { __typename?: 'RichText', html: string } | null } | { __typename: 'SectionTextBlock', id: string } | { __typename: 'SectionTwoColumn', id: string } | { __typename: 'SectionVideoCarousel', id: string, headline?: string | null, videos: Array<{ __typename?: 'ModuleVideo', id: string, altText?: string | null, name?: string | null, time?: string | null, video?: { __typename?: 'Asset', id: string, url: string } | null, thumbnail?: { __typename?: 'Asset', id: string, url: string } | null }> } | { __typename: 'UspSection', id: string }> }>, websiteConfigs: Array<{ __typename?: 'WebsiteConfig', footer?: { __typename?: 'FooterConfig', androidAppStoreUrl?: string | null, iOsAppStoreUrl?: string | null, instagramUrl?: string | null, facebookUrl?: string | null, tiktokUrl?: string | null, youtubeUrl?: string | null, styleSocietyHeading?: string | null, styleSocietyContent?: string | null, socialLinksHeadingText?: string | null, acknowledgementTitle?: string | null, footerLogo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, paymentLogos: Array<{ __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string }>, styleSocietyCta?: { __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null } | null, legalLinks: Array<{ __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null }>, helpCentreBox?: { __typename?: 'RichText', html: string, text: string } | null, footerLinks: Array<{ __typename?: 'LinkCollection', id: string, links: Array<{ __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string }>, headingLink?: { __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string } | null }>, acknowledgementContent?: { __typename?: 'RichText', html: string, text: string } | null, assistanceCtAs: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, openInNewWindow?: boolean | null, url?: string | null }>, uniqueSellingPoints: Array<{ __typename?: 'FooterUsp', description?: string | null, headingText?: string | null, id: string, uspIcon: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string } }> } | null, header?: { __typename?: 'HeaderConfig', id: string, promoBarExpiry?: any | null, logo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, megaMenu?: { __typename?: 'MegaMenu', navigationItems: Array<{ __typename?: 'TopNavigation', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn1: Array<{ __typename?: 'MenuColumn1', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menurow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null }> } | null }> } | null }>, pageBlogArticles: Array<{ __typename?: 'ArticlePage', id: string, url?: string | null, title?: string | null, shortDescription?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, blog?: { __typename?: 'BlogPage', title?: string | null } | null }>, offerTiles: Array<{ __typename?: 'MenuTile', id: string, name?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, link?: { __typename?: 'Link', linkText: string, url?: string | null } | null }> }> }> } | null, mobileMenuFooter: Array<{ __typename?: 'LinkPromoImage', id: string, adminTitle?: string | null, imageLink?: string | null, promoImage?: { __typename?: 'Asset', url: string } | null }>, brandsBrandsLogos: Array<{ __typename?: 'BrandsBrandLogo', id: string, brandName?: string | null, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', id: string, url: string } | null }>, promoBarContent?: { __typename?: 'RichText', text: string, html: string } | null, promoBarBackgroundColour?: { __typename?: 'Color', css: string, hex: any, rgba: { __typename?: 'RGBA', a: any, b: any, g: any, r: any } } | null, storeLocatorLinks?: { __typename?: 'Storelocatornav', id: string, name?: string | null, storeLocatorLinks: Array<{ __typename?: 'Link', id: string, linkText: string, url?: string | null, openInNewWindow?: boolean | null }> } | null, sectionAccountSignupCta?: { __typename?: 'SectionAccountSignupCta', benefits: Array<string>, id: string, headline?: { __typename?: 'RichText', html: string } | null, signupButtons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> } | null } | null }> };


export const CollectionPagesDocument = gql`
    query collectionPages($handle: String) {
  collectionPages(where: {handle: $handle}, first: 1) {
    id
    hideBreadcrumb
    heroBannerHeading
    heroBannerDescription {
      html
    }
    desktopImage {
      altText
      height
      mimeType
      url
      width
    }
    mobileImage {
      altText
      height
      mimeType
      url
      width
    }
    shopifyId
    collection {
      id
      handle
      title
    }
    seoText1 {
      html
      text
    }
    seoText2 {
      html
      text
    }
    sections {
      ... on Node {
        id
        __typename
      }
      ... on SectionCollectionMain {
        ...SectionCollectionMain
      }
      ... on SectionPreezieProductFinder {
        ...SectionPreezieProductFinder
      }
      ... on SectionBlogCarousel {
        ...SectionBlogCarousel
      }
      ... on BrandLogoGrid {
        ...BrandLogoGrid
      }
      ... on SectionCategoryCarousel {
        ...SectionCategoryCarousel
      }
      ... on SectionCollectionSubcategoryLink {
        ...SectionCollectionSubcategoryLink
      }
      ... on SectionCollectionDropDown {
        ...SectionCollectionDropDown
      }
      ... on SectionSeoText {
        ...TwoColumnText
      }
      ... on SectionFullWidthImageAndCopy {
        ...SectionFullWidthImageAndCopy
      }
      ... on SectionVideoCarousel {
        ...SectionVideoCarousel
      }
      ... on EditorialTile {
        ...EditorialTile
      }
      ... on FeatureProductCarouselTabbed {
        ...FeatureProductCarouselTabbed
      }
      ... on SectionImageAndTextGrid {
        ...TextAndImageBlockSection
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
    ${SectionCollectionMainFragmentDoc}
${SectionPreezieProductFinderFragmentDoc}
${SectionBlogCarouselFragmentDoc}
${BrandLogoGridFragmentDoc}
${SectionCategoryCarouselFragmentDoc}
${SectionCollectionSubcategoryLinkFragmentDoc}
${SectionCollectionDropDownFragmentDoc}
${TwoColumnTextFragmentDoc}
${SectionFullWidthImageAndCopyFragmentDoc}
${SectionVideoCarouselFragmentDoc}
${EditorialTileFragmentDoc}
${FeatureProductCarouselTabbedFragmentDoc}
${TextAndImageBlockSectionFragmentDoc}
${FooterFragmentDoc}
${HeaderFragmentDoc}`;

export function useCollectionPagesQuery(options?: Omit<Urql.UseQueryArgs<CollectionPagesQueryVariables>, 'query'>) {
  return Urql.useQuery<CollectionPagesQuery, CollectionPagesQueryVariables>({ query: CollectionPagesDocument, ...options });
};