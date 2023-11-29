import { DateTime } from 'schema-dts'

export type BlogPageArticleGridProps = {
  articles: Array<{
    __typename?: 'ArticlePageEdge'
    node: {
      __typename?: 'ArticlePage'
      shortDescription?: string | null
      title?: string | null
      url?: string | null
      publishedAt?: DateTime | string | null
      publishDate?: Date | string | null
      author?: {
        __typename?: 'BlogAuthor'
        authorName?: string | null
        authorPosition?: string | null
        authorImage?: {
          __typename?: 'Asset'
          altText?: string | null
          height?: number | null
          url: string
          width?: number | null
        } | null
      } | null
      blog?: { __typename?: 'BlogPage'; title?: string | null; url?: string | null } | null
      thumbnail?: {
        __typename?: 'Asset'
        altText?: string | null
        height?: number | null
        url: string
        width?: number | null
      } | null
    }
  }>
  totalPages: number
  currentPage: number
}
