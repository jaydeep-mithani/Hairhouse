import { Typography, Image } from '@overdose/components'
import { Carousel } from '~/components/carousel'
import React from 'react'

import styles from './ContentCards.module.css'
import { ContentCardsProps } from './ContentCards.types'

export const ContentCards: React.FC<ContentCardsProps> = ({ headingText: title, cards }) => {
  cards = cards ?? []

  return (
    <div className={styles.root}>
      {title && (
        <Typography tag="h3" theme={{ root: styles.title }}>
          {title}
        </Typography>
      )}
      {!!cards?.length && (
        <div className={styles.cards_wrapper}>
          {cards.map((card, index) => {
            if (card?.image && card?.heading)
              return (
                <div className={styles.card} key={index}>
                  <div className={styles.card_img}>
                    {card?.image && <Image src={card?.image?.url ?? ''} alt={card?.image?.altText ?? 'card image'} />}
                  </div>
                  <div className={styles.card_content}>
                    {card?.heading && (
                      <Typography tag="h3" variant="subheading" weight="bold">
                        {card?.heading}
                      </Typography>
                    )}
                    {card?.text && <div dangerouslySetInnerHTML={{ __html: card?.text?.html }} />}
                  </div>
                </div>
              )

            return null
          })}
        </div>
      )}
      {/* for mobile view */}
      {!!cards?.length && (
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
              1024: {
                slidesPerView: 2.48,
                spaceBetween: 32,
                scrollbar: { enabled: false },
              } as CarouselOptions,
              2560: {
                slidesPerView: 3.5,
                spaceBetween: 50,
                scrollbar: { enabled: false },
              } as CarouselOptions,
            },
          }}
          theme={{ showScrollbar: styles.showScrollbar }}>
          {cards
            ?.filter((card) => {
              return !!card?.image
            })
            ?.map((card, index: number) => {
              return (
                <div className={styles.card} key={index}>
                  {card.image && (
                    <div className={styles.card_img}>
                      <Image src={card.image?.url} alt={card?.image?.altText ?? 'card image'} />
                    </div>
                  )}
                  <div className={styles.card_content}>
                    {card?.heading && (
                      <Typography tag="h3" variant="subheading" weight="bold">
                        {card?.heading}
                      </Typography>
                    )}
                    {card?.text && <Typography dangerouslySetInnerHTML={{ __html: card?.text?.html }} />}
                  </div>
                </div>
              )
            })}
        </Carousel>
      )}
    </div>
  )
}
