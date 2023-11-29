import { Typography } from '@overdose/components'
import type { MediaImage, MoneyV2, Video } from '@shopify/hydrogen/storefront-api-types'
import { AddToWishList } from '~/components'
import { PromotionLabel } from '~/components/promotionLabel/PromotionLabel'
import { isDiscounted, isNewArrival } from '~/lib/utils'
import React, { useState } from 'react'
import { Navigation, Thumbs, Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import 'swiper/css/navigation'

import { ImageModal } from './components/ImageModal'
import styles from './ProductImageGallery.module.css'
import { ProductImageGalleryProps } from './ProductImageGallery.types'

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  label,
  price,
  compareAtPrice,
  media,
  children,
  publishedAt,
  promotionLabel,
  promotionLabelIcon,
  badgeType,
}) => {
  const [activeThumb, setActiveThumb] = useState<SwiperType>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentMedia, setCurrentMedia] = useState<MediaImage | Video>()
  let cardLabel
  // open modal
  const handleOpen = (media: MediaImage | Video) => {
    setIsOpen(true)
    switch (media?.mediaContentType) {
      case 'VIDEO':
        return setCurrentMedia(media as Video)
      case 'IMAGE':
        return setCurrentMedia(media as MediaImage)
      default:
        return null
    }
  }

  if (label) {
    cardLabel = label
  } else if (isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2)) {
    cardLabel = 'Sale'
  } else if (publishedAt && isNewArrival(publishedAt)) {
    cardLabel = 'New'
  }

  return (
    <>
      <div className="flex flex-col md:w-[100%] justify-center items-center gap-5 bg-white md:flex-row md:items-start">
        {/* images on LHS */}
        <Swiper
          onSwiper={setActiveThumb}
          direction="vertical"
          loop
          spaceBetween={2}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className={styles.product_images_slider_thumbs}>
          {media?.map((item, index) => {
            const data = {
              ...item,
              image: {
                // @ts-ignore
                ...item.image,
                altText: item.alt || 'Product image',
              },
            } as MediaImage
            return (
              <SwiperSlide key={data.image?.altText} className="max-h-[5.75rem]">
                <div className={` w-[5.625rem] h-[5.625rem] relative  ${styles.product_images_slider_thumbs_wrapper} `}>
                  <img src={data.image?.url ?? item.previewImage?.url} alt="product" className="h-full" />
                  {item.mediaContentType === 'VIDEO' && (
                    <img
                      src="https://media.graphassets.com/7i9MGYX5TWa0AAp9vPUg"
                      className="absolute left-6 w-10 top-6"
                    />
                  )}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        {/* bigger image sec */}
        <div className="relative w-[100%] md:w-[80%]">
          <div className="flex flex-row gap-1.5 absolute top-4 left-4 z-10">
            <Typography
              tag="p"
              variant="caption"
              theme={{
                root: styles.cardLabel,
              }}>
              {cardLabel}
            </Typography>
          </div>
          <div className="flex flex-row gap-1.5 absolute top-4 left-20 z-10">
            {promotionLabel && (
              <PromotionLabel
                promotionLabel={promotionLabel}
                promotionLabelIcon={promotionLabelIcon}
                badgeType={badgeType}
              />
            )}
          </div>
          <AddToWishList className="absolute right-4 top-4 z-10 w-[29px]" />
          <Swiper
            loop
            spaceBetween={10}
            navigation
            modules={[Navigation, Thumbs]}
            grabCursor
            thumbs={{ swiper: activeThumb }}
            className={styles.product_images_slider}>
            {media?.map((item, index) => {
              const data = {
                ...item,
                sources: {
                  // @ts-ignore
                  ...item.sources,
                  mimeType: 'video/mp4',
                },
              } as Video
              return (
                <SwiperSlide key={data.alt}>
                  <div
                    onClick={() => {
                      return handleOpen(item)
                    }}
                    className="w-full h-full">
                    {item.mediaContentType === 'VIDEO' ? (
                      <video className="w-full" controls>
                        <source src={data.sources[1].url} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.previewImage?.url} alt="product" className="w-full h-full object-cover" />
                    )}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="hidden md:block">{children}</div>
        </div>
      </div>
      {currentMedia !== undefined && <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} currentMedia={currentMedia} />}
    </>
  )
}
