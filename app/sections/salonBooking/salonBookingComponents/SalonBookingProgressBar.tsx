import { Typography, Button } from '@overdose/components'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import styles from '../SalonBooking.module.css'
import { SalonBookingProgressBarProps } from '../SalonBooking.types'

const MAX_PROGRESS = 100

export function SalonBookingProgressBar({ currentStep, totalSteps, className }: SalonBookingProgressBarProps) {
  const [progress, setProgress] = useState<undefined | number>()

  useEffect(() => {
    if (totalSteps > currentStep) {
      setProgress(Math.round((currentStep / totalSteps) * MAX_PROGRESS))
    } else {
      setProgress(MAX_PROGRESS)
    }
  }, [currentStep, totalSteps])

  return (
    <div className={clsx(styles.progressBarWrapper, className)}>
      <div className={styles.progressBarTextWrapper}>
        <Typography tag="p" variant="subheading" theme={{ root: styles.progressBarText }}>
          Step {currentStep} of {totalSteps}
        </Typography>
        <Button
          variant="link"
          status="primary"
          theme={{
            root: styles.progressBarButton,
          }}>
          Booking Summary
        </Button>
      </div>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBarFiller} style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
