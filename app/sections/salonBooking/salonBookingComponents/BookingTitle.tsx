import { Typography } from '@overdose/components'
import clsx from 'clsx'

import styles from '../SalonBooking.module.css'
import { BookingTitleProps } from '../SalonBooking.types'

export const BookingTitle = ({ title, subTitle, isAccount }: BookingTitleProps) => {
  return (
    <div
      className={clsx('mb-8 md:mb-10 text-center flex flex-col items-center gap-3', {
        'mb-3 md:mb-3': isAccount === true,
      })}>
      {title && (
        <Typography
          tag="p"
          variant="displayExtraLarge"
          theme={{
            root: styles.bookingTitle,
          }}>
          {title}
        </Typography>
      )}
      {subTitle && (
        <Typography
          tag="p"
          variant="bodyLarge"
          theme={{
            root: clsx(styles.bookingSubTitle, 'font-[350]'),
          }}>
          {subTitle}
        </Typography>
      )}
    </div>
  )
}
