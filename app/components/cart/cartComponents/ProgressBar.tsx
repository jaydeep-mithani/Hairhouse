import { Typography } from '@overdose/components'
import clsx from 'clsx'
import { useEffect, useState, useCallback } from 'react'

import styles from '../Cart.module.css'
import { ProgressBarProps } from '../Cart.types'

export function ProgressBar({ cart, layout }: ProgressBarProps) {
  const FREE_SHIPPING_FROM = 150

  const [completed, setCompleted] = useState()
  const totalAmount = cart?.cost?.totalAmount?.amount

  const calculateShipping = useCallback(() => {
    if (FREE_SHIPPING_FROM <= totalAmount) {
      return 'Free shipping!'
    }
    const awayFromFreeShipping = (FREE_SHIPPING_FROM - totalAmount).toFixed(2)
    return `You are $${awayFromFreeShipping} away from free shipping!`
  }, [totalAmount])

  useEffect(() => {
    if (FREE_SHIPPING_FROM > totalAmount) {
      setCompleted(Math.round((totalAmount / FREE_SHIPPING_FROM) * 100))
    } else {
      setCompleted(100)
    }
  }, [totalAmount])

  return (
    <div className={clsx(styles.progressBarWrapper, { [styles.progressBarWrapperDrawer]: layout === 'drawer' })}>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBarFiller} style={{ '--progressBarFillerWidth': `${completed}%` }} />
      </div>

      <Typography
        tag="p"
        variant="body"
        theme={{ root: clsx(styles.progressBarText, { [styles.progressBarTextCartPage]: layout === 'page' }) }}>
        {calculateShipping()}
      </Typography>
    </div>
  )
}
