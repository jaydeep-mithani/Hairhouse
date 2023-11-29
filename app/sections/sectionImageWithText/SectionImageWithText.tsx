import { Typography, Image } from '@overdose/components'
import { Button } from '~/components'
import clsx from 'clsx'
import React from 'react'

import { SectionBackground } from '../../../graphql/types'
import styles from './SectionImageWithText.module.css'
import { SectionImageWithTextProps } from './SectionImageWithText.types'

export const SectionImageWithText: React.FC<SectionImageWithTextProps> = ({ imageWithText }) => {
  const { heading, text, image, button, buttons = [], backgroundColour } = imageWithText ?? {}

  const isDark = SectionBackground.Dark === `${backgroundColour}`
  const darkButtonStyle = `${styles.button_inverted} dark:bg-primary dark:text-primary py-2 px-4`

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.shop_wrapper, {
          [styles.shop_wrapper_inverted]: isDark,
        })}>
        {image && <Image src={image?.url} altText={image?.altText} width={image?.width} height={image?.height} />}
        {heading && (
          <Typography tag="h3" theme={{ root: clsx(styles.title, { [styles.text_inverted]: isDark }) }}>
            {heading}
          </Typography>
        )}
        {text?.html && (
          <Typography
            theme={{ root: clsx({ [styles.text_inverted]: isDark }) }}
            dangerouslySetInnerHTML={{ __html: text?.html }}
          />
        )}
        {button && (
          <Button
            variant="solid"
            href={button.url}
            className={clsx({
              [darkButtonStyle]: isDark,
              'bg-primary text-contrast py-2 px-4': !isDark,
            })}>
            {button?.buttonText}
          </Button>
        )}
        {!!buttons?.length &&
          buttons.map((button) => {
            return (
              <Button key={button.id} variant="solid" href={button.url}>
                {button?.buttonText}
              </Button>
            )
          })}
      </div>
    </div>
  )
}
