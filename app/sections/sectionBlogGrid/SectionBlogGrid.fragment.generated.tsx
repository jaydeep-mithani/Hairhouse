import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionBlogGridFragment = { __typename?: 'SectionBlogGrid', title?: string | null, buttonText?: string | null, enableDarkBackground?: boolean | null, itemsPerRowDesktop?: number | null, featuredArticles: Array<{ __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, publishedAt?: any | null, publishDate?: any | null, url?: string | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null } | null, thumbnail?: { __typename?: 'Asset', height?: number | null, altText?: string | null, width?: number | null, url: string } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null }> };

export const SectionBlogGridFragmentDoc = gql`
    fragment SectionBlogGrid on SectionBlogGrid {
  featuredArticles {
    author {
      authorName
    }
    shortDescription
    title
    publishedAt
    publishDate
    url
    thumbnail {
      height
      altText
      width
      url
    }
    blog {
      title
      url
    }
  }
  title
  buttonText
  enableDarkBackground
  itemsPerRowDesktop
}
    `;