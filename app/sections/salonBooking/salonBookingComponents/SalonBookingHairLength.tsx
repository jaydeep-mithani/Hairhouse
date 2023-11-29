import { Typography, Button, Image } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { SalonBookingAction } from '~/lib/type'
import clsx from 'clsx'
import { useTransition, useEffect, SyntheticEvent } from 'react'

import styles from '../SalonBooking.module.css'
import { SalonBookingHairLengthProps, HairLengthDataProps, Tabs } from '../SalonBooking.types'
import { BookingTitle } from './BookingTitle'
import { SalonBookingProgressBar } from './SalonBookingProgressBar'

export const SalonBookingHairLength = ({
  saloonbookingstep,
  hairLength,
  setHairLength,
  setActiveStep,
}: SalonBookingHairLengthProps) => {
  const [isPending, startTransition] = useTransition()
  const fetcher = useFetcher()

  useEffect(() => {
    startTransition(() => {
      fetcher.submit(
        {
          salonBookingAction: SalonBookingAction.GET_HAIR_LENGTH,
        },
        { method: 'post', action: '/api/salon-bookings' },
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleImageError = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    target.style.display = 'none'
  }

  const handleCardClick = (id: string) => {
    localStorage.setItem('hairLength', JSON.stringify(id))
    setHairLength(id)
  }

  return (
    <div className={styles.salonHeirLengthWrapper}>
      <SalonBookingProgressBar currentStep={saloonbookingstep} totalSteps={5} />
      <BookingTitle
        title="Select your hair length"
        subTitle="Selecting your correct hair length will help us to provide accurate pricing and times."
      />
      {!isPending && (
        <div className={clsx(styles.imageWrapper, styles.hairlengthImageWrapper)}>
          {!!fetcher?.data?.length &&
            fetcher?.data?.map((item: HairLengthDataProps) => {
              return (
                <button
                  key={item?.id}
                  type="button"
                  onClick={() => {
                    return handleCardClick(item?.id)
                  }}
                  className={clsx(styles.hairLengthCard, {
                    [styles.hairLengthCardActive]: item?.id === hairLength,
                  })}>
                  {item?.icon_url && (
                    <Image
                      src={item?.icon_url}
                      alt={item?.title}
                      className={styles.hairLengthImage}
                      width={187}
                      height={231}
                      sizes="(max-width: 600px) 110px, 110px"
                      onError={(e: SyntheticEvent) => {
                        return handleImageError(e)
                      }}
                    />
                  )}
                  <div className={styles.hairLengthCardTextWrapper}>
                    {item?.title && (
                      <Typography
                        tag="p"
                        variant="subheading"
                        theme={{
                          root: styles.salonHairLengthImageHeading,
                        }}>
                        {item?.title}
                      </Typography>
                    )}
                    {item?.sub_title && (
                      <Typography
                        tag="p"
                        variant="body"
                        theme={{
                          root: clsx(styles.salonsubtitle, styles.salonHairlengthSubtitle),
                        }}>
                        {item?.sub_title}
                      </Typography>
                    )}
                  </div>
                </button>
              )
            })}
        </div>
      )}
      <Button
        variant="solid"
        status="primary"
        disabled={!hairLength}
        theme={{
          root: styles.createAccountButton,
        }}
        onClick={() => {
          return setActiveStep(Tabs.STEP3)
        }}>
        Continue
      </Button>
      <Typography
        tag="p"
        variant="caption"
        theme={{
          root: styles.hairlengthCaption,
        }}>
        Please note extra may be charged for extra time/colour if needed.
      </Typography>
    </div>
  )
}
