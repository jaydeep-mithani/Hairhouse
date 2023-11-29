import { Image, Typography } from '@overdose/components'
import { ArticleAuthorAndShare } from '~/components'
import { formatDate } from '~/lib/utils'

import styles from './ArticlePageTitleInfoSection.module.css'
import { ArticlePageTitleInfoSectionProps } from './ArticlePageTitleInfoSection.types'

export const ArticlePageTitleInfoSection = (props: ArticlePageTitleInfoSectionProps) => {
  const { title, subtitle, url, author, blog, image, thumbnail, publishedAt, publishDate } = props

  if (!title || !url) {
    return null
  }

  const shareIcons = {
    title: 'SHARE',
    enableShare: true,
    options: ['Twitter', 'Facebook', 'Pinterest'],
    pageTitle: title,
    pageUrl: url,
    imageUrl: thumbnail?.url,
  }

  return (
    <div className={styles.root}>
      <div className={styles.articlePageTitleInfoSection}>
        {image && (
          <div className={styles.articleImageWrapper}>
            <Image className={styles.articleImage} alt={image?.altText} src={image?.url} />
          </div>
        )}
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            {blog && (
              <Typography
                tag="p"
                variant="caption"
                theme={{
                  root: styles.articleTag,
                }}>
                {blog?.title}
              </Typography>
            )}
            <div className={styles.titleAreaWrapper}>
              {title && (
                <Typography
                  tag="h1"
                  variant="displayLarge"
                  theme={{
                    root: styles.articleTitle,
                  }}>
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography
                  tag="p"
                  theme={{
                    root: styles.articleSubTitle,
                  }}>
                  {subtitle}
                </Typography>
              )}
            </div>
            {(publishDate || publishedAt) && (
              <Typography
                tag="p"
                variant="body"
                theme={{
                  root: styles.articlePublishedAt,
                }}>
                Posted {formatDate(publishDate ?? publishedAt)}
              </Typography>
            )}
            {(author || shareIcons) && <ArticleAuthorAndShare author={author} shareIcons={shareIcons} />}
          </div>
        </div>
      </div>
    </div>
  )
}
