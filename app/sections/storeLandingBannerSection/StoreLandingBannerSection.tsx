import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { SustainableSalonIcon } from '~/components'

import styles from './StoreLandingBannerSection.module.css'
import { StoreLandingBannerSectionProps } from './StoreLandingBannerSection.types'

export const StoreLandingBannerSection: React.FC<StoreLandingBannerSectionProps> = (props) => {
  if (!props) {
    return null
  }

  const { title, subTitle, isSustainable, hasClickAndCollect, hasDelivery, availableSalon, availablePiercing, banner } =
    props

  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        {!!banner?.url && (
          <div className={styles.bannerImages}>
            <div className={styles.bannerImageWrapper}>
              <Image className={styles.bannerImageWrapper} alt={banner?.fileName} data={banner} />
            </div>
          </div>
        )}
        <div className={styles.bannerContentWrapper}>
          {(title || subTitle) && (
            <div className={styles.bannerTextContent}>
              {isSustainable && (
                <div className={styles.preTitleImageWrapper}>
                  <SustainableSalonIcon />
                </div>
              )}
              {(title || subTitle) && (
                <div className={styles.titleAndSubtitle}>
                  {title && <Typography tag="h1">{title}</Typography>}
                  {subTitle && <Typography tag="p">{subTitle}</Typography>}
                </div>
              )}
              {(availableSalon || availablePiercing) && (
                <div className={styles.textBlocks}>
                  {availableSalon && <span>Salon</span>}
                  {availablePiercing && <span>Piercing</span>}
                </div>
              )}
              {(hasClickAndCollect || hasDelivery) && (
                <div className={styles.features}>
                  {hasClickAndCollect && (
                    <p>
                      <Image
                        data={{
                          url: 'https://media.graphassets.com/3KUfvOtxRvK3EsavDkbL',
                        }}
                        width={368}
                        height={40}
                        alt="click and collect"
                      />
                    </p>
                  )}
                  {hasDelivery && (
                    <p>
                      <strong>Same Day Delivery*</strong>
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
