import { Button, Link, Image } from '@overdose/components'
import { useNavigate } from '@remix-run/react'
import { IconClose, ChevronLeft } from '~/components'
import clsx from 'clsx'

import styles from '../SalonBooking.module.css'
import { SalonHeaderProps } from '../SalonBooking.types'

export const SalonHeader: React.FC<SalonHeaderProps> = ({ logo, activeStep, setActiveStep }) => {
  const navigate = useNavigate()

  const chanelHandle = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you want to leave this site?')) {
      navigate(`/`)
    }
  }

  const backHandle = () => {
    activeStep ? setActiveStep(activeStep - 1) : chanelHandle()
  }

  return (
    <div className={styles.modalHeader}>
      <div className={styles.backBtnBox}>
        <Button
          variant="link"
          status="primary"
          onClick={() => {
            return backHandle()
          }}
          icon={<ChevronLeft />}
          theme={{
            root: clsx(styles.modalHeaderButton, 'gap-[6px] items-center'),
          }}>
          Back
        </Button>
      </div>
      {logo && (
        <Link to="/">
          <Image src={logo.url} alt="HairHouse" width={214} height={36} sizes="(max-width: 768px) 32px, 196px" />
        </Link>
      )}
      <div className={styles.chanelBtnBox}>
        <Button
          variant="link"
          status="primary"
          icon={<IconClose />}
          onClick={() => {
            return chanelHandle()
          }}
          theme={{
            root: clsx(styles.modalHeaderButton, styles.modalHeaderCancelButton, 'gap-[6px] items-center'),
          }}>
          Cancel booking
        </Button>
      </div>
    </div>
  )
}
