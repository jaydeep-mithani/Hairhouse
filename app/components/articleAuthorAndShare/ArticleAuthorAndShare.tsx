import { Typography, Image } from '@overdose/components'
import { ShareIcons } from '~/components/shareIcons'

import styles from './ArticleAuthorAndShare.module.css'
import { ArticleAuthorAndShareProps } from './ArticleAuthorAndShare.types'

export const ArticleAuthorAndShare = ({ author, shareIcons }: ArticleAuthorAndShareProps) => {
  if (!author?.authorName && !shareIcons) {
    return null
  }

  return (
    <div className={styles.authorAndShare}>
      {(author?.authorImage || author?.authorName || author?.authorPosition) && (
        <div className={styles.authorInfo}>
          {author?.authorImage && (
            <div className={styles.authorImageWrapper}>
              <Image
                className={styles.titleImage}
                alt={author?.authorImage?.altText}
                src={author?.authorImage?.url}
                loading="lazy"
              />
            </div>
          )}
          {(author?.authorName || author?.authorPosition) && (
            <div className={styles.authorContent}>
              {author?.authorName && (
                <Typography
                  tag="p"
                  variant="body"
                  theme={{
                    root: styles.authorName,
                  }}>
                  {author.authorName}
                </Typography>
              )}
              {author?.authorPosition && (
                <Typography
                  tag="p"
                  variant="body"
                  theme={{
                    root: styles.authorSubtitle,
                  }}>
                  {author.authorPosition}
                </Typography>
              )}
            </div>
          )}
        </div>
      )}
      {shareIcons && (
        <ShareIcons
          title={shareIcons?.title}
          enableShare={shareIcons?.enableShare}
          options={shareIcons?.options}
          pageTitle={shareIcons?.pageTitle}
          pageUrl={shareIcons?.pageUrl}
          imageUrl={shareIcons?.imageUrl}
        />
      )}
    </div>
  )
}
