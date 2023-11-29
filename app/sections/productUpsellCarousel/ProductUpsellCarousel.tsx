import { Typography } from '@overdose/components'
import { Carousel, ProductCard } from '~/components'
import React from 'react'

import styles from './ProductUpsellCarousel.module.css'
import { ProductUpsellCarouselProps } from './ProductUpsellCarousel.types'

export const ProductUpsellCarousel: React.FC<ProductUpsellCarouselProps> = ({ products }) => {
  return (
    <div className="bg-white py-[3.75rem] md:py-[6.25rem]">
      <div className=" hidden md:flex md:flex-row md:items-stretch md:gap-8 md:max-w-[84rem] md:m-auto">
        <div className="flex flex-col items-center justify-center p-10 self-stretch border border-solid border-[#2D2D2D] max-w-[25.3125rem]">
          <div className="max-w-[325px] lg:min-w-[325px] flex flex-col gap-2">
            <Typography tag="h3" variant="displayLarge" align="center" theme={{ root: styles.title }}>
              Complete your haircare regimen
            </Typography>
            <Typography tag="p" variant="bodyLarge" align="center" theme={{ root: styles.subText }}>
              Take your results to the next level with the following products to complete your routine.
            </Typography>
          </div>
        </div>
        {/* products*/}
        {products?.length > 0 &&
          products?.map((product) => {
            return (
              <div className="max-w-[17.5625rem] lg:h-[28.25rem] flex" key={product.id}>
                <ProductCard
                  product={product}
                  quickAdd
                  isRatting={5}
                  totalRatting={299}
                  placement="productRecommendation"
                  className="lg:h-[24.4375rem]"
                />
              </div>
            )
          })}
      </div>

      {/* mobile view */}
      <Carousel
        className={`${styles.root} block  md:hidden`}
        showScrollbar
        showArrows
        options={{
          keyboard: true,
          breakpoints: {
            320: {
              slidesPerView: 1.5,
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
        <div className="flex flex-col items-center justify-center p-5 self-stretch border border-solid border-[#2D2D2D] max-w-sm">
          <Typography tag="h3" variant="displayLarge" align="center">
            Complete your haircare regimennn
          </Typography>
          <Typography tag="p" variant="body" align="center">
            Take your results to the next level with the following products to complete your routine.
          </Typography>
        </div>
        {products?.length > 0 &&
          products?.map((product) => {
            return (
              <div className="max-w-[17.5625rem] flex sm:max-w-[19rem]" key={product.id}>
                <ProductCard product={product} isRatting={5} totalRatting={299} quickAdd />
              </div>
            )
          })}
      </Carousel>
    </div>
  )
}
