import { Image } from '@overdose/components'
import clsx from 'clsx'

import styles from './ArticlePageImageSection.module.css'
import { ArticlePageImageSectionProps } from './ArticlePageImageSection.types'

export const ArticlePageImageSection: React.FC<ArticlePageImageSectionProps> = ({ data }) => {
  if (!data?.images) {
    return null
  }
  const { images, imageLayout } = data
  const lastItemOneCol = images.length % 2 === 1

  return (
    <div className={styles.root}>
      <div className={styles.sectionImages}>
        {images.map((imageItem, index) => {
          return (
            <div
              className={clsx(styles.imageWrapper, {
                [styles.columnFull]: imageLayout === 'one_per_row' || (lastItemOneCol && index === images.length - 1), // adds 'columnFull' class so that it appears as full-width
              })}
              key={`img${index + 1}`}>
              <Image className={styles.imageItem} alt={imageItem?.altText} src={imageItem?.url} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
