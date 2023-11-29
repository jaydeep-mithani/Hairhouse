import { Typography, Image } from '@overdose/components'
import clsx from 'clsx'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import styles from './SectionTestimonial.module.css'
import { SectionTestimonialProps } from './SectionTestimonial.types'

export const SectionTestimonial: React.FC<SectionTestimonialProps> = ({ testimonials, heading, bgColor }) => {
  return (
    <div className={clsx(styles.root)} style={{ backgroundColor: bgColor?.hex || '#2d2d2d' }}>
      <div className={styles.container}>
        {heading && (
          <Typography tag="h1" variant="displayExtraLarge" weight="light">
            {heading}
          </Typography>
        )}
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
          {testimonials && testimonials?.length > 0
            ? testimonials.map((testimonial, index) => {
                return testimonial ? (
                  <SwiperSlide key={index}>
                    <div className={styles.carousel_item}>
                      <div className={styles.img_container}>
                        {testimonial?.image && (
                          <Image
                            src={testimonial?.image?.url}
                            alt={testimonial?.image?.altText}
                            className={styles.user_img}
                          />
                        )}
                        {testimonial?.topLeftBoxText && (
                          <Typography tag="span" variant="caption">
                            {testimonial.topLeftBoxText}
                          </Typography>
                        )}
                      </div>
                      {testimonial?.name && (
                        <Typography tag="h5" variant="heading" weight="bold" align="left">
                          {testimonial.name}
                        </Typography>
                      )}
                      <div className={styles.post_date}>
                        {testimonial?.postedDate && (
                          <Typography tag="h6" variant="body" weight="light">
                            {testimonial.postedDate}
                          </Typography>
                        )}
                        <Typography
                          tag="h6"
                          variant="body"
                          weight="light"
                          theme={{ root: clsx(styles.text_separator) }}>
                          &#x2022;
                        </Typography>
                        {testimonial?.expertName && (
                          <Typography tag="h6" variant="body" weight="light">
                            {testimonial.expertName}
                          </Typography>
                        )}
                      </div>
                      {testimonial?.description?.text && (
                        <Typography tag="h6" variant="body" weight="light">
                          {testimonial.description.text}
                        </Typography>
                      )}
                      {testimonial?.button && testimonial?.button?.buttonText && (
                        <Typography tag="h4" variant="body" weight="normal">
                          {testimonial.button.buttonText}
                        </Typography>
                      )}
                    </div>
                  </SwiperSlide>
                ) : null
              })
            : null}
          <div className="scrollBar" />
        </Swiper>
      </div>
    </div>
  )
}
