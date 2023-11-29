import { Typography } from '@overdose/components'

import styles from './CampaignLandingBrands.module.css'
import { CampaignLandingBrandsProps } from './CampaignLandingBrands.types'

export const CampaignLandingBrands: React.FC<CampaignLandingBrandsProps> = (props) => {
  if (!props.data) return null

  const { title, brands } = props.data
  return (
    <div className={styles.root}>
      {title && (
        <Typography tag="h1" variant="displayLarge" weight="light" align="center">
          {title}
        </Typography>
      )}
      <div className={styles.brands_container}>
        {brands.map(
          (brand, index) => brand && brand.image && brand.image.url && <img src={brand.image.url} key={index} />,
        )}
      </div>
    </div>
  )
}
