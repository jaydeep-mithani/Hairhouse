import { Typography, Button } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { IconRewardsTag, IconArrowInCircle } from '~/components'
import clsx from 'clsx'

import { mock } from './AccountRewards.mock'
import styles from './AccountRewards.module.css'
import { AccountRewardsProps } from './AccountRewards.types'

export const AccountRewards = ({ rewardsCards = mock.rewardsCards }: AccountRewardsProps) => {
  if (!rewardsCards) {
    return null
  }

  return (
    <div className="mb-[60px] md:mb-10">
      <Typography tag="p" variant="pageheading">
        Your rewards
      </Typography>
      <div className={styles.rewardsCards}>
        {rewardsCards &&
          rewardsCards.map((card) => {
            const { id, subTitle, expireData, background, backgroundColor, link } = card
            return (
              <div key={id} className="md:max-w-[200px] w-full">
                <div className={styles.rewardsCard} style={{ backgroundColor: `${backgroundColor?.hex}` }}>
                  {!backgroundColor?.hex && (
                    <div className={styles.rewardsBackgroundImg}>
                      <Image data={{ url: background?.image.url, width: 200, height: 200, altText: subTitle + id }} />
                    </div>
                  )}
                  {!backgroundColor?.hex && <div className={styles.rewardsGragient} />}
                  <div className={styles.rewardsTag}>
                    <IconRewardsTag />
                  </div>
                  <div className={styles.rewardsCardContent}>
                    {subTitle && (
                      <Typography variant="body" tag="p" weight="bold">
                        {subTitle}
                      </Typography>
                    )}
                    {link?.url && (
                      <div className={styles.rewardsLinkWrap}>
                        <Button
                          variant="link"
                          href={`/account/rewards/${id}`}
                          theme={{ root: clsx(styles.rewardsLink, 'justify-between') }}>
                          <Typography variant="displayMedium" tag="p" theme={{ root: styles.rewardsLinkTitle }}>
                            {link.linkText}
                          </Typography>
                          <IconArrowInCircle />
                        </Button>
                      </div>
                    )}
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
              </div>
            )
          })}
      </div>
    </div>
  )
}
