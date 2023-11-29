import { Button, Typography } from '@overdose/components'
import clsx from 'clsx'
import { useState } from 'react'

import styles from '../SalonBooking.module.css'
import { TimeBlockProps, AvaliableAddointmentProps } from '../SalonBooking.types'
import { formatTime } from '../salonBookingUtils/utils'

const ENDTIME = 60000
const ENDTIME_BORDER = 2

export const TimeBlock = ({
  startTime,
  endTime,
  interval,
  availableAppointments,
  setSelectedAppoinment,
}: TimeBlockProps) => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)
  const timeSlots: JSX.Element[] = []
  const startTimeDate = new Date(`2000-01-01T${startTime}`)
  const endTimeDate = new Date(`2000-01-01T${endTime}`)

  while (startTimeDate <= endTimeDate) {
    const isAvailableTime = availableAppointments.some((appointment) => {
      const appointmentStartTime = new Date(`2000-01-01T${appointment.services[0].start_time}`)
      const appointmentEndTime = new Date(
        appointmentStartTime.getTime() + parseInt(appointment.duration.slice(ENDTIME_BORDER, -1)) * ENDTIME,
      )
      return startTimeDate >= appointmentStartTime && startTimeDate < appointmentEndTime
    })

    const handleButtonClick = (date: Date) => {
      return () => {
        const selectedAppointment = availableAppointments.find((appointment) => {
          return date.getTime() === new Date(`2000-01-01T${appointment.services[0].start_time}`).getTime()
        })
        setSelectedAppoinment(selectedAppointment as AvaliableAddointmentProps)
        setSelectedTime(date)
      }
    }

    timeSlots.push(
      <Button
        variant="ghost"
        status="secondary"
        key={startTimeDate.toTimeString()}
        theme={{
          root: clsx('w-full py-[10px]', styles.timeBlockBtn, {
            [styles.timeBlockBtnSelected]: selectedTime?.getTime() === startTimeDate.getTime(),
          }),
        }}
        disabled={!isAvailableTime}
        onClick={handleButtonClick(new Date(startTimeDate))}>
        <Typography tag="p" variant="body">
          {formatTime(startTimeDate)}
        </Typography>
      </Button>,
    )

    startTimeDate.setMinutes(startTimeDate.getMinutes() + interval)
  }

  return <div className={styles.timeBlock}>{timeSlots}</div>
}
