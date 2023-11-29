import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { Carousel } from '~/components'
import { CustomerSignupProps } from '~/sections/customerSignup/CustomerSignup.types'
import clsx from 'clsx'

import styles from './styles/CustomerRegisterFeatures.module.css'

export const CustomerRegisterFeatures = ({ data }: CustomerSignupProps) => {
  if (!data?.featuresSlider?.length) {
    return null
  }

  const { carouselTitle, carouselSubtitle, backgroundColorRight, featuresSlider } = data

  return (
    <div className={styles.rightSideContainer}>
      <div className={styles.rightSide} style={{ backgroundColor: backgroundColorRight?.hex }}>
        {(carouselTitle || carouselSubtitle) && (
          <div className={styles.heading}>
            {carouselTitle && (
              <Typography
                tag="p"
                variant="displayExtraLarge"
                dangerouslySetInnerHTML={{ __html: carouselTitle }}
                theme={{
                  root: styles.titleRight,
                }}
              />
            )}
            {carouselSubtitle && (
              <Typography
                tag="p"
                variant="button"
                dangerouslySetInnerHTML={{ __html: carouselSubtitle }}
                theme={{
                  root: styles.subheadingRight,
                }}
              />
            )}
          </div>
        )}
        <div className={clsx(styles.carouselWrapper, styles.featureCarouselWrapper)}>
          <Carousel
            showArrows={false}
            className={styles.featureCarousel}
            options={{
              keyboard: true,
              slidesPerView: 1,
              direction: 'vertical',
              pagination: {
                clickable: true,
              },
              mousewheel: true,
            }}>
            {featuresSlider.map((feature, index) => {
              return (
                <div className={styles.featureBlock} key={`fikey${index + 1}`}>
                  {index === 0 && (
                    <div className={styles.heading}>
                      {carouselTitle && (
                        <Typography
                          tag="p"
                          variant="displayExtraLarge"
                          dangerouslySetInnerHTML={{ __html: carouselTitle }}
                          theme={{
                            root: styles.titleRight,
                          }}
                        />
                      )}
                      {carouselSubtitle && (
                        <Typography
                          tag="p"
                          variant="button"
                          dangerouslySetInnerHTML={{ __html: carouselSubtitle }}
                          theme={{
                            root: styles.subheadingRight,
                          }}
                        />
                      )}
                    </div>
                  )}
                  <div className={styles.block}>
                    <div className={styles.blockContent}>
                      <Typography
                        tag="p"
                        variant="displayExtraLarge"
                        dangerouslySetInnerHTML={{ __html: `0${index + 1}` }}
                        theme={{
                          root: styles.titleBlock,
                        }}
                      />
                      {feature?.blockTitle && (
                        <Typography
                          tag="p"
                          variant="displayLarge"
                          dangerouslySetInnerHTML={{ __html: feature.blockTitle }}
                          theme={{
                            root: styles.subtitleBlock,
                          }}
                        />
                      )}
                      {feature?.blockSubtitle && (
                        <Typography
                          tag="p"
                          variant="button"
                          dangerouslySetInnerHTML={{ __html: feature.blockSubtitle }}
                          theme={{
                            root: styles.descriptionBlock,
                          }}
                        />
                      )}
                    </div>
                  </div>
                  {feature?.blockImage?.url && (
                    <div className={styles.imageContainer}>
                      <Image
                        alt={feature.blockImage?.altText}
                        data={feature.blockImage}
                        width={feature.blockImage?.width?.toString()}
                        height={feature.blockImage?.height?.toString()}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
