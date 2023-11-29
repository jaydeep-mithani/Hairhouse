import { Typography } from '@overdose/components'
import { Close } from '~/assets'
import { useCountdown } from '~/hooks/useCountDown'
import { useIsHydrated } from '~/hooks/useIsHydrated'
import { useState, useEffect } from 'react'

import styles from './AnnouncementBarSection.module.css'
import { AnnouncementBarSectionProps } from './AnnouncementBarSection.types'
import ShowCounter from './ShowCounter'

export const AnnouncementBarSection: React.FC<AnnouncementBarSectionProps> = ({
  color,
  countDownDate,
  description,
}) => {
  const [showPromoBanner, setShowPromoBanner] = useState(true)
  const [days, hours, minutes, seconds] = useCountdown(countDownDate || '')
  const isDatePassed = !!countDownDate && Date.now() > new Date(countDownDate).getTime()
  const LOCALSTORAGEKEY = 'show-banner'
  const IS_SSR = typeof window === 'undefined'

  // Used to avoid hydration issues in ShowCounter
  const isHydrated = useIsHydrated()

  // persist updated state
  useEffect(() => {
    function getWithExpiry(key: string) {
      if (IS_SSR) {
        return null
      }
      const itemStr = localStorage.getItem(key)
      // if the item doesn't exist, return null
      if (!itemStr) {
        return null
      }
      const item = JSON.parse(itemStr)
      const now = new Date()
      // compare the expiry time of the item with the current time
      if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key)
        return null
      }
      return item.value
    }
    const data = getWithExpiry(LOCALSTORAGEKEY)
    if (data !== null) {
      setShowPromoBanner(JSON.parse(data))
    }
  }, [IS_SSR])

  // set local storage
  useEffect(() => {
    // 7days = 7 * 24 * 60 * 60 * 1000
    const SEVENDAYSTIME = 604800000
    function setWithExpiry(key: string, value: string, timeTillExpiry: number) {
      if (IS_SSR) {
        return
      }
      const now = new Date()
      const item = {
        value,
        expiry: now.getTime() + timeTillExpiry,
      }
      localStorage.setItem(key, JSON.stringify(item))
    }
    setWithExpiry(LOCALSTORAGEKEY, JSON.stringify(showPromoBanner), SEVENDAYSTIME)
  }, [IS_SSR, showPromoBanner])

  return (
    <div
      className={`${styles.flex} ${styles.root}`}
      style={{ backgroundColor: `${color?.hex}`, display: showPromoBanner ? 'flex' : 'none' }}>
      <div className={`${styles.flex} ${styles.promo_wrapper}`}>
        {description?.html && (
          <Typography
            theme={{ root: `sm:[&>p>strong]:mr-2 ${styles.description}` }}
            variant="body"
            dangerouslySetInnerHTML={{
              __html: description.html,
            }}
          />
        )}
        {isHydrated && !isDatePassed && <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />}
      </div>
      <button
        type="button"
        onClick={() => {
          setShowPromoBanner(false)
        }}
        className={styles.icon_btn}>
        <Close width={20} height={20} />
      </button>
    </div>
  )
}
