import * as Types from '../types';

import gql from 'graphql-tag';
import { ArticlePageTitleInfoElementsFragmentDoc } from '../../app/sections/articlePageTitleInfoSection/ArticlePageTitleInfoSection.fragment.generated';
import { ArticlePageLinksFragmentDoc } from '../../app/sections/articlePageLinksSection/ArticlePageLinksSection.fragment.generated';
import { SectionBlogCarouselFragmentDoc } from '../../app/sections/blogCarousel/BlogCarousel.fragment.generated';
import { ArticlePageImageSectionFragmentDoc } from '../../app/sections/articlePageImageSection/ArticlePageImageSection.fragment.generated';
import { ArticlePageVideoSectionFragmentDoc } from '../../app/sections/articlePageVideoSection/ArticlePageVideoSection.fragment.generated';
import { ArticleProductCarouselFragmentDoc } from '../../app/sections/articleProductCarousel/ArticleProductCarousel.fragment.generated';
import { ArticlePageTextSectionFragmentDoc } from '../../app/sections/articlePageTextSection/ArticlePageTextSection.fragment.generated';
import { ArticlePageAccordionSectionFragmentDoc } from '../../app/sections/articlePageAccordionSection/ArticlePageAccordionSection.fragment.generated';
import { FooterFragmentDoc } from '../../app/sections/footer/Footer.fragment.generated';
import { HeaderFragmentDoc } from '../../app/sections/header/Header.fragment.generated';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ArticlePageQueryVariables = Types.Exact<{
  url?: Types.InputMaybe<Types.Scalars['String']>;
  relatedPostsWhere?: Types.InputMaybe<Types.ArticlePageWhereInput>;
}>;


export type ArticlePageQuery = { __typename?: 'Query', articlePage?: { __typename?: 'ArticlePage', id: string, title?: string | null, subtitle?: string | null, url?: string | null, publishDate?: any | null, publishedAt?: any | null, additionalSettings?: { __typename?: 'ArticlePageOptions', showAuthorInfoAfter?: string | null } | null, sources?: { __typename?: 'CitationList', showAfterSection?: string | null, title?: string | null, sources: Array<{ __typename?: 'Citation', adminTitle?: string | null, text?: string | null, id: string }>, subtitle?: { __typename?: 'RichText', html: string } | null, subtitleBackground?: { __typename?: 'Color', hex: any } | null } | null, articleContent: Array<{ __typename?: 'Citation' } | { __typename?: 'EditorialText' } | { __typename?: 'ProductHowTo' } | { __typename?: 'SectionBlogCarousel', heading?: string | null, id: string, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, articles: Array<{ __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, publishedAt?: any | null, publishDate?: any | null, url?: string | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, width?: number | null, url: string, height?: number | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null }> } | { __typename?: 'SectionFullWidthImage', id: string, imageLayout?: Types.ImageLayout | null, images: Array<{ __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null }> } | { __typename?: 'SectionFullWidthVideo', id: string, videoTitle?: string | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, videoFile?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null } | { __typename?: 'SectionImageWithText' } | { __typename?: 'SectionRelatedProduct', id: string, headline?: string | null, subText?: string | null, products: Array<{ __typename?: 'ProductPage', id: string, product?: { __typename?: 'ShopifyStorefront_Product', id: string, availableForSale: boolean, descriptionHtml: any, productType: string, publishedAt: any, tags: Array<string>, title: string, totalInventory?: number | null, vendor: string, compareAtPriceRange: { __typename?: 'ShopifyStorefront_ProductPriceRange', maxVariantPrice: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode }, minVariantPrice: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } }, featuredImage?: { __typename?: 'ShopifyStorefront_Image', altText?: string | null, height?: number | null, src: any, url: any, width?: number | null } | null, priceRange: { __typename?: 'ShopifyStorefront_ProductPriceRange', maxVariantPrice: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode }, minVariantPrice: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } }, variants: { __typename?: 'ShopifyStorefront_ProductVariantConnection', nodes: Array<{ __typename?: 'ShopifyStorefront_ProductVariant', availableForSale: boolean, currentlyNotInStock: boolean, quantityAvailable?: number | null, id: string, requiresShipping: boolean, sku?: string | null, title: string, compareAtPrice?: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } | null, image?: { __typename?: 'ShopifyStorefront_Image', altText?: string | null, src: any, url: any, height?: number | null, width?: number | null } | null, selectedOptions: Array<{ __typename?: 'ShopifyStorefront_SelectedOption', name: string, value: string }>, price: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } }> } } | null }> } | { __typename?: 'SectionShopByGrid' } | { __typename?: 'SectionTextBlock' } | { __typename?: 'SectionTextBlockWithCTAs', id: string, heading?: string | null, textAlignment?: Types.TextAlignment | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, textContent?: { __typename?: 'SectionTextBlockWithCTAsTextContentRichText', html: string } | null, buttonCta: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null }> } | { __typename?: 'SectionsAccordion', id: string, accordionLayout?: Types.AccordionLayout | null, headline?: string | null, accordionSections: Array<{ __typename?: 'AccordionContent', title?: string | null, content?: { __typename?: 'RichText', text: string } | null }> }>, pageMeta?: { __typename?: 'PageMeta', metaTitle?: string | null, metaDescription?: string | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, linksSection?: { __typename?: 'ArticlePageLinksSection', title?: string | null, links: Array<{ __typename?: 'LinkPageSectionOrUrl', link?: string | null, linkText?: string | null }> } | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null } | null } | null, relatedPosts: Array<{ __typename?: 'ArticlePage', title?: string | null, url?: string | null, publishedAt?: any | null, publishDate?: any | null, shortDescription?: string | null, stage: Types.Stage, author?: { __typename?: 'BlogAuthor', authorName?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null }>, websiteConfigs: Array<{ __typename?: 'WebsiteConfig', footer?: { __typename?: 'FooterConfig', androidAppStoreUrl?: string | null, iOsAppStoreUrl?: string | null, instagramUrl?: string | null, facebookUrl?: string | null, tiktokUrl?: string | null, youtubeUrl?: string | null, styleSocietyHeading?: string | null, styleSocietyContent?: string | null, socialLinksHeadingText?: string | null, acknowledgementTitle?: string | null, footerLogo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, paymentLogos: Array<{ __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string }>, styleSocietyCta?: { __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null } | null, legalLinks: Array<{ __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null }>, helpCentreBox?: { __typename?: 'RichText', html: string, text: string } | null, footerLinks: Array<{ __typename?: 'LinkCollection', id: string, links: Array<{ __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string }>, headingLink?: { __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string } | null }>, acknowledgementContent?: { __typename?: 'RichText', html: string, text: string } | null, assistanceCtAs: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, openInNewWindow?: boolean | null, url?: string | null }>, uniqueSellingPoints: Array<{ __typename?: 'FooterUsp', description?: string | null, headingText?: string | null, id: string, uspIcon: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string } }> } | null, header?: { __typename?: 'HeaderConfig', id: string, promoBarExpiry?: any | null, logo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, megaMenu?: { __typename?: 'MegaMenu', navigationItems: Array<{ __typename?: 'TopNavigation', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn1: Array<{ __typename?: 'MenuColumn1', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menurow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null }> } | null }> } | null }>, pageBlogArticles: Array<{ __typename?: 'ArticlePage', id: string, url?: string | null, title?: string | null, shortDescription?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, blog?: { __typename?: 'BlogPage', title?: string | null } | null }>, offerTiles: Array<{ __typename?: 'MenuTile', id: string, name?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, link?: { __typename?: 'Link', linkText: string, url?: string | null } | null }> }> }> } | null, mobileMenuFooter: Array<{ __typename?: 'LinkPromoImage', id: string, adminTitle?: string | null, imageLink?: string | null, promoImage?: { __typename?: 'Asset', url: string } | null }>, brandsBrandsLogos: Array<{ __typename?: 'BrandsBrandLogo', id: string, brandName?: string | null, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', id: string, url: string } | null }>, promoBarContent?: { __typename?: 'RichText', text: string, html: string } | null, promoBarBackgroundColour?: { __typename?: 'Color', css: string, hex: any, rgba: { __typename?: 'RGBA', a: any, b: any, g: any, r: any } } | null, storeLocatorLinks?: { __typename?: 'Storelocatornav', id: string, name?: string | null, storeLocatorLinks: Array<{ __typename?: 'Link', id: string, linkText: string, url?: string | null, openInNewWindow?: boolean | null }> } | null, sectionAccountSignupCta?: { __typename?: 'SectionAccountSignupCta', benefits: Array<string>, id: string, headline?: { __typename?: 'RichText', html: string } | null, signupButtons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> } | null } | null }> };


export const ArticlePageDocument = gql`
    query articlePage($url: String, $relatedPostsWhere: ArticlePageWhereInput) {
  articlePage(where: {url: $url}) {
    id
    ...ArticlePageTitleInfoElements
    additionalSettings {
      showAuthorInfoAfter
    }
    ...ArticlePageLinks
    sources {
      showAfterSection
      sources {
        adminTitle
        text
        id
      }
      subtitle {
        html
      }
      title
      subtitleBackground {
        hex
      }
    }
    articleContent(first: 20) {
      ... on SectionBlogCarousel {
        ...SectionBlogCarousel
      }
      ... on SectionFullWidthImage {
        ...ArticlePageImageSection
      }
      ... on SectionFullWidthVideo {
        ...ArticlePageVideoSection
      }
      ... on SectionRelatedProduct {
        ...ArticleProductCarousel
      }
      ... on SectionTextBlockWithCTAs {
        ...ArticlePageTextSection
      }
      ... on SectionsAccordion {
        ...ArticlePageAccordionSection
      }
    }
    pageMeta {
      metaTitle
      metaDescription
    }
  }
  relatedPosts: articlePages(where: $relatedPostsWhere, first: 20) {
    author {
      authorName
      authorImage {
        altText
        height
        url
        width
      }
      authorPosition
    }
    blog {
      title
      url
    }
    title
    url
    publishedAt
    publishDate
    shortDescription
    thumbnail {
      altText
      height
      width
      url
    }
    stage
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
    ${ArticlePageTitleInfoElementsFragmentDoc}
${ArticlePageLinksFragmentDoc}
${SectionBlogCarouselFragmentDoc}
${ArticlePageImageSectionFragmentDoc}
${ArticlePageVideoSectionFragmentDoc}
${ArticleProductCarouselFragmentDoc}
${ArticlePageTextSectionFragmentDoc}
${ArticlePageAccordionSectionFragmentDoc}
${FooterFragmentDoc}
${HeaderFragmentDoc}`;

export function useArticlePageQuery(options?: Omit<Urql.UseQueryArgs<ArticlePageQueryVariables>, 'query'>) {
  return Urql.useQuery<ArticlePageQuery, ArticlePageQueryVariables>({ query: ArticlePageDocument, ...options });
};