import { Typography } from '@overdose/components'
import clsx from 'clsx'
import { useState } from 'react'

import styles from '../SalonBooking.module.css'
import { TimePeriod, TimeCardProps, DayPeriod } from '../SalonBooking.types'
import { TimeBlock } from './TimeBlock'

export const TimeCard = ({ availableAppointments, setSelectedAppoinment }: TimeCardProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('morning')

  const handleButtonClick = (period: TimePeriod) => {
    setSelectedPeriod(period)
  }

  return (
    <div className="w-full">
      <div className={clsx('mb-[10px] flex gap-3', styles.timeTitleBlock)}>
        <button
          type="button"
          onClick={() => {
            return handleButtonClick(DayPeriod.MORNING)
          }}
          className={clsx(styles.btnTimesOfDay, {
            [styles.btnTimesOfDayClicked]: DayPeriod.MORNING === selectedPeriod,
          })}>
          <Typography tag="span" variant="body">
            Morning
          </Typography>
        </button>
        <button
          type="button"
          onClick={() => {
            return handleButtonClick(DayPeriod.AFTERNOON)
          }}
          className={clsx(styles.btnTimesOfDay, {
            [styles.btnTimesOfDayClicked]: DayPeriod.AFTERNOON === selectedPeriod,
          })}>
          <Typography tag="span" variant="body">
            Afternoon
          </Typography>
        </button>
        <button
          type="button"
          onClick={() => {
            return handleButtonClick(DayPeriod.EVENING)
          }}
          className={clsx(styles.btnTimesOfDay, {
            [styles.btnTimesOfDayClicked]: DayPeriod.EVENING === selectedPeriod,
          })}>
          <Typography tag="span" variant="body">
            Evening
          </Typography>
        </button>
      </div>
      {selectedPeriod === DayPeriod.MORNING && (
        <TimeBlock
          startTime="09:00"
          endTime="11:45"
          interval={15}
          availableAppointments={availableAppointments}
          setSelectedAppoinment={setSelectedAppoinment}
        />
      )}
      {selectedPeriod === DayPeriod.AFTERNOON && (
        <TimeBlock
          startTime="12:00"
          endTime="14:45"
          interval={15}
          availableAppointments={availableAppointments}
          setSelectedAppoinment={setSelectedAppoinment}
        />
      )}
      {selectedPeriod === DayPeriod.EVENING && (
        <TimeBlock
          startTime="15:00"
          endTime="18:30"
          interval={15}
          availableAppointments={availableAppointments}
          setSelectedAppoinment={setSelectedAppoinment}
        />
      )}
    </div>
  )
}
