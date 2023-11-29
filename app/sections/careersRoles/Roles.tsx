import { Button, Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import React from 'react'

import styles from './Roles.module.css'
import { RolesProps } from './Roles.types'

export const Roles = ({ heading, bkgColor, positions }: RolesProps) => {
  return (
    <div className={styles.root} style={{ backgroundColor: bkgColor?.hex || '' }}>
      <div className={styles.contentContainer}>
        {heading && (
          <Typography
            tag="h4"
            variant="displayLarge"
            theme={{
              root: styles.title2,
            }}>
            {heading}
          </Typography>
        )}
        <div className={styles.container}>
          {!!positions?.length &&
            positions.map((card, index: number) => {
              return (
                <div key={index} className={styles.tile}>
                  {card?.image?.url && (
                    <>
                      <div className={styles.imageContainer}>
                        <Image
                          data={card.image}
                          alt={card.image.altText}
                          width={card.image.width}
                          height={card.image.height}
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.contentContainerDetails}>
                        <div className={styles.tileContent}>
                          {card?.heading && (
                            <Typography
                              tag="h3"
                              variant="heading"
                              theme={{
                                root: styles.title,
                              }}>
                              {card.heading}
                            </Typography>
                          )}
                          {card?.text && (
                            <Typography
                              tag="p"
                              variant="body"
                              dangerouslySetInnerHTML={{ __html: card.text?.html }}
                              theme={{
                                root: styles.descriptionText,
                              }}
                            />
                          )}
                          {card?.button?.buttonText && (
                            <Button
                              variant="link"
                              status={card.button?.ctaType ? card.button?.ctaType : 'secondary'}
                              theme={{ root: styles.buttonCTA }}>
                              {card.button?.buttonText}
                            </Button>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
