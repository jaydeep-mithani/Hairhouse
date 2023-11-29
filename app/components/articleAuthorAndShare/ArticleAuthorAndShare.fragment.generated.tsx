import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
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