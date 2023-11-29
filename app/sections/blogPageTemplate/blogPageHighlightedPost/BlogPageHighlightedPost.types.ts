import { DateTime } from 'schema-dts'

export type BlogPageHighlightedPostProps = {
  data: {
    __typename?: 'ArticlePage'
    shortDescription?: string | null
    title?: string | null
    publishedAt?: DateTime | string | null
    publishDate?: Date | string | null
    url?: string | null
    author?: { __typename?: 'BlogAuthor'; authorName?: string | null } | null
    thumbnail?: {
      __typename?: 'Asset'
      altText?: string | null
      width?: number | null
      url: string
      height?: number | null
    } | null
    blog?: { __typename?: 'BlogPage'; title?: string | null; url?: string | null }
  }
  buttonText?: string | null
}
