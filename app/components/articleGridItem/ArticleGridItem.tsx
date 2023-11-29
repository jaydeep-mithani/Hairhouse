import { composeThemeFromProps, Compose } from '@css-modules-theme/react'
import { Typography, Button, Image } from '@overdose/components'
import { Bullet } from '~/components'
import { formatDate } from '~/lib/utils'

import defaultStyles from './ArticleGridItem.module.css'
import { ArticleGridItemProps } from './ArticleGridItem.types'

export const ArticleGridItem = ({ article, buttonText, theme }: ArticleGridItemProps) => {
  if (!article?.title || !article?.url) return null

  const { title, url, thumbnail, publishedAt, publishDate, author, blog, shortDescription } = article
  const styles = composeThemeFromProps(defaultStyles, { theme }, { compose: Compose.Merge })
  const excerptCharLimit = 100

  buttonText = buttonText ?? 'Read now'

  return (
    <div className={styles.root}>
      <Button variant="link" href={`/${url}`}>
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
        {thumbnail && (
          <Image
            alt={thumbnail?.altText ?? title}
            className={`${styles.articleThumbnail} object-cover w-full`}
            src={thumbnail?.url}
            sizes="(min-width: 768px) 50vw, 100vw"
            width={378}
            loading="lazy"
          />
        )}
      </Button>
      <Typography
        tag="p"
        variant="subheading"
        weight="bold"
        theme={{
          root: styles.title,
        }}>
        {title}
      </Typography>
      <div className={styles.authorAndDate}>
        {(publishDate || publishedAt) && (
          <>
            <Typography tag="p" variant="body">
              Posted {formatDate(publishDate ?? publishedAt)}
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
      {shortDescription && (
        <Typography
          tag="div"
          variant="body"
          theme={{
            root: styles.excerpt,
          }}>
          {shortDescription.substring(0, excerptCharLimit)}
          {shortDescription?.length >= excerptCharLimit && '...'}
        </Typography>
      )}
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
  )
}
