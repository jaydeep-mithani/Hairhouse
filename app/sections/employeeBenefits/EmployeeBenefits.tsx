import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import React from 'react'

import styles from './EmployeeBenefits.module.css'
import { EmployeeBenefitsProps } from './EmployeeBenefits.types'

export const EmployeeBenefits = ({ adminTitle, backgroundColour, iconsAndText }: EmployeeBenefitsProps) => {
  return (
    <div className={styles.root} style={{ backgroundColor: backgroundColour?.hex }}>
      <div className={styles.contentContainer}>
        {adminTitle && (
          <Typography
            tag="h4"
            variant="displayLarge"
            theme={{
              root: styles.title,
            }}>
            {adminTitle}
          </Typography>
        )}
        <div className={styles.container}>
          {!!iconsAndText?.length &&
            iconsAndText?.map((tile, index: number) => {
              return (
                <div key={index} className={styles.tile}>
                  {tile?.icon?.url && (
                    <>
                      <div className={styles.imageContainer}>
                        <Image data={tile.icon} alt={tile?.icon?.altText} className="w-full" />
                      </div>
                      <div className={styles.tileContent}>
                        {tile?.headingText && (
                          <Typography
                            tag="p"
                            variant="heading"
                            theme={{
                              root: styles.descriptionText,
                            }}>
                            {tile.headingText}
                          </Typography>
                        )}
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
