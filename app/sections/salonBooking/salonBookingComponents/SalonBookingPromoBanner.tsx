import { Typography, Button } from '@overdose/components'

import styles from '../SalonBooking.module.css'
import { SalonBookingPromoBannerProps } from '../SalonBooking.types'

export const SalonBookingPromoBanner = ({
  promoBannerBackgroundColor,
  promoBannerCta,
  promoBannerText,
}: SalonBookingPromoBannerProps) => {
  return (
    <div style={{ backgroundColor: `${promoBannerBackgroundColor?.hex}` }} className={styles.promoBanner}>
      <Typography tag="p" variant="body">
        {promoBannerText}
      </Typography>
      {promoBannerCta && (
        <Button
          variant={promoBannerCta.ctaType || 'link'}
          status="primary"
          href={`/${promoBannerCta.url}`}
          theme={{
            root: styles.buttonLink,
          }}>
          {promoBannerCta.buttonText}
        </Button>
      )}
    </div>
  )
}
