import { Article } from 'types/Article.types'

export type RelatedPostsProps = {
  data: {
    __typename?: 'RelatedPosts'
    id: string
    title?: string | null
    itemsPerRowDesktop?: number | null
    totalItems?: number | null
    viewLinkText?: string | null
    articles?: Array<Article> | null
  }
}
