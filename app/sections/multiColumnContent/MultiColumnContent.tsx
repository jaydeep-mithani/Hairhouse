import { Button, Typography } from '@overdose/components'
import { Carousel } from '~/components'
import React from 'react'

import ImageContentCard from './components/ImageContentCard'
import styles from './MultiColumnContent.module.css'
import { MultiColumnContentProps } from './MultiColumnContent.types'
import 'swiper/css'

export const MultiColumnContent: React.FC<MultiColumnContentProps> = ({ heading, tiles, cta }) => {
  return (
    <div className={styles.root}>
      <div className="relative w-screen md:max-w-fit">
        {heading && (
          <Typography tag="h3" variant="displayExtraLarge" align="center" theme={{ root: styles.vertical_text }}>
            {heading}
          </Typography>
        )}

        {/* desktop view */}
        <div className={styles.card_wrapper}>
          {tiles?.length > 0 &&
            tiles?.map((card) => {
              return <ImageContentCard {...card} key={card.heading} />
            })}
        </div>

        {/* for mobile view */}
        <Carousel
          className={styles.carousel_container}
          showScrollbar
          showArrows
          options={{
            keyboard: true,
            breakpoints: {
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              } as CarouselOptions,
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              } as CarouselOptions,
              1024: {
                slidesPerView: 2.48,
                spaceBetween: 32,
                scrollbar: { enabled: false },
              } as CarouselOptions,
            },
          }}>
          {tiles?.length > 0 &&
            tiles?.map((card) => {
              return <ImageContentCard {...card} key={card.heading} />
            })}
        </Carousel>
      </div>
      {cta && (
        <Button variant="solid" href={cta.url} theme={{ root: styles.button }}>
          {cta?.buttonText}
        </Button>
      )}
    </div>
  )
}
