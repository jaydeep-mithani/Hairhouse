import { Typography, Button as OverdoseButton } from '@overdose/components'
import { Container } from '~/components/container'
import { ClickAndCollect, SameDayDelivery, SustainableSalon } from '~/components/Icon'
import { Gap } from '~/components/productSection/Gap'
import clsx from 'clsx'

import styles from './StoreCard.module.css'
import { StoreCardProps } from './StoreCard.types'

export const StoreCard: React.FC<StoreCardProps> = ({ store, onClick, isActive, hideBorder }) => {
  const borderColorClasses = clsx({
    'border-none': hideBorder,
    'border-interactive-action-primary': isActive && !hideBorder,
    'border-line-primary': !isActive && !hideBorder,
  })

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onClick) {
      onClick()
    }
  }

  const distanceRounded = 2
  const today = new Date().toLocaleDateString('en-US', { weekday: 'short' })

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${styles.container} ${borderColorClasses}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}>
      <Container
        className={styles.subheadingContainer}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Typography variant="subheading" theme={{ root: styles.storeName }} tag="p">
          {store?.name}
        </Typography>

        <Typography theme={{ root: styles.distance }} variant="label">
          {store?.distance.toFixed(distanceRounded)}km
        </Typography>
      </Container>
      <Gap mobileGap="12px" gap="12px" />
      <Container gap="12px" display="flex" flexDirection="row">
        {store?.available_service.available_for_piercing && store?.bookable_service.piercing_bookable && (
          <div className={styles.bookingBox}>
            <Typography variant="caption">Salon</Typography>
          </div>
        )}
        {store?.available_service.available_for_salon && store?.bookable_service.salon_bookable && (
          <div className={styles.bookingBox}>
            <Typography variant="caption">Piercing</Typography>
          </div>
        )}
      </Container>
      <Gap mobileGap="12px" gap="12px" />
      <Container display="flex" flexDirection="row" gap="16px" alignItems="center">
        {store?.store_features.enable_click_collect && <ClickAndCollect />}
        {store?.store_features.enable_rendr_delivery && <SameDayDelivery />}
        {store?.store_features.sustainable_salon && <SustainableSalon />}
      </Container>
      <Gap gap="8px" mobileGap="8px" />
      <Gap gap="4px" mobileGap="4px" />
      <Container display="flex" flexDirection="column">
        <Typography variant="caption" theme={{ root: styles.storeAdress }} tag="p">
          {store?.address1}
        </Typography>
        <Typography variant="caption" theme={{ root: styles.storeAdress }} tag="p">
          {store?.address2}
        </Typography>
        <Typography variant="caption">
          {store?.city} {store?.localized_province_name} {store?.zip}
        </Typography>
      </Container>
      <Gap gap="8px" mobileGap="8px" />
      <Typography variant="caption" theme={{ root: styles.operatingHours }} tag="p">
        <Typography variant="caption" theme={{ root: styles.openingHours }}>
          {"Today's opening hours: "}
        </Typography>{' '}
        {store?.operatingHours.find((hours) => {
          return hours.day === today.toLowerCase()
        })?.hours || 'N/A'}
      </Typography>
      <Gap gap="6px" mobileGap="6px" />
      <a href="tel" className={styles.phone}>
        {store?.phone}
      </a>
      <Gap gap="12px" mobileGap="12px" />
      <Container gap="12px" flexDirection="row">
        <OverdoseButton
          variant="solid"
          status="secondary"
          className={styles.storeLink}
          href={`store/${store?.url_component}`}>
          Visit Store Page
        </OverdoseButton>
        <OverdoseButton variant="solid" status="primary" className={styles.storeLink} href="/pages/salon-booking">
          Book Appointment
        </OverdoseButton>
      </Container>
    </div>
  )
}
