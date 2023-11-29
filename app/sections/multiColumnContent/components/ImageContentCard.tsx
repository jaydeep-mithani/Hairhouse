import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import React from 'react'

import styles from '../MultiColumnContent.module.css'
import { Icard } from '../MultiColumnContent.types'

const ImageContentCard = ({ heading, description, image }: Icard) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.card_img_section}>
          <Image data={image} alt={image?.altText} className={styles.horizontal_img} />
        </div>
      )}
      <div className={styles.card_content}>
        {/* desktop view */}
        <div className={styles.desktop_title}>
          {heading && (
            <Typography tag="h4" variant="subheading" theme={{ root: styles.heading }}>
              {heading}
            </Typography>
          )}
        </div>
        {description && (
          <Typography tag="p" variant="body" theme={{ root: styles.card_description }}>
            {description}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default ImageContentCard
