import { Typography, Button, Checkbox, Input } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { IconHome, IconScissors, IconCalendar, IconUser } from '~/components'
import { SalonBookingAction } from '~/lib/type'
import clsx from 'clsx'
import moment from 'moment'
import { SyntheticEvent, useState, useEffect, useTransition } from 'react'

import styles from '../SalonBooking.module.css'
import { SalonBookingReviewBookingProps, Tabs, ConfirmsStateProps, BookingDataProps } from '../SalonBooking.types'
import { getTimeInterval } from '../salonBookingUtils/utils'
import { BookingTitle } from './BookingTitle'
import { FinishBlockItem } from './FinishBlockItem'

export const SalonBookingReviewBooking = ({ setActiveStep, customer }: SalonBookingReviewBookingProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [confirms, setConfirms] = useState<ConfirmsStateProps>({
    phone: customer?.phone as string,
    confirm: false,
    terms_and_conditions: false,
    isValidPhone: customer?.phone ? true : null,
  })

  const [bookingData, setBookingData] = useState<BookingDataProps>({
    serviceId: null,
    store: null,
    appoinment: null,
    employee: null,
    specialRequest: null,
  })
  const [isPending, startTransition] = useTransition()
  const fetcher = useFetcher()
  const customerFetcher = useFetcher()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const selectedServiceId = localStorage.getItem('serviceId')
      const selectedStore = localStorage.getItem('selectedStore')
      const selectedEmployee = localStorage.getItem('employee')
      const selectedAppoinment = localStorage.getItem('selectedAppoinment')
      const selectedSpecialRequest = localStorage.getItem('specialRequests')

      setBookingData({
        serviceId: selectedServiceId ? JSON.parse(selectedServiceId) : null,
        store: selectedStore ? JSON.parse(selectedStore) : null,
        employee: selectedEmployee ? JSON.parse(selectedEmployee) : null,
        appoinment: selectedAppoinment ? JSON.parse(selectedAppoinment) : null,
        specialRequest: selectedSpecialRequest ? JSON.parse(selectedSpecialRequest) : null,
      })
    }
  }, [])

  const validateInput = (phone: string) => {
    const phoneRegex = /^\+\d{1,3}\d{9,15}$/
    setConfirms((prevConfirms) => {
      return { ...prevConfirms, isValidPhone: phoneRegex.test(phone) }
    })
  }

  const handleInput = (event: SyntheticEvent) => {
    const phone = (event.target as HTMLInputElement).value
    if (confirms?.isValidPhone && phone) {
      customerFetcher.submit(
        {
          email: customer?.email as string,
          phone,
          salonRedirect: 'salon-booking',
        },
        { method: 'post', action: '/account/edit' },
      )
    }
    setIsEdit(false)
  }

  const handleConfirm = (isChecked: boolean) => {
    setConfirms((prevConfirms) => {
      return { ...prevConfirms, confirm: isChecked }
    })
  }

  const handletermsConditions = (isChecked: boolean) => {
    setConfirms((prevConfirms) => {
      return { ...prevConfirms, terms_and_conditions: isChecked }
    })
  }

  const handleConfirmBooking = () => {
    startTransition(() => {
      fetcher.submit(
        {
          salonBookingAction: SalonBookingAction.POST_BOOKING,
          serviceId: bookingData?.serviceId as string,
          employeeNumber: bookingData?.employee?.number as string,
          shortcutSiteid: `${bookingData?.store?.shortcuts_site_id}`,
          date: bookingData?.appoinment?.scheduled_date as string,
          startTime: bookingData?.appoinment?.services[0]?.start_time as string,
          duration: bookingData?.appoinment?.duration as string,
          specialRequest: bookingData?.specialRequest as string,
        },
        { method: 'post', action: '/api/salon-bookings' },
      )
    })
  }

  if (!isPending && fetcher?.data) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('appointments', JSON.stringify(fetcher?.data?.appoinments))
    }
    setActiveStep(Tabs.STEP7)
  }

  return (
    <div className="mt-8 mb-5 md:my-20 flex flex-col items-center w-full justify-center md:max-w-[656px] mx-auto px-4">
      <div className="max-w-[600px]">
        <BookingTitle
          title="Review booking"
          subTitle="Please ensure your number is up-to-date, we’ll send important booking information and confirm any details if required."
        />
      </div>
      <div className={clsx('mb-5 md:mb-4 p-6 md:p-10 flex flex-col gap-6 md:gap-8 w-full', styles.finishBlock)}>
        <FinishBlockItem
          icon={<IconHome />}
          title={bookingData?.store?.name}
          subtitle={bookingData?.store?.address1}
          secondSubtitle={bookingData?.store?.address2}
        />
        <FinishBlockItem
          icon={<IconScissors />}
          title="Services"
          subtitle={bookingData?.appoinment?.services[0]?.display_name}
          secondSubtitle={bookingData?.appoinment?.services[1]?.display_name}
        />
        <FinishBlockItem
          icon={<IconCalendar width={24} height={24} />}
          title={moment(bookingData?.appoinment?.scheduled_date).format('dddd, Do MMMM YYYY')}
          subtitle={getTimeInterval(
            bookingData?.appoinment?.services[0]?.start_time,
            bookingData?.appoinment?.duration,
          )}
        />
        <FinishBlockItem
          icon={<IconUser />}
          title={`Stylist ${bookingData?.employee?.name}`}
          subtitle={bookingData?.specialRequest}
        />
        <Button
          variant="solid"
          status="secondary"
          theme={{ root: clsx('w-full md:w-[150px] md:ml-[36px]', styles.editBookingBtn) }}
          onClick={() => {
            return setActiveStep(Tabs.STEP1)
          }}>
          Edit booking
        </Button>
      </div>
      <div className="text-left mb-8 md:mb-10 w-full">
        <Typography
          tag="p"
          variant="body"
          theme={{
            root: 'mb-1',
          }}>
          Your phone number
        </Typography>
        <div className="mb-5 md:mb-4 relative">
          <Input
            disabled={!isEdit}
            placeholder="Add your phone"
            defaultValue={customer?.phone}
            theme={{ root: styles.phoneInput }}
            onBlur={handleInput}
            onChange={validateInput}
          />
          {!confirms?.isValidPhone && typeof confirms?.isValidPhone === 'boolean' && (
            <Typography tag="p" variant="caption" theme={{ root: clsx(styles.error, 'my-2') }}>
              Phone is not valid.
            </Typography>
          )}
          <Button
            status="primary"
            variant="link"
            onClick={() => {
              return setIsEdit(true)
            }}
            theme={{ root: clsx('absolute top-[15px] right-3', styles.editBtn) }}>
            <Typography tag="p" variant="caption" theme={{ root: styles.editBtnText }}>
              Edit
            </Typography>
          </Button>
        </div>
        <Checkbox
          label="I confirm my details are correct"
          theme={{ root: clsx('font-[350] mb-4', styles.checkbox) }}
          idSuffix="confirm"
          checked={confirms.confirm}
          onChange={(isChecked: boolean) => {
            return handleConfirm(isChecked)
          }}
        />
        <Checkbox
          label="I acknowledge and accept the booking terms & conditions"
          theme={{ root: clsx('font-[350]', styles.checkbox) }}
          idSuffix="terms_and_conditions"
          checked={confirms.terms_and_conditions}
          onChange={(isChecked: boolean) => {
            return handletermsConditions(isChecked)
          }}
        />
      </div>
      <Button
        variant="solid"
        status="primary"
        theme={{ root: 'w-full max-w-[350px] mx-auto' }}
        onClick={() => {
          return handleConfirmBooking()
        }}
        disabled={
          !Object.values(confirms).every((value) => {
            return !!value === true
          })
        }>
        Confirm booking
      </Button>
    </div>
  )
}
