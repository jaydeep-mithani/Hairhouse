import { Image, Typography } from '@overdose/components'
import { Link } from '~/components'
import { Carousel } from '~/components/carousel/Carousel'
import clsx from 'clsx'

import styles from './CollectionCarousel.module.css'
import { CollectionCarouselProps } from './CollectionCarousel.types'
import 'swiper/css'

export const CollectionCarousel = (props: CollectionCarouselProps) => {
  const { backgroundColour, categories, title, tilesAlignment } = props
  const straightTileSettings = {
    320: { slidesPerView: 2.35, spaceBetween: 16, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
    768: { slidesPerView: 4.6, spaceBetween: 16, slidesOffsetBefore: 40, slidesOffsetAfter: 40 },
    1024: { slidesPerView: 6.42, spaceBetween: 32, slidesOffsetBefore: 48, slidesOffsetAfter: 48 },
    2560: { slidesPerView: 6.42, spaceBetween: 56 },
  }

  const otherTileSettings = {
    320: { slidesPerView: 1.68, spaceBetween: 37, slidesOffsetBefore: 33, slidesOffsetAfter: 33 },
    768: { slidesPerView: 2.5, spaceBetween: 30, slidesOffsetBefore: 40, slidesOffsetAfter: 40 },
    1024: { slidesPerView: 3.85, spaceBetween: 32, slidesOffsetBefore: 70, slidesOffsetAfter: 70 },
    2560: { slidesPerView: 4.5, spaceBetween: 56 },
  }

  const carouselOptions = {
    keyboard: true,
    breakpoints: tilesAlignment === 'straight' ? straightTileSettings : otherTileSettings,
  }

  const imageSize =
    tilesAlignment === 'straight'
      ? 'w-full h-[150px] sm:h-[185px] object-cover'
      : 'h-[288px] w-[208px] sm:h-[453px] sm:w-[327px] object-cover'

  return (
    <div
      className={clsx(styles.root, {
        [styles[`type_${tilesAlignment}`]]: tilesAlignment,
      })}
      style={{ backgroundColor: backgroundColour?.hex || '' }}>
      <div>
        <Carousel carouselTitle={title} showScrollbar showArrows options={carouselOptions}>
          {!!categories?.length &&
            categories.map((collection, index: number) => {
              return (
                <div className={styles.categoryImage} key={`${collection.url}${index}`}>
                  <Link to="/collections">
                    {collection?.image && (
                      <Image
                        src={collection?.image?.url}
                        alt={collection?.image?.altText ?? ''}
                        className={imageSize}
                      />
                    )}
                    <Typography
                      tag="p"
                      variant="displayLarge"
                      theme={{
                        root: clsx(styles.title, {
                          [styles.categoryTitleVertical]: tilesAlignment !== 'straight',
                        }),
                      }}>
                      {collection?.heading}
                    </Typography>
                  </Link>
                </div>
              )
            })}
        </Carousel>
      </div>
    </div>
  )
}

export default CollectionCarousel
