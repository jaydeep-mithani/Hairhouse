import { ArticleGridItemProps } from '~/components/articleGridItem/ArticleGridItem.types'

export type FeaturedPostsProps = {
  title?: string | null
  itemsPerRowDesktop?: number
  viewLinkText?: string | null
  articles?: Array<ArticleGridItemProps['article']> | null
}
