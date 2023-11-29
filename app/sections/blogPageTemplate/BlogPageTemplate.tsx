import { FeaturedPosts } from '~/sections/featuredPosts'

import { BlogPageArticleGrid } from './blogPageArticleGrid/BlogPageArticleGrid'
import { BlogPageHighlightedPost } from './blogPageHighlightedPost/BlogPageHighlightedPost'
import styles from './BlogPageTemplate.module.css'
import { BlogPageTemplateProps } from './BlogPageTemplate.types'
import { BlogPageTitleInfoSection } from './blogPageTitleInfoSection/BlogPageTitleInfoSection'

export const BlogPageTemplate = (data: BlogPageTemplateProps) => {
  const {
    title,
    subtitle,
    url,
    blogs,
    highlightedPostSettings,
    featuredArticlesSettings,
    articles,
    totalPages,
    currentPage,
  } = data

  if (!title && !url && !articles?.length) {
    return null
  }

  const hasArticleBasicInfo = (title || subtitle || !!blogs?.length) && url

  return (
    <div className={styles.root}>
      {hasArticleBasicInfo && <BlogPageTitleInfoSection title={title} subtitle={subtitle} url={url} blogs={blogs} />}
      {highlightedPostSettings?.data?.title && (
        <BlogPageHighlightedPost
          data={highlightedPostSettings?.data}
          buttonText={highlightedPostSettings?.buttonText}
        />
      )}
      {!!featuredArticlesSettings?.articles?.length && (
        <FeaturedPosts
          title={featuredArticlesSettings?.title}
          itemsPerRowDesktop={featuredArticlesSettings?.itemsPerRowDesktop}
          viewLinkText={featuredArticlesSettings?.viewLinkText}
          articles={featuredArticlesSettings?.articles}
        />
      )}
      <BlogPageArticleGrid articles={articles} totalPages={totalPages} currentPage={currentPage} />
    </div>
  )
}
