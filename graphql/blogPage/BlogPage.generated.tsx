import * as Types from '../types';

import gql from 'graphql-tag';
import { FooterFragmentDoc } from '../../app/sections/footer/Footer.fragment.generated';
import { HeaderFragmentDoc } from '../../app/sections/header/Header.fragment.generated';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type BlogPageQueryVariables = Types.Exact<{
  url?: Types.InputMaybe<Types.Scalars['String']>;
  highlightedPostCondition?: Types.InputMaybe<Types.ArticlePageWhereInput>;
  fetchArticlesCondition?: Types.InputMaybe<Types.ArticlePageWhereInput>;
  orderBy?: Types.InputMaybe<Types.ArticlePageOrderByInput>;
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type BlogPageQuery = { __typename?: 'Query', pageOptions?: { __typename?: 'BlogPage', id: string, title?: string | null, url?: string | null, subtitle?: string | null, hideBreadcrumb?: boolean | null, featuredArticles: Array<{ __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, url?: string | null, publishedAt?: any | null, publishDate?: any | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null }>, additionalSettings?: { __typename?: 'BlogPageOptions', featuredPostsHeading?: string | null, articleViewLinkText?: string | null } | null } | null, highlightedPosts: Array<{ __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, url?: string | null, publishedAt?: any | null, publishDate?: any | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null }>, allBlogs: Array<{ __typename?: 'BlogPage', title?: string | null, url?: string | null, position?: number | null }>, articlesWithPagination: { __typename?: 'ArticlePageConnection', aggregate: { __typename?: 'Aggregate', count: number }, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, pageSize?: number | null }, edges: Array<{ __typename?: 'ArticlePageEdge', node: { __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, url?: string | null, publishedAt?: any | null, publishDate?: any | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null } }> }, websiteConfigs: Array<{ __typename?: 'WebsiteConfig', footer?: { __typename?: 'FooterConfig', androidAppStoreUrl?: string | null, iOsAppStoreUrl?: string | null, instagramUrl?: string | null, facebookUrl?: string | null, tiktokUrl?: string | null, youtubeUrl?: string | null, styleSocietyHeading?: string | null, styleSocietyContent?: string | null, socialLinksHeadingText?: string | null, acknowledgementTitle?: string | null, footerLogo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, paymentLogos: Array<{ __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string }>, styleSocietyCta?: { __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null } | null, legalLinks: Array<{ __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null }>, helpCentreBox?: { __typename?: 'RichText', html: string, text: string } | null, footerLinks: Array<{ __typename?: 'LinkCollection', id: string, links: Array<{ __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string }>, headingLink?: { __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string } | null }>, acknowledgementContent?: { __typename?: 'RichText', html: string, text: string } | null, assistanceCtAs: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, openInNewWindow?: boolean | null, url?: string | null }>, uniqueSellingPoints: Array<{ __typename?: 'FooterUsp', description?: string | null, headingText?: string | null, id: string, uspIcon: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string } }> } | null, header?: { __typename?: 'HeaderConfig', id: string, promoBarExpiry?: any | null, logo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, megaMenu?: { __typename?: 'MegaMenu', navigationItems: Array<{ __typename?: 'TopNavigation', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn1: Array<{ __typename?: 'MenuColumn1', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menurow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null }> } | null }> } | null }>, pageBlogArticles: Array<{ __typename?: 'ArticlePage', id: string, url?: string | null, title?: string | null, shortDescription?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, blog?: { __typename?: 'BlogPage', title?: string | null } | null }>, offerTiles: Array<{ __typename?: 'MenuTile', id: string, name?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, link?: { __typename?: 'Link', linkText: string, url?: string | null } | null }> }> }> } | null, mobileMenuFooter: Array<{ __typename?: 'LinkPromoImage', id: string, adminTitle?: string | null, imageLink?: string | null, promoImage?: { __typename?: 'Asset', url: string } | null }>, brandsBrandsLogos: Array<{ __typename?: 'BrandsBrandLogo', id: string, brandName?: string | null, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', id: string, url: string } | null }>, promoBarContent?: { __typename?: 'RichText', text: string, html: string } | null, promoBarBackgroundColour?: { __typename?: 'Color', css: string, hex: any, rgba: { __typename?: 'RGBA', a: any, b: any, g: any, r: any } } | null, storeLocatorLinks?: { __typename?: 'Storelocatornav', id: string, name?: string | null, storeLocatorLinks: Array<{ __typename?: 'Link', id: string, linkText: string, url?: string | null, openInNewWindow?: boolean | null }> } | null, sectionAccountSignupCta?: { __typename?: 'SectionAccountSignupCta', benefits: Array<string>, id: string, headline?: { __typename?: 'RichText', html: string } | null, signupButtons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> } | null } | null }> };


export const BlogPageDocument = gql`
    query blogPage($url: String, $highlightedPostCondition: ArticlePageWhereInput, $fetchArticlesCondition: ArticlePageWhereInput, $orderBy: ArticlePageOrderByInput, $first: Int, $skip: Int) {
  pageOptions: blogPage(where: {url: $url}) {
    id
    title
    url
    subtitle
    hideBreadcrumb
    featuredArticles {
      author {
        authorImage {
          altText
          height
          url
          width
        }
        authorName
        authorPosition
      }
      blog {
        title
        url
      }
      thumbnail {
        altText
        height
        url
        width
      }
      shortDescription
      title
      url
      publishedAt
      publishDate
    }
    additionalSettings {
      featuredPostsHeading
      articleViewLinkText
    }
  }
  highlightedPosts: articlePages(
    where: $highlightedPostCondition
    first: 1
    orderBy: publishedAt_DESC
  ) {
    author {
      authorImage {
        altText
        height
        url
        width
      }
      authorName
      authorPosition
    }
    blog {
      title
      url
    }
    thumbnail {
      altText
      height
      url
      width
    }
    shortDescription
    title
    url
    publishedAt
    publishDate
  }
  allBlogs: blogPages(orderBy: position_ASC) {
    title
    url
    position
  }
  articlesWithPagination: articlePagesConnection(
    where: $fetchArticlesCondition
    orderBy: $orderBy
    first: $first
    skip: $skip
  ) {
    aggregate {
      count
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
      pageSize
    }
    edges {
      node {
        author {
          authorImage {
            altText
            height
            url
            width
          }
          authorName
          authorPosition
        }
        blog {
          title
          url
        }
        thumbnail {
          altText
          height
          url
          width
        }
        shortDescription
        title
        url
        publishedAt
        publishDate
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
    ${FooterFragmentDoc}
${HeaderFragmentDoc}`;

export function useBlogPageQuery(options?: Omit<Urql.UseQueryArgs<BlogPageQueryVariables>, 'query'>) {
  return Urql.useQuery<BlogPageQuery, BlogPageQueryVariables>({ query: BlogPageDocument, ...options });
};