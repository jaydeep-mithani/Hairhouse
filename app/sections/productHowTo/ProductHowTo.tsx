import { Typography } from '@overdose/components'
import { IconVideoPlayTransparent } from '~/components'
import { SwiperSlide, Swiper } from 'swiper/react'

import { Asset } from './Asset'
import styles from './ProductHowTo.module.css'
import { ProductHowToProps } from './ProductHowTo.types'

import 'swiper/css'

export const ProductHowTo: React.FC<ProductHowToProps> = ({ ...rest }) => {
  const { howToAsset1, howToAsset2, headline, content } = rest

  return (
    <div className={styles.root}>
      <div className={styles.swiperContainer}>
        <Swiper
          updateOnWindowResize
          breakpoints={{
            320: {
              spaceBetween: 16,
              slidesPerView: 1.1,
            },
            768: {
              spaceBetween: 16,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 48,
              slidesPerView: 2,
            },
          }}
          className={styles.carousel_container}>
          <SwiperSlide style={{ marginTop: '2rem' }}>
            <div style={{ marginTop: '2rem' }} />
            <Asset asset={howToAsset1} maxWidth="400px" playIcon={<IconVideoPlayTransparent width={75} />} />
          </SwiperSlide>
          <SwiperSlide>
            <Asset asset={howToAsset2} maxWidth="400px" playIcon={<IconVideoPlayTransparent width={75} />} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer} style={{ '--highlightColour': '#DFB7B7' }}>
          {headline?.html && (
            <Typography
              tag="p"
              variant="displayLarge"
              dangerouslySetInnerHTML={{ __html: headline?.html }}
              theme={{
                root: styles.titleText,
              }}
            />
          )}
        </div>
        <div className={styles.textContainerContent}>
          {content?.html && (
            <Typography
              tag="p"
              variant="body"
              dangerouslySetInnerHTML={{ __html: content?.html }}
              theme={{
                root: styles.descriptionText,
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
