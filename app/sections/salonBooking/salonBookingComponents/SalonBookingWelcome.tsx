import { Typography, Image } from '@overdose/components'
import clsx from 'clsx'

import styles from '../SalonBooking.module.css'
import { SalonBookingWelcomeProps, bookingTypes, Tabs } from '../SalonBooking.types'
import { BookingTitle } from './BookingTitle'

export const SalonBookingWelcome = ({
  bookingType,
  setBookingType,
  salonBooking,
  setActiveStep,
  isAuthenticated,
}: SalonBookingWelcomeProps) => {
  const { salonWelcomeImage1, salonWelcomeImage2, salonWelcomeImageHeading1, salonWelcomeImageHeading2 } = salonBooking

  return (
    <div className={styles.salonWelcomeWrapper}>
      <div className="max-w-[400px]">
        <BookingTitle
          title="Welcome, let’s book an appointment"
          subTitle="What type of appointment would you like to book today?"
        />
      </div>
      <div className={styles.imageWrapper}>
        <button
          type="button"
          onClick={() => {
            setBookingType(bookingTypes.salon)
            return isAuthenticated ? setActiveStep(Tabs.STEP1) : setActiveStep(Tabs.ACCOUNT)
          }}
          className={clsx(styles.bookingTypeCard, {
            [styles.bookingTypeCardSelected]: bookingType === bookingTypes.salon,
          })}>
          {salonWelcomeImage1 && (
            <Image
              src={salonWelcomeImage1.url}
              alt={salonWelcomeImageHeading1 || 'salon'}
              className={styles.salonWelcomeImage}
            />
          )}
          <Typography
            tag="p"
            variant="pageheading"
            theme={{
              root: styles.salonWelcomeImageHeading,
            }}>
            {salonWelcomeImageHeading1}
          </Typography>
        </button>
        <button
          type="button"
          onClick={() => {
            return setBookingType(bookingTypes.piercing)
          }}
          className={clsx(styles.bookingTypeCard, {
            [styles.bookingTypeCardSelected]: bookingType === bookingTypes.piercing,
          })}>
          {salonWelcomeImage2 && (
            <Image
              src={salonWelcomeImage2.url}
              alt={salonWelcomeImageHeading2 || 'piercing'}
              className={styles.salonWelcomeImage}
            />
          )}
          <Typography
            tag="p"
            variant="pageheading"
            theme={{
              root: styles.salonWelcomeImageHeading,
            }}>
            {salonWelcomeImageHeading2}
          </Typography>
        </button>
      </div>
    </div>
  )
}
