import { Image } from '@overdose/components'
import clsx from 'clsx'

import styles from './SectionFullWidthImage.module.css'
import { SectionFullWidthImageProps } from './SectionFullWidthImage.types'

export const SectionFullWidthImage: React.FC<SectionFullWidthImageProps> = ({ images, imageLayout }) => {
  const onePerRow = imageLayout === 'one_per_row'

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.sectionMedia, {
          [styles.onePerRow]: onePerRow,
          [styles.twoPerRow]: !onePerRow,
        })}>
        {!!images?.length &&
          images.map((media, index) => {
            return (
              <div className={styles.mediaWrapper} key={index}>
                {media?.mimeType?.includes('image')
                  ? media?.url && <Image className={styles.media} alt={media?.altText} src={media.url} />
                  : media?.url && (
                      <video autoPlay loop muted controls>
                        <source src={media.url} type="video/mp4" />
                        <track kind="captions" />
                      </video>
                    )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
