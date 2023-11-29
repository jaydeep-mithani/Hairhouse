import { Typography } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { SalonBookingAction } from '~/lib/type'
import clsx from 'clsx'
import { useTransition, useEffect, useState } from 'react'

import styles from '../SalonBooking.module.css'
import { HairServiceProps, HairServiceAddonsProps, SalonBookingSelectServiceProps } from '../SalonBooking.types'
import { BookingCard } from './BookingCard'
import { BookingTitle } from './BookingTitle'
import { SalonBookingProgressBar } from './SalonBookingProgressBar'

export const SalonBookingSelectService = ({ setActiveStep }: SalonBookingSelectServiceProps) => {
  const [isPending, startTransition] = useTransition()
  const [hairLength, setHairLength] = useState<null | string>(null)
  const [shortcutId, setShortcutId] = useState<null | string>(null)
  const [serviceId, setServiceId] = useState<null | string>(null)
  const fetcher = useFetcher()
  const fetcherAddons = useFetcher()

  useEffect(() => {
    const localHairLength = typeof window !== 'undefined' ? localStorage.getItem('hairLength') : null
    setHairLength(localHairLength ? JSON.parse(localHairLength) : null)
    const selectedStore = typeof window !== 'undefined' ? localStorage.getItem('selectedStore') : null
    setShortcutId(selectedStore ? JSON.parse(selectedStore).shortcuts_site_id : null)
  }, [])

  useEffect(() => {
    if (shortcutId && hairLength) {
      startTransition(() => {
        fetcher.submit(
          {
            salonBookingAction: SalonBookingAction.GET_HAIR_SERVICES,
            hairLength,
            shortcutSiteid: shortcutId,
          },
          { method: 'post', action: '/api/salon-bookings' },
        )
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hairLength, shortcutId])

  useEffect(() => {
    if (serviceId && shortcutId) {
      startTransition(() => {
        fetcherAddons.submit(
          {
            salonBookingAction: SalonBookingAction.GET_ADDONS,
            serviceId,
            shortcutSiteid: shortcutId,
          },
          { method: 'post', action: '/api/salon-bookings' },
        )
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceId])

  return (
    <div className="flex flex-col items-center px-4 md:px-12 my-5 md:my-20">
      <SalonBookingProgressBar currentStep={3} totalSteps={5} />
      {serviceId ? (
        <>
          <BookingTitle
            title="Service add-ons"
            subTitle="Get the most out of your experience by adding a luxury treatment."
          />
          <div className="mb-8 md:mb-10 flex flex-col w-full md:w-[656px] gap-8">
            <BookingCard title="No add-ons thanks" isAddOns id={serviceId} setActiveStep={setActiveStep} />
            <div className="flex flex-col gap-3 text-left">
              <Typography variant="subheading" tag="p" weight="bold">
                Add style to your cut
              </Typography>
              {!isPending &&
                !!fetcherAddons?.data?.addons?.length &&
                fetcherAddons?.data?.addons?.map((card: HairServiceAddonsProps) => {
                  return (
                    <BookingCard
                      key={card?.id}
                      title={card?.display_name}
                      subTitle={card?.description}
                      time={`${card?.duration}`}
                      price={card?.price}
                      id={serviceId}
                      isAddOns
                      setActiveStep={setActiveStep}
                    />
                  )
                })}
            </div>
          </div>
        </>
      ) : (
        <>
          <BookingTitle title="Select your service" subTitle="Choose from our selection of hair services." />
          {!isPending && !!fetcher?.data?.length && (
            <div className="mb-8 md:mb-10 flex flex-col w-full md:w-[656px] gap-8 md:gap-10">
              {fetcher?.data?.map((service: HairServiceProps) => {
                return (
                  <div key={service?.id} className="flex flex-col gap-3 text-left">
                    {service?.name && (
                      <Typography variant="heading" tag="p" weight="bold">
                        {service?.name}
                      </Typography>
                    )}
                    {!!service?.services?.length &&
                      service?.services?.map((card) => {
                        return (
                          <BookingCard
                            key={card?.id}
                            title={card?.display_name}
                            subTitle={card?.name}
                            time={card?.time}
                            price={card?.price}
                            addons={card?.shortcut_addons}
                            id={card?.id}
                            setServiceId={setServiceId}
                            setActiveStep={setActiveStep}
                          />
                        )
                      })}
                  </div>
                )
              })}
            </div>
          )}
          <Typography variant="body" tag="p" theme={{ root: clsx(styles.bodySubTitle, 'text-center') }}>
            We offer an extensive range of specialty services, contact your local Hairhouse <br />
            for a personalised consultation to meet your hair needs.
          </Typography>
        </>
      )}
    </div>
  )
}
