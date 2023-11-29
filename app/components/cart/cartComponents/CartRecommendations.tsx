import { useFetcher } from '@remix-run/react'
import { Carousel, ProductCard } from '~/components'
import { useEffect } from 'react'

import styles from '../Cart.module.css'

export const CartRecommendations = () => {
  const fetcher = useFetcher()

  useEffect(() => {
    fetcher.submit({ pageType: 'CART' }, { method: 'post', action: '/api/unbxd-recs' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const products = fetcher?.data?.tabs[0]?.getCollectionByHandle?.collection

  return (
    !!products?.length && (
      <Carousel
        className={styles.carousel}
        carouselTitle={fetcher?.data?.titlle}
        placement="cartDrawer"
        showArrows
        options={{
          keyboard: true,
          slidesPerView: 1,
        }}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} quickAdd placement="miniCart" />
        ))}
      </Carousel>
    )
  )
}
