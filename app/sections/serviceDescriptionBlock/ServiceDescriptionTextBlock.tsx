import { Button, Typography } from '@overdose/components'
import clsx from 'clsx'
import React from 'react'

import styles from './ServiceDescriptionBlock.module.css'
import { ServiceDescriptionBlockProps } from './ServiceDescriptionBlock.types'

export const ServiceDescriptionTextBlock: React.FC<ServiceDescriptionBlockProps> = ({
  heading,
  descriptionText,
  content,
  imagePosition,
  button,
}) => {
  return (
    <div
      className={clsx(styles.service_text_block, {
        [styles.text_block_right]: imagePosition === 'left',
        [styles.text_block_left]: imagePosition === 'right',
      })}>
      <div className={styles.text_content_wrapper}>
        <div className={styles.text_headings}>
          {heading && (
            <Typography
              tag="h1"
              variant="displayExtraLarge"
              theme={{
                root: styles.text_title,
              }}>
              {heading}
            </Typography>
          )}
          {descriptionText && (
            <Typography tag="p" variant="body" theme={{ root: styles.description }}>
              {descriptionText}
            </Typography>
          )}
        </div>
        {content && (
          <Typography
            tag="p"
            variant="bodyLarge"
            theme={{
              regular: styles.steps_text,
            }}
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        )}
      </div>
      {button?.buttonText && (
        <Button
          variant="solid"
          href={button.url}
          theme={{
            root: styles.button,
          }}>
          {button.buttonText}
        </Button>
      )}
    </div>
  )
}
