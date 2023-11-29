import { Button, Typography, Input } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { IconArrowLeft, IconArrowRight, IconCalendar } from '~/components'
import { SalonBookingAction } from '~/lib/type'
import clsx from 'clsx'
import moment from 'moment'
import { useEffect, useState, useTransition } from 'react'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar/dist/cjs/Calendar'

import styles from '../SalonBooking.module.css'
import { AvaliableAddointmentProps, SalonBookingSelectTimeProps, Tabs } from '../SalonBooking.types'
import { BookingTitle } from './BookingTitle'
import { SalonBookingProgressBar } from './SalonBookingProgressBar'
import { TimeCard } from './TimeCard'

export const SalonBookingSelectTime = ({ setActiveStep }: SalonBookingSelectTimeProps) => {
  const [date, setDate] = useState(new Date())
  const [localData, setLocalData] = useState<{
    shortcutId: null | string
    serviceId: null | string
    employeeNumber: null | string
  }>({ shortcutId: null, serviceId: null, employeeNumber: null })
  const [selectedAppoinment, setSelectedAppoinment] = useState<AvaliableAddointmentProps | null>(null)
  const [isMobileCalendar, setIsMobileCalendar] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition()
  const fetcher = useFetcher()

  useEffect(() => {
    const selectedStore = typeof window !== 'undefined' ? localStorage.getItem('selectedStore') : null
    const selectedServiceId = typeof window !== 'undefined' ? localStorage.getItem('serviceId') : null
    const employee = typeof window !== 'undefined' ? localStorage.getItem('employee') : null

    setLocalData({
      shortcutId: selectedStore ? JSON.parse(selectedStore).shortcuts_site_id : null,
      serviceId: selectedServiceId ? JSON.parse(selectedServiceId) : null,
      employeeNumber: employee ? JSON.parse(employee)?.number : null,
    })
  }, [])

  useEffect(() => {
    const formattedDate = moment(date).format('YYYY-MM-DD')
    if (formattedDate && localData?.employeeNumber && localData?.serviceId && localData?.shortcutId) {
      startTransition(() => {
        fetcher.submit(
          {
            salonBookingAction: SalonBookingAction.CALCULATE_AVALIABLE_APPOINTMENTS,
            serviceId: localData?.serviceId as string,
            employeeNumber: localData?.employeeNumber as string,
            shortcutSiteid: localData?.shortcutId as string,
            date: formattedDate,
          },
          { method: 'post', action: '/api/salon-bookings' },
        )
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])

  const handleContinueBtn = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedAppoinment', JSON.stringify(selectedAppoinment))
    }
    return setActiveStep(Tabs.STEP6)
  }

  return (
    <div className="my-5 md:my-20 mx-auto flex flex-col	items-center w-full px-4 md:px-12">
      <SalonBookingProgressBar currentStep={5} totalSteps={5} />
      <div className="w-full max-w-[656px] flex flex-col items-center">
        <BookingTitle title="Select your booking time" subTitle="Select your preferred date and time below." />
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row gap-8 w-full text-center">
          <div className="w-full mx-auto">
            <Typography tag="p" variant="pageheading" theme={{ root: clsx('mb-4', styles.columnTitle) }}>
              1. Select date
            </Typography>
            <div className="md:hidden w-full relative">
              <Input
                readOnly
                label="Date"
                defaultValue=""
                value={moment(date).format('YYYY-MM-DD')}
                theme={{ root: styles.inputCalendar }}
              />
              <button
                type="button"
                className="absolute top-[14px] right-[14px] z-5"
                onClick={() => {
                  return setIsMobileCalendar(true)
                }}>
                <IconCalendar />
              </button>
              {isMobileCalendar && (
                <div className="absolute right-0 bottom-[100%] translate-y-full z-10 bg-white">
                  <Calendar
                    onChange={(value) => {
                      setIsMobileCalendar(false)
                      return setDate(value as Date)
                    }}
                    value={date}
                    minDate={new Date()}
                    next2Label={null}
                    prev2Label={null}
                    prevLabel={<IconArrowLeft width={24} height={24} />}
                    nextLabel={<IconArrowRight width={24} height={24} />}
                    className={styles.calendar}
                  />
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <Calendar
                onChange={(value) => {
                  return setDate(value as Date)
                }}
                value={date}
                minDate={new Date()}
                next2Label={null}
                prev2Label={null}
                prevLabel={<IconArrowLeft width={24} height={24} />}
                nextLabel={<IconArrowRight width={24} height={24} />}
                className={styles.calendar}
              />
            </div>
          </div>
          <div className="w-full mx-auto">
            <Typography tag="p" variant="pageheading" theme={{ root: clsx('mb-4', styles.columnTitle) }}>
              2. Select time
            </Typography>
            {!isPending && fetcher?.data?.available_appointments?.length ? (
              <TimeCard
                availableAppointments={fetcher?.data?.available_appointments}
                setSelectedAppoinment={setSelectedAppoinment}
              />
            ) : (
              <div className={clsx('w-full py-[10px]', styles.timeTitleBlock)}>
                <Typography tag="p" variant="body" theme={{ root: styles.grey }}>
                  Select a date to show available times.
                </Typography>
              </div>
            )}
          </div>
        </div>
        <Button
          variant="solid"
          status="primary"
          theme={{
            root: styles.createAccountButton,
          }}
          disabled={!selectedAppoinment}
          onClick={() => {
            return handleContinueBtn()
          }}>
          Continue
        </Button>
      </div>
    </div>
  )
}
