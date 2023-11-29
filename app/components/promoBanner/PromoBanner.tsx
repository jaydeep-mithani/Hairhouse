import { Image } from '@shopify/hydrogen'
import { Link } from '~/components'

import styles from './PromoBanner.module.css'
import { PromoBannerProps } from './PromoBanner.types'

export const PromoBanner = ({ modulePromoBanner, className }: PromoBannerProps) => {
  const { desktopImage, mobileImage, urlLink } = modulePromoBanner
  return (
    <div className={className}>
      <Link to={`/${urlLink}`}>
        {mobileImage && (
          <Image
            className={styles.mobileImage}
            alt={mobileImage?.altText}
            data={mobileImage}
            loaderOptions={{
              scale: 2,
              crop: 'center',
            }}
          />
        )}
        {desktopImage && (
          <Image
            className={styles.desktopImage}
            alt={desktopImage.altText}
            data={desktopImage}
            loaderOptions={{
              scale: 2,
              crop: 'center',
            }}
          />
        )}
      </Link>
    </div>
  )
}
