import { Typography, Button, Image } from '@overdose/components'
import { Bullet } from '~/components'
import { formatDate } from '~/lib/utils'

import styles from './BlogPageHighlightedPost.module.css'
import { BlogPageHighlightedPostProps } from './BlogPageHighlightedPost.types'

export const BlogPageHighlightedPost = ({ data, buttonText }: BlogPageHighlightedPostProps) => {
  const { title, url, thumbnail, publishedAt, publishDate, author, blog, shortDescription } = data

  if (!title && !url) {
    return null
  }

  const publishDateValue = publishDate ?? publishedAt

  return (
    <div className={styles.root}>
      <div className={styles.blogBanner}>
        {thumbnail && (
          <div className={styles.imageWrapper}>
            <Image
              alt={thumbnail?.altText ?? title}
              className={`${styles.articleThumbnail} object-cover w-full`}
              src={thumbnail?.url}
              sizes="(min-width: 768px) 50vw, 100vw"
              width={646}
              loading="lazy"
            />
          </div>
        )}
        {(title || url) && (
          <div className={styles.textContentWrapper}>
            <div className={styles.textContent}>
              {blog?.title && (
                <Typography
                  tag="p"
                  variant="caption"
                  theme={{
                    root: styles.tag,
                  }}>
                  {blog.title}
                </Typography>
              )}
              <div className={styles.mainInfoContent}>
                {title && (
                  <Typography
                    tag="p"
                    variant="subheading"
                    weight="bold"
                    theme={{
                      root: styles.title,
                    }}>
                    {title}
                  </Typography>
                )}
                {(publishDateValue || author?.authorName) && (
                  <div className={styles.authorAndDate}>
                    {publishDateValue && (
                      <>
                        <Typography tag="p" variant="body">
                          Posted {formatDate(publishDateValue)}
                        </Typography>
                        <Bullet />
                      </>
                    )}
                    {author?.authorName && (
                      <Typography tag="p" variant="body">
                        {author?.authorName}
                      </Typography>
                    )}
                  </div>
                )}
                {shortDescription && (
                  <Typography
                    tag="div"
                    variant="body"
                    theme={{
                      root: styles.excerpt,
                    }}>
                    {shortDescription}
                  </Typography>
                )}
              </div>
              {buttonText && (
                <Button
                  variant="link"
                  href={`/${url}`}
                  theme={{
                    root: styles.button,
                  }}>
                  {buttonText}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
