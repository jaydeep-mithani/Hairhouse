import { Image } from '@overdose/components'
import clsx from 'clsx'
import { ImageTilesElementsFragment } from 'graphql/HygraphModel.generated'

import styles from './styles/ImageTilesSection.module.css'

export const ImageTilesSection = (props: { data: ImageTilesElementsFragment }) => {
  if (!props.data) return null

  const { imageTilesElement } = props.data
  return (
    <div className={styles.root}>
      <div className={styles.imageTilesContainer}>
        {imageTilesElement?.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(styles.imageTilesWrapper, {
                [styles.fullTile]: imageTilesElement.length % 2 === 1 && imageTilesElement.length === index + 1,
              })}>
              <Image src={item.image.url} alt={item.altText} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
