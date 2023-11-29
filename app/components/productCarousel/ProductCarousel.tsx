import { Carousel, ProductCard } from '~/components'
import clsx from 'clsx'
import { ProductCarouselFragment } from 'graphql/HygraphModel.generated'

import styles from './styles/ProductCarousel.module.css'
import { TabbedProductCarousel } from './TabbedProductCarousel'

export const ProductCarousel = ({ data, className }: ProductCarouselFragment) => {
  const { titlle, tabs, highlightColour } = data

  const collectionsWithProducts = tabs.filter((tab) => {
    return tab?.getCollectionByHandle?.collection && tab?.getCollectionByHandle?.collection?.length
  })

  if (tabs?.length > 1 && collectionsWithProducts.length > 1) {
    return <TabbedProductCarousel data={data} />
  }

  const products = collectionsWithProducts[0]?.getCollectionByHandle?.collection
  if (!products || !products.length) {
    return null
  }

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.carouselWrapper} style={{ '--highlightColour': highlightColour?.hex }}>
        <Carousel
          className={styles.customScrollbar}
          carouselTitle={titlle}
          showScrollbar
          showArrows
          options={{
            keyboard: true,
            breakpoints: {
              320: {
                slidesPerView: 1.31,
                spaceBetween: 24,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              } as CarouselOptions,
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
                slidesOffsetBefore: 32,
                slidesOffsetAfter: 32,
              } as CarouselOptions,
              1024: {
                slidesPerView: 4.6,
                spaceBetween: 40,
                slidesOffsetBefore: 48,
                slidesOffsetAfter: 48,
              } as CarouselOptions,
              2560: {
                slidesPerView: 4.5,
                spaceBetween: 56,
              } as CarouselOptions,
            },
          }}>
          {products.map((product, index) => {
            return <ProductCard product={product} key={`${index}${product.id}`} quickAdd />
          })}
        </Carousel>
      </div>
    </div>
  )
}
