import { Typography, Button } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { IconArrowLeft } from '~/components'
import { copyTextToClipboard } from '~/lib/utils'
import clsx from 'clsx'
import { QRCodeSVG } from 'qrcode.react'
import { useRef } from 'react'

import { mock } from './AccountReward.mock'
import styles from './AccountReward.module.css'
import { AccountRewardProps } from './AccountReward.types'

export const AccountReward = ({ rewardCard = mock.rewardCard }: AccountRewardProps) => {
  if (!rewardCard) {
    return null
  }
  const { id, subTitle, backgroundColor, expireData, background, link, couponCard } = rewardCard

  const handleCopyCode = () => {
    couponCard && copyTextToClipboard(couponCard)
  }

  return (
    <div className="mt-8 lg:mt-0">
      <Button
        variant="solid"
        status="link"
        href="/account"
        theme={{ root: clsx('flex gap-x-2 items-center mb-5 justify-start', styles.buttonLink) }}>
        <IconArrowLeft />
        <Typography variant="caption" tag="p" theme={{ root: clsx(styles.greyText, styles.thinText) }}>
          Back
        </Typography>
      </Button>
      <Typography tag="p" variant="displayLarge" theme={{ root: 'mb-1' }}>
        Redeem rewards
      </Typography>
      <Typography
        variant="bodyLarge"
        tag="p"
        theme={{ root: clsx(styles.greyText, 'mb-8 md:mb-10 font-[350]', styles.description) }}>
        To redeem rewards, copy the coupon code and enter it when you get to the cart page.
      </Typography>
      <div
        className={clsx('w-[343px] h-[258px] mb-5 flex flex-col justify-end relative z-20 p-3', styles.rewardCard)}
        style={{ backgroundColor: `${backgroundColor?.hex}` }}>
        {!backgroundColor?.hex && (
          <div className={clsx('absolute top-0 left-0 h-[258px] w-full aspect-square z-10', styles.background)}>
            <Image data={{ url: background?.image.url, width: 200, height: 200, altText: subTitle + id }} />
          </div>
        )}
        {!backgroundColor?.hex && <div className={styles.rewardsGragient} />}
        <div className="relative z-20">
          {subTitle && (
            <Typography variant="body" tag="p" weight="bold" theme={{ root: 'mb-2' }}>
              {subTitle}
            </Typography>
          )}
          {link?.linkText && (
            <Typography variant="displayMedium" tag="p" theme={{ root: clsx(styles.rewardLinkTitle, 'mb-[5px]') }}>
              {link.linkText}
            </Typography>
          )}
          <div className={styles.border} />
          {expireData && (
            <Typography
              tag="p"
              variant="caption"
              theme={{
                root: styles.thinText,
              }}>
              {expireData}
            </Typography>
          )}
        </div>
      </div>
      {couponCard && (
        <div className="flex gap-4 items-center pb-5 ">
          <QRCodeSVG value={couponCard} size={94} className={styles.codeField} />
          <div>
            <Typography tag="p" variant="body" theme={{ root: clsx('mb-1', styles.thinText) }}>
              Coupon code
            </Typography>
            <Typography tag="p" variant="displayMedium" theme={{ root: clsx('whitespace-nowrap', styles.coupon) }}>
              {couponCard}
            </Typography>
          </div>
        </div>
      )}
      <div className="flex flex-col items-start">
        <Button variant="solid" status="primary" theme={{ root: 'w-[343px] mb-3' }} onClick={handleCopyCode}>
          Copy Code
        </Button>
        <Button variant="solid" status="secondary" theme={{ root: 'w-[343px] mb-5' }}>
          Auto Apply
        </Button>
        <Button variant="link" theme={{ root: styles.couponLink }} to="/account">
          <Typography
            tag="p"
            variant="caption"
            theme={{ root: clsx(styles.thinText, styles.couponLinkText, 'underline-offset-2') }}>
            View terms of this offer
          </Typography>
        </Button>
      </div>
    </div>
  )
}
