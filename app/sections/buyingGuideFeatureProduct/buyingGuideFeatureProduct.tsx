import { Typography } from '@overdose/components'
import { Carousel, ProductCard } from '~/components'

import styles from './buyingGuideFeatureProduct.module.css'
import { BuyingGuidesFeaturedProductsProps } from './BuyingGuideFeatureProduct.types'

export const BuyingGuideFeatureProductBlockSection: React.FC<BuyingGuidesFeaturedProductsProps> = (props) => {
  if (!props.data) return null

  const { title, subtitle, products, rating, totalRating } = props.data
  return (
    <div className={styles.root}>
      <div className={styles.sectionTitle}>
        {title && (
          <Typography weight="bold" tag="h1">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="subheading" tag="h3" weight="bold">
            {subtitle}
          </Typography>
        )}
      </div>
      {products && (
        <div className={styles.productsContainer}>
          {products &&
            products.collection?.length > 0 &&
            products.collection?.map((product) => (
              <ProductCard product={product} key={product.id} quickAdd wishAdd isRatting productTag />
            ))}
        </div>
      )}
      <Carousel
        className={styles.carousel_container}
        showScrollbar
        options={{
          keyboard: true,
          breakpoints: {
            320: {
              slidesPerView: 1.32,
              spaceBetween: 20,
              slidesOffsetBefore: 16,
              slidesOffsetAfter: 16,
              showScrollbar: true,
            } as CarouselOptions,
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
              slidesOffsetBefore: 16,
              slidesOffsetAfter: 16,
              showScrollbar: true,
            } as CarouselOptions,
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              scrollbar: false,
            } as CarouselOptions,
            2560: {
              slidesPerView: 3,
              spaceBetween: 50,
              scrollbar: false,
            } as CarouselOptions,
          },
        }}>
        {products &&
          products.collection?.length > 0 &&
          products.collection?.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              quickAdd
              wishAdd
              isRatting={rating}
              totalRating={totalRating}
              productTag
            />
          ))}
      </Carousel>
    </div>
  )
}
