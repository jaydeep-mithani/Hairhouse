import { Image } from '@overdose/components'
import { Link } from '~/components'

import { BrandCardProps } from './BrandCard.types'
import styles from './BrandLogoGrid.module.css'

export const BrandCard = ({ brandName, brandLogo, brandUrl }: BrandCardProps) => {
  if (!brandLogo?.url || !brandName) {
    return null
  }

  return (
    <Link to={brandUrl || ''}>
      <Image alt={brandName} src={brandLogo?.url} className={styles.brandCard} />
      <span className={styles.brandName}>{brandName}</span>
    </Link>
  )
}
