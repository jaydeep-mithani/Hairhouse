import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionBlogCarouselFragment = { __typename?: 'SectionBlogCarousel', heading?: string | null, id: string, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, articles: Array<{ __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, publishedAt?: any | null, publishDate?: any | null, url?: string | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, width?: number | null, url: string, height?: number | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null }> };

export const SectionBlogCarouselFragmentDoc = gql`
    fragment SectionBlogCarousel on SectionBlogCarousel {
  heading
  id
  image {
    altText
    height
    url
    width
  }
  articles {
    author {
      authorName
    }
    thumbnail {
      altText
      width
      url
      height
    }
    blog {
      title
      url
    }
    shortDescription
    title
    publishedAt
    publishDate
    url
  }
}
    `;