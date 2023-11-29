import { Typography } from '@overdose/components'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './SectionCuratedBlog.module.css'
import { SectionCuratedBlogProps } from './SectionCuratedBlog.types'
import { SectionCuratedBlogCard } from './SectionCuratedBlogCard'
import 'swiper/css'

export const SectionCuratedBlog: React.FC<SectionCuratedBlogProps> = ({ blogItem, heading }) => {
  return (
    <div className="py-10 xl:py-0 mx-auto">
      <div className="mb-5 md:mb-8 text-center max-w-[300px] sm:max-w-full mx-auto sm:mx-0 pr-4 sm:pr-0">
        {heading && (
          <Typography tag="p" variant="displayLarge" theme={{ root: 'text-black' }}>
            {heading}
          </Typography>
        )}
      </div>
      <Swiper
        enabled
        slidesPerView="auto"
        updateOnWindowResize
        modules={[Scrollbar]}
        scrollbar={{
          hide: false,
          draggable: true,
          dragSize: 130,
          dragClass: styles.scrollBarDrag,
          el: '.scrollBar',
          horizontalClass: styles.scrollBar,
        }}
        breakpoints={{
          320: {
            spaceBetween: 16,
            slidesOffsetAfter: 20,
          },
          768: {
            spaceBetween: 32,
            slidesOffsetAfter: 16,
          },
          1024: {
            spaceBetween: 48,
            slidesOffsetAfter: 0,
          },
        }}
        className={styles.curatedBlogSwiper}>
        {blogItem && blogItem?.length > 0
          ? blogItem?.map((blog) => {
              return blog ? (
                <SwiperSlide key={blog?.id}>
                  <SectionCuratedBlogCard {...blog} />
                </SwiperSlide>
              ) : null
            })
          : null}
        <div className="scrollBar" />
      </Swiper>
    </div>
  )
}
