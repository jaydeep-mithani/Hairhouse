import { Image, Typography } from '@overdose/components'

import styles from './SalonPartners.module.css'
import { SalonPartnersProps } from './SalonPartners.types'

export const SalonPartners: React.FC<SalonPartnersProps> = (props) => {
  if (!props?.data) {
    return null
  }
  const { headingText, subtext, brandsBrands } = props.data
  return (
    <div className={styles.root}>
      {subtext && (
        <Typography variant="subheading" tag="h2" weight="bold">
          {subtext}
        </Typography>
      )}
      {headingText && (
        <Typography variant="displayLarge" tag="h1" weight="bold">
          {headingText}
        </Typography>
      )}
      <div className={styles.imagesContainer}>
        {!!brandsBrands?.length &&
          brandsBrands.map((item, index) => {
            return (
              <div key={`${item?.brandLogo?.id} ${index}`} className={styles.imageWrapper}>
                <Image src={item?.brandLogo?.url} alt={`${item?.brandLogo?.altText}${index}`} />
              </div>
            )
          })}
      </div>
    </div>
  )
}
