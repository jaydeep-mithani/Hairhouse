import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ArticlePageTitleInfoElementsFragment = { __typename?: 'ArticlePage', title?: string | null, subtitle?: string | null, url?: string | null, publishDate?: any | null, publishedAt?: any | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null } | null };

export type ArticleAuthorFragment = { __typename?: 'ArticlePage', author?: { __typename?: 'BlogAuthor', authorName?: string | null, authorPosition?: string | null, authorImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null } | null };

export const ArticleAuthorFragmentDoc = gql`
    fragment ArticleAuthor on ArticlePage {
  author {
    authorImage {
      altText
      height
      width
      url
    }
    authorName
    authorPosition
  }
}
    `;
export const ArticlePageTitleInfoElementsFragmentDoc = gql`
    fragment ArticlePageTitleInfoElements on ArticlePage {
  title
  subtitle
  url
  ...ArticleAuthor
  blog {
    title
    url
  }
  thumbnail {
    altText
    height
    width
    url
  }
  image {
    altText
    height
    url
    width
  }
  publishDate
  publishedAt
}
    ${ArticleAuthorFragmentDoc}`;