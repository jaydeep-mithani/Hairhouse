import { Typography } from '@overdose/components'
import { TimeDisplayValuesType } from '~/hooks/useCountDown'
import React from 'react'

import styles from './AnnouncementBarSection.module.css'

const ShowCounter: React.FC<TimeDisplayValuesType> = ({ days, hours, minutes, seconds }) => {
  const timerValues = [
    {
      value: days,
      type: 'DAYS',
    },
    {
      value: hours,
      type: 'HOURS',
    },
    {
      value: minutes,
      type: 'MINS',
    },
    {
      value: seconds,
      type: 'SECS',
    },
  ]
  const DIGIT9 = 9
  return (
    <div className={`${styles.flex} ${styles.countdown_wrapper}`}>
      {timerValues.map((time) => {
        return (
          <div className={`${styles.flex} ${styles.wrapper}`} key={time?.type}>
            <div className={`${styles.flex} ${styles.countdown}`}>
              {time?.value !== undefined && time?.value !== null && (
                <Typography tag="h4" variant="caption" className={styles.time}>
                  {time.value > DIGIT9 ? time.value : `0${time.value}`}
                </Typography>
              )}
              <Typography tag="span" className={styles.time_type}>
                {time.type}
              </Typography>
            </div>
            <p>:</p>
          </div>
        )
      })}
    </div>
  )
}

export default ShowCounter
