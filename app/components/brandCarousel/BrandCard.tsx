import { Image } from '@shopify/hydrogen'
import { Link } from '~/components'

import { BrandCardProps } from './declarations/BrandCard.types'
import styles from './styles/BrandsCarousel.module.css'

export const BrandCard = ({ data }: BrandCardProps) => {
  const { altText, image, url } = data

  return (
    <Link to={url} className={styles.brandCard}>
      <Image
        alt={altText}
        data={image}
        loaderOptions={{
          scale: 2,
          crop: 'center',
        }}
      />
    </Link>
  )
}
