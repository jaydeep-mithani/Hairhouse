import { Typography, Button } from '@overdose/components'
import clsx from 'clsx'
import { HeroLayout } from 'graphql/types'
import React from 'react'

import styles from './ImageWithCard.module.css'
import { ImageWithCardProps } from './ImageWithCard.types'

export const ImageTextBlock: React.FC<ImageWithCardProps> = ({ title, subtitle, copy, ctaButton, layout }) => {
  return (
    <div
      className={clsx(styles.banner_text_block, {
        [styles.text_block_left]: layout === HeroLayout.TextBlockLeft,
        [styles.text_block_right]: layout === HeroLayout.TextBlockRight,
      })}>
      {subtitle && (
        <Typography tag="p" variant="label">
          {subtitle}
        </Typography>
      )}
      {title && (
        <Typography
          tag="h1"
          variant="displayMedium"
          theme={{
            root: clsx(styles.text_title),
          }}>
          {title}
        </Typography>
      )}

      {copy && (
        <Typography
          tag="p"
          variant="bodyLarge"
          theme={{
            regular: clsx(styles.description_text),
          }}>
          {copy}
        </Typography>
      )}
      {!!ctaButton?.length && (
        <div className={clsx(styles.button_wrapper)}>
          {ctaButton.map((btn, index) => {
            return (
              <Button
                key={index}
                variant="solid"
                status={btn.ctaType}
                href={btn.url}
                theme={{
                  root: clsx(styles.button),
                }}>
                {btn.buttonText}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}
