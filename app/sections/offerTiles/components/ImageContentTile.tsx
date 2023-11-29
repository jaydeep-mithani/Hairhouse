import { Button, Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import React from 'react'

import styles from '../OfferTiles.module.css'
import { ITile } from '../OfferTiles.types'

export const ImageContentTile = ({ heading, description, buttonText, topLeftBoxText, image, url }: ITile) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img_section}>
        {image && <Image data={image} alt={image?.altText} className={styles.horizontal_img} />}
        {topLeftBoxText && (
          <Typography tag="span" variant="caption" theme={{ root: styles.badge }}>
            {topLeftBoxText}
          </Typography>
        )}
      </div>
      <div className={styles.card_content}>
        {heading && (
          <Typography tag="h3" variant="pageheading" theme={{ root: styles.desktop_title }}>
            {heading}
          </Typography>
        )}
        {description && (
          <Typography tag="small" variant="caption">
            {description}
          </Typography>
        )}
        {buttonText && (
          <Button variant="link" href={url} theme={{ root: styles.shop_btn }}>
            <Typography tag="h6" variant="body" theme={{ root: 'font-[350]' }}>
              {buttonText}
            </Typography>
          </Button>
        )}
      </div>
    </div>
  )
}
