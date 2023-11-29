import { Image } from '@shopify/hydrogen'
import clsx from 'clsx'
import { HeroLayout } from 'graphql/types'
import React from 'react'

import { ImageTextBlock } from './ImageTextBlock'
import styles from './ImageWithCard.module.css'
import { ImageWithCardProps } from './ImageWithCard.types'

export const ImageWithCard: React.FC<ImageWithCardProps> = ({
  mobileImage,
  desktopImg,
  ctaButton,
  copy,
  title,
  subtitle,
  layout,
}) => {
  return (
    <div
      className={clsx(styles.root, styles.banner_root_wrapper, {
        [styles.right_image]: layout === HeroLayout.TextBlockRight,
      })}>
      {mobileImage && (
        <Image
          className={styles.hero_img_mobile}
          alt={mobileImage?.altText}
          data={mobileImage}
          loaderOptions={{
            scale: 2,
            crop: 'center',
          }}
        />
      )}
      {desktopImg && (
        <Image
          className={clsx(styles.hero_img_desktop)}
          alt={desktopImg?.altText}
          data={desktopImg}
          height='"465px"'
          width="100%"
          loaderOptions={{
            scale: 2,
            crop: 'center',
          }}
        />
      )}
      <ImageTextBlock layout={layout} title={title} subtitle={subtitle} copy={copy} ctaButton={ctaButton} />
    </div>
  )
}
