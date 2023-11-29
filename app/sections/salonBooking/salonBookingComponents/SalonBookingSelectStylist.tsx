import { Button, Textarea, Typography } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { SalonBookingAction } from '~/lib/type'
import clsx from 'clsx'
import { useTransition, useEffect, useState, useRef } from 'react'

import styles from '../SalonBooking.module.css'
import { HairStylistProps, SalonBookingSelectStylistProps, Tabs } from '../SalonBooking.types'
import { BookingTitle } from './BookingTitle'
import { SalonBookingProgressBar } from './SalonBookingProgressBar'

const NO_EMPLOYEE_ID = 'any'
export const SalonBookingSelectStylist = ({ setActiveStep }: SalonBookingSelectStylistProps) => {
  const [employeeId, setEmployeeId] = useState<null | number | string>(null)
  const ref = useRef<HTMLInputElement>(null)
  const [shortcutId, setShortcutId] = useState<null | string>(null)
  const [serviceId, setServiceId] = useState<null | string>(null)
  const [isPending, startTransition] = useTransition()
  const fetcher = useFetcher()

  useEffect(() => {
    const selectedStore = typeof window !== 'undefined' ? localStorage.getItem('selectedStore') : null
    setShortcutId(selectedStore ? JSON.parse(selectedStore).shortcuts_site_id : null)

    const selectedServiceId = typeof window !== 'undefined' ? localStorage.getItem('serviceId') : null
    setServiceId(selectedServiceId ? JSON.parse(selectedServiceId) : null)
  }, [])

  useEffect(() => {
    if (shortcutId && serviceId) {
      startTransition(() => {
        fetcher.submit(
          {
            salonBookingAction: SalonBookingAction.GET_HAIR_STYLIST,
            serviceId,
            shortcutSiteid: shortcutId,
          },
          { method: 'post', action: '/api/salon-bookings' },
        )
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceId, shortcutId])

  const handleCardClick = (id: number | string, name: string | null) => {
    localStorage.setItem('employee', JSON.stringify({ number: id, name }))
    setEmployeeId(id)
  }

  const handleContinue = () => {
    ref?.current?.value
      ? localStorage.setItem('specialRequests', JSON.stringify(ref?.current?.value))
      : localStorage.removeItem('specialRequests')
    setActiveStep(Tabs.STEP5)
  }

  return (
    <div className="my-5 md:my-20 mx-auto flex flex-col	items-center w-full px-4 md:px-12">
      <SalonBookingProgressBar currentStep={4} totalSteps={5} />
      <div className="w-full max-w-[656px] flex flex-col items-center">
        <div className="w-full max-w-[300px] md:max-w-full">
          <BookingTitle
            title="Select your stylist"
            subTitle="All of our hair stylists are licensed professions, experts in the industry."
          />
        </div>
        {!isPending && (
          <div className="flex flex-col gap-3 mb-8 md:mb-10 w-full">
            <button
              type="button"
              className={clsx('w-full p-4 md:p-[19px] text-left', styles.serviceCard, {
                [styles.serviceCardActive]: NO_EMPLOYEE_ID === employeeId,
              })}
              onClick={() => {
                return handleCardClick(NO_EMPLOYEE_ID, null)
              }}>
              <Typography tag="p" variant="subheading" weight="bold">
                No preference
              </Typography>
            </button>
            {!!fetcher?.data?.employees?.length &&
              fetcher?.data?.employees?.map((item: HairStylistProps) => {
                const name = `${item?.displayName?.[0].toUpperCase()}${item?.displayName?.slice(1).toLowerCase()}`
                return (
                  <button
                    type="button"
                    className={clsx('w-full p-4 md:p-[19px] text-left', styles.serviceCard, {
                      [styles.serviceCardActive]: item?.employeeNumber === employeeId,
                    })}
                    key={item?.employeeNumber}
                    onClick={() => {
                      return handleCardClick(item?.employeeNumber, name)
                    }}>
                    {name && (
                      <Typography tag="p" variant="subheading" weight="bold" theme={{ root: 'mb-1' }}>
                        {name}
                      </Typography>
                    )}
                    {item?.description && (
                      <Typography tag="p" variant="bodyLarge" theme={{ root: styles.bookingSubTitle }}>
                        {item?.description}
                      </Typography>
                    )}
                  </button>
                )
              })}
          </div>
        )}
        <div className="mb-8 md:mb-10 w-full">
          <Typography tag="p" variant="subheading" weight="bold" theme={{ root: 'mb-2' }}>
            Special requests
          </Typography>
          <Textarea
            maxLength={250}
            limitPosition="default"
            placeholder="I have very frizzy hair."
            ref={ref}
            theme={{ root: styles.textarea }}
            wrapperStyle={{
              height: 91,
            }}
          />
          <Typography tag="p" variant="caption" theme={{ root: clsx('mt-1', styles.maxCount) }}>
            Max character count: 250
          </Typography>
        </div>
        <Button
          variant="solid"
          status="primary"
          theme={{
            root: styles.createAccountButton,
          }}
          disabled={employeeId === null}
          onClick={() => {
            return handleContinue()
          }}>
          Continue
        </Button>
      </div>
    </div>
  )
}
