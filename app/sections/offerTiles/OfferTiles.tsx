import { Button } from '@overdose/components'
import { Carousel } from '~/components'
import React from 'react'

import { ImageContentTile } from './components/ImageContentTile'
import styles from './OfferTiles.module.css'
import { OfferTilesProps } from './OfferTiles.types'

export const OfferTiles = ({ offerItems, cta }: OfferTilesProps) => {
  return (
    <div className={styles.root}>
      {/* desktop view */}
      <div className={styles.card_wrapper}>
        {!!offerItems?.length &&
          offerItems.map((card, index: number) => {
            return (
              <ImageContentTile
                heading={card.heading}
                description={card.description}
                buttonText={card.buttonText}
                url={card.url}
                image={card.image}
                topLeftBoxText={card.topLeftBoxText}
                key={index}
              />
            )
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
              slidesPerView: 1.32,
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
          },
        }}>
        {!!offerItems?.length &&
          offerItems.map((card, index: number) => {
            return (
              <ImageContentTile
                heading={card.heading}
                description={card.description}
                buttonText={card.buttonText}
                url={card.url}
                image={card.image}
                topLeftBoxText={card.topLeftBoxText}
                key={index}
              />
            )
          })}
      </Carousel>
      {cta && (
        <Button variant="outline" href={cta.url} theme={{ root: styles.button }}>
          {cta?.buttonText}
        </Button>
      )}
    </div>
  )
}
