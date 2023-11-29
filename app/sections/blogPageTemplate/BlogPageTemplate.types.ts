import { FeaturedPostsProps } from '~/sections/featuredPosts/FeaturedPosts.types'

import { BlogPageArticleGridProps } from './blogPageArticleGrid/BlogPageArticleGrid.types'
import { BlogPageHighlightedPostProps } from './blogPageHighlightedPost/BlogPageHighlightedPost.types'
import { BlogPageTitleInfoSectionProps } from './blogPageTitleInfoSection/BlogPageTitleInfoSection.types'

export type BlogPageTemplateProps = BlogPageTitleInfoSectionProps & {
  highlightedPostSettings: BlogPageHighlightedPostProps
} & { featuredArticlesSettings: FeaturedPostsProps } & BlogPageArticleGridProps
