import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'

import { SectionUSPProps } from '../Footer.types'
import styles from './SectionUSP.module.css'

export function SectionUSP({ uniqueSellingPoints }: SectionUSPProps) {
  if (!uniqueSellingPoints?.length) {
    return null
  }

  return (
    <section className={styles.section}>
      {!!uniqueSellingPoints?.length &&
        uniqueSellingPoints.map((uniqueSellingPoint) => {
          return (
            <div key={uniqueSellingPoint.id} className={styles.item}>
              {uniqueSellingPoint?.uspIcon && (
                <Image
                  alt={uniqueSellingPoint.uspIcon.altText || uniqueSellingPoint.headingText}
                  data={uniqueSellingPoint.uspIcon}
                  className={styles.image}
                />
              )}
              {uniqueSellingPoint?.headingText && (
                <div className={styles.title_wrapper}>
                  <Typography tag="p" variant="displayExtraSmall" weight="bold" theme={{ root: styles.title }}>
                    {uniqueSellingPoint.headingText}
                  </Typography>
                </div>
              )}
              {uniqueSellingPoint?.description && (
                <Typography tag="p" variant="caption" theme={{ root: styles.text }}>
                  {uniqueSellingPoint.description}
                </Typography>
              )}
            </div>
          )
        })}
    </section>
  )
}
