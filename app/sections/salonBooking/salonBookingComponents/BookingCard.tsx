import { Typography } from '@overdose/components'
import { IconClock, IconArrowRight } from '~/components'
import clsx from 'clsx'

import styles from '../SalonBooking.module.css'
import { BookingCardProps, Tabs } from '../SalonBooking.types'

export const BookingCard = ({
  title,
  subTitle,
  time,
  price,
  addons,
  id,
  setServiceId,
  isAddOns,
  setActiveStep,
}: BookingCardProps) => {
  const handleCardClick = () => {
    if (addons) {
      setServiceId && id && setServiceId(id)
    } else if (isAddOns) {
      title && time && price
        ? localStorage?.setItem('serviceAddon', JSON.stringify({ title, time, price }))
        : localStorage?.removeItem('serviceAddon')
      localStorage?.setItem('serviceId', JSON.stringify(id))
      setActiveStep(Tabs.STEP4)
    } else {
      localStorage?.setItem('serviceId', JSON.stringify(id))
      setActiveStep(Tabs.STEP4)
    }
  }

  return (
    <button
      onClick={() => {
        return handleCardClick()
      }}
      type="button"
      className={clsx('p-4 md:px-5 md:py-[19px] flex justify-between items-center gap-8 md:gap-4', styles.serviceCard, {
        'md:py-4': !subTitle && !price && !time,
      })}>
      <div
        className={clsx('flex flex-col gap-1 items-start text-left', {
          'gap-0': !subTitle && !price && !time,
        })}>
        {title && (
          <Typography tag="p" variant="subheading" weight="bold">
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography
            tag="p"
            variant="bodyLarge"
            theme={{
              root: clsx(styles.bookingSubTitle, styles.bookingCardSubTitle),
            }}
            weight="bold">
            {subTitle}
          </Typography>
        )}
        {(!!time || !!price) && (
          <div className="flex items-center gap-4">
            {time && (
              <div className="flex items-center gap-1">
                <IconClock />
                <Typography
                  tag="p"
                  variant="bodyLarge"
                  theme={{
                    root: styles.bookingSubTitle,
                  }}
                  weight="bold">
                  {isAddOns ? '+' : ''}
                  {`${time}mins`}
                </Typography>
              </div>
            )}
            {!!price && (
              <Typography
                tag="p"
                variant="bodyLarge"
                theme={{
                  root: styles.bookingSubTitle,
                }}
                weight="bold">
                {`${isAddOns ? '+' : ''}$${price}`}
              </Typography>
            )}
          </div>
        )}
      </div>
      {(addons || isAddOns) && <IconArrowRight />}
    </button>
  )
}
