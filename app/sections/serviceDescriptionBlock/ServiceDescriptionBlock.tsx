import { Image } from '@overdose/components'
import clsx from 'clsx'
import React from 'react'

import styles from './ServiceDescriptionBlock.module.css'
import { ServiceDescriptionBlockProps } from './ServiceDescriptionBlock.types'
import { ServiceDescriptionTextBlock } from './ServiceDescriptionTextBlock'

export const ServiceDescriptionBlock: React.FC<ServiceDescriptionBlockProps> = ({
  heading,
  descriptionText,
  content,
  imagePosition = 'left',
  mobileImg,
  desktopImg,
  button,
}) => {
  return (
    <div
      className={clsx(styles.root, styles.service_rootWrapper, {
        [styles.imageRight]: imagePosition === 'right',
      })}>
      {mobileImg?.url && <Image className={styles.serviceImageMobile} alt="piercing-mob" src={mobileImg?.url} />}
      {desktopImg?.url && (
        <Image
          className={styles.serviceImageDesktop}
          alt="piercing"
          src={desktopImg?.url}
          height={desktopImg?.height}
          width={desktopImg?.width}
        />
      )}
      <ServiceDescriptionTextBlock
        heading={heading}
        descriptionText={descriptionText}
        content={content}
        imagePosition={imagePosition}
        button={button}
      />
    </div>
  )
}
