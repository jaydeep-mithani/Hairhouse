import { Typography } from '@overdose/components'
import clsx from 'clsx'

import { mock } from './AccountMembership.mock'
import styles from './AccountMembership.module.css'
import { AccountMembershipProps } from './AccountMembership.types'

const BENEFITS_GOLD = [
  'Get a $10 welcome voucher',
  'Get a $10 birthday voucher',
  'Get a $10 voucher for every 1000 points earned',
  'Enjoy exlusive membership deals',
]

const BENEFITS_PLATINUM = [
  'Get a $10 welcome voucher',
  'Receive free sample box on your birthday and a $20 voucher',
  'Complimentary blow Dry',
  'Enjoy exlusive membership deals',
]

export const AccountMembership = ({ data = mock.data }: AccountMembershipProps) => {
  const status = data?.points && data.points > 1500 ? 'platinum' : 'gold'
  return (
    <div className="mb-[60px] md:mb-10">
      <Typography tag="p" variant="pageheading" theme={{ root: 'hidden md:block mb-4' }}>
        Membership tiers
      </Typography>
      <div className="mb-10 flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-8">
        <div>
          <div className={clsx('p-6', styles.goldCard)}>
            <div
              className={clsx('flex justify-between items-center mb-2', {
                'mb-3': status !== 'gold',
              })}>
              <Typography tag="p" variant="body" theme={{ root: styles.thinText }}>
                Level 1 - 0 to 1499 points
              </Typography>
              <div
                className={clsx('py-1.5 px-3', styles.tag, {
                  hidden: status !== 'gold',
                })}>
                <Typography tag="p" variant="label">
                  CURRENT
                </Typography>
              </div>
            </div>
            <Typography
              variant="displayMedium"
              tag="p"
              theme={{
                root: clsx('mb-2', styles.cardTitle, {
                  'md:mb-[11px]': status !== 'gold',
                }),
              }}>
              Gold
            </Typography>
            <Typography tag="p" variant="body" theme={{ root: styles.thinText }}>
              2 points for every dollar spent on all products and services
            </Typography>
          </div>
          <div className={clsx('px-5 md:px-6 border border-b-2 border-solid', styles.goldCardBorder)}>
            <ul>
              {BENEFITS_GOLD &&
                BENEFITS_GOLD.map((benefit, index) => {
                  return (
                    <li
                      key={index}
                      className={clsx(
                        'list-none py-[22px] md:py-0 md:h-[73px] flex gap-4 items-center lg:pr-[26px]',
                        styles.listBorder,
                      )}>
                      <Typography variant="displayMedium" tag="span" theme={{ root: styles.cardTitle }}>
                        0{index + 1}
                      </Typography>
                      <Typography
                        tag="span"
                        variant="subheading"
                        theme={{ root: clsx(styles.thinText, styles.listText) }}>
                        {benefit}
                      </Typography>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
        <div>
          <div className={clsx('p-6', styles.platinumCard)}>
            <div
              className={clsx('flex justify-between items-center mb-2', {
                'mb-3': status !== 'platinum',
              })}>
              <Typography tag="p" variant="body" theme={{ root: styles.thinText }}>
                Level 2 - 1500 + points
              </Typography>
              <div
                className={clsx('py-1.5 px-3', styles.tag, {
                  hidden: status !== 'platinum',
                })}>
                <Typography tag="p" variant="label">
                  CURRENT
                </Typography>
              </div>
            </div>
            <Typography
              variant="displayMedium"
              tag="p"
              theme={{
                root: clsx('mb-2', styles.cardTitle, {
                  'md:mb-[11px]': status !== 'platinum',
                }),
              }}>
              Platinum
            </Typography>
            <Typography tag="p" variant="body" theme={{ root: styles.thinText }}>
              2 points for every dollar spent on all products and services
            </Typography>
          </div>
          <div className={clsx('px-5 md:px-6 border border-b-2 border-solid', styles.platinumCardBorder)}>
            <ul>
              {BENEFITS_PLATINUM &&
                BENEFITS_PLATINUM.map((benefit, index) => {
                  return (
                    <li
                      key={index}
                      className={clsx(
                        'list-none py-[22px] md:py-0 md:h-[73px] flex gap-4 items-center lg:pr-[26px]',
                        styles.listBorder,
                      )}>
                      <Typography variant="displayMedium" tag="span" theme={{ root: styles.cardTitle }}>
                        0{index + 1}
                      </Typography>
                      <Typography
                        tag="span"
                        variant="subheading"
                        theme={{ root: clsx(styles.thinText, styles.listText) }}>
                        {benefit}
                      </Typography>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
