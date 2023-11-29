import { Button, Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import React from 'react'

import styles from './CareersCTA.module.css'
import { CareersCTAProps } from './CareersCTA.types'

export const CareersCTA = ({ contentBlock }: CareersCTAProps) => {
  return (
    <div className={styles.root}>
      {!!contentBlock?.length &&
        contentBlock.map((tile, index: number) => {
          return (
            <div key={index} className={styles.tile} style={{ backgroundColor: tile?.backgroundColour?.hex }}>
              {tile?.icon?.url && (
                <>
                  <div className={styles.imageContainer}>
                    <Image data={tile?.icon} alt={tile?.icon?.altText} className="w-full h-full" />
                  </div>
                  <div className={styles.tileContent}>
                    {tile?.adminTitle && (
                      <Typography
                        tag="p"
                        variant="heading"
                        theme={{
                          root: styles.descriptionText,
                        }}>
                        {tile.adminTitle}
                      </Typography>
                    )}
                    {tile?.linkText && (
                      <Button variant="link" theme={{ root: styles.buttonCTA }}>
                        {tile.linkText}
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
    </div>
  )
}
