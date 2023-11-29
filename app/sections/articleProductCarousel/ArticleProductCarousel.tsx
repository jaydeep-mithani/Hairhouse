import { Carousel, ProductCard } from '~/components'

import styles from './ArticleProductCarousel.module.css'
import { ArticleProductCarouselProps } from './ArticleProductCarousel.types'

export const ArticleProductCarousel = ({ data }: ArticleProductCarouselProps) => {
  const { headline, products } = data

  if (!products?.length) {
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.carouselWrapper}>
        <Carousel
          className={styles.relatedProductCarousel}
          carouselTitle={headline}
          showScrollbar
          showArrows
          options={{
            keyboard: true,
            breakpoints: {
              320: {
                slidesPerView: 1.31,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4.6,
                spaceBetween: 40,
              },
              2560: {
                slidesPerView: 4.5,
                spaceBetween: 56,
              },
            },
          }}>
          {products.map((productItem) => {
            return <ProductCard product={productItem?.product} key={productItem?.product?.id} quickAdd />
          })}
        </Carousel>
      </div>
    </div>
  )
}
