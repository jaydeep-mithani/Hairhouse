import { Typography, Button } from '@overdose/components'
import clsx from 'clsx'

import { mock } from './AccountLoyaltyBlock.mock'
import styles from './AccountLoyaltyBlock.module.css'
import { AccountLoyaltyBlockProps } from './AccountLoyaltyBlock.types'

const STATUS_GOLD = 'gold'
const STATUS_PLATINUM = 'platinum'

export const AccountLoyaltyBlock = ({ data = mock.data }: AccountLoyaltyBlockProps) => {
  if (!data) {
    return null
  }
  const { points, pointsLeftToGoal, amountToSpend, dateToSpend } = data
  const status = points > 1499 ? STATUS_PLATINUM : STATUS_GOLD
  const loyaltyLineWidth = '60' // calculate based on incoming points as a percentage
  return (
    <div className="mt-4 mb-5">
      <div className={styles.loyaltyTop}>
        <div className={styles.loyaltyTopTitle}>
          <Typography tag="p" variant="subheading" weight="bold" theme={{ root: styles.subheadingTop }}>
            Your Style Society level is
          </Typography>
          {status && (
            <div
              className={clsx(styles.loyaltyStatus, {
                [styles.loyaltyStatusGold]: status === STATUS_GOLD,
                [styles.loyaltyStatusPlatinum]: status === STATUS_PLATINUM,
              })}>
              <Typography tag="p" variant="label">
                {status}
              </Typography>
            </div>
          )}
        </div>
        <div
          className={clsx(styles.loyaltyTopMessage, {
            [styles.hidden]: status === STATUS_PLATINUM,
          })}>
          <Typography tag="p" variant="subheading" weight="bold" theme={{ root: styles.subheadingTop }}>
            {`Spend $${amountToSpend} by ${dateToSpend} for`}
          </Typography>
          <Button variant="link" to="/account/style-status" theme={{ root: styles.loyaltyBtn }}>
            <Typography tag="p" variant="subheading" weight="bold" theme={{ root: styles.subheadingTop }}>
              Platinum Status
            </Typography>
          </Button>
        </div>
      </div>
      <div
        className={clsx(styles.loyaltyBottom, {
          [styles.loyaltyStatusGold]: status === STATUS_GOLD,
          [styles.loyaltyStatusPlatinum]: status === STATUS_PLATINUM,
        })}>
        <div className={styles.statusBar}>
          <div
            className={clsx(styles.statusBarItem, {
              'max-w-[288px] mr-[26px]': !points,
              'mr-9 md:mr-10': points,
            })}>
            <Typography tag="p" variant="subheading" theme={{ root: styles.subheadingLarge }}>
              {points ? 'Your current  balance' : 'Get 2 points for every dollar spent on all products and services'}
            </Typography>
            <Typography tag="p" variant="displayLarge">
              {points ? `${points} points` : ''}
            </Typography>
          </div>
          <div className={styles.statusBarItem}>
            <Typography tag="p" variant="subheading" theme={{ root: styles.subheadingLarge }}>
              {points ? 'Next voucher in' : 'Get a $10 voucher when you get to'}
            </Typography>
            <Typography tag="p" variant="displayLarge">
              {points ? `${pointsLeftToGoal} points` : '1000 points'}
            </Typography>
          </div>
        </div>
        <div className={styles.loyaltyLine}>
          <div
            className={clsx(styles.loyaltyLineValue, {
              'w-0': !points,
              [`width='${loyaltyLineWidth}%'`]: points,
            })}
          />
        </div>
      </div>
    </div>
  )
}
