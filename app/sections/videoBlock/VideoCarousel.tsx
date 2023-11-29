import { Button, Typography } from '@overdose/components'
import { IconVideoPlay, ChevronRight, IconVideoPause } from '~/components'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { Scrollbar, Navigation, type Swiper as SwiperRef } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './SectionVideoCarousel.module.css'
import { VideoComponentProps } from './SectionVideoCarousel.types'

import 'swiper/css'

export const VideoCarousel = (props: VideoComponentProps) => {
  const { videos, headline } = props
  const videoRefs = useRef(Array(videos?.length).fill(null))
  const swiperRef = useRef<SwiperRef>()
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [activeSlideIndex, setActiveSlideIndex] = useState(1)

  if (!videos?.length) {
    return null
  }

  const handlePlayVideo = (index: number) => {
    if (activeVideoIndex === index) {
      videoRefs.current[index]?.pause()
      setActiveVideoIndex(0)
    } else {
      if (activeVideoIndex !== null) {
        videoRefs.current[activeVideoIndex]?.pause()
      }
      videoRefs.current[index]?.play()
      setActiveVideoIndex(index)
    }
  }

  const handleNavigateSlide = (direction: string) => {
    const swiper = swiperRef?.current

    if (!swiper) {
      return
    }

    // Adding an active class for the last slide of the swiper. By default, swiper doesn't add active class to last element if slidesPerView="auto".
    if (direction === 'prev') {
      const nextIndex = activeSlideIndex - 1
      swiper.slides[nextIndex - 1].className = 'swiper-slide slide-active'
      swiper.slides[nextIndex].className = 'swiper-slide swiper-slide-next'
      setActiveSlideIndex(activeSlideIndex - 1)
      return
    }

    swiper.slides[activeSlideIndex].className = 'swiper-slide slide-active'
    swiper.slides[activeSlideIndex - 1].className = 'swiper-slide swiper-slide-prev'
    setActiveSlideIndex(activeSlideIndex + 1)
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <Typography
          tag="p"
          variant="displayLarge"
          theme={{
            root: clsx('w-[207px] sm:w-full font-medium', styles.title),
          }}>
          {headline}
        </Typography>
        <div className="flex gap-x-3 md:gap-x-6">
          <Button
            variant="ghost"
            status="secondary"
            theme={{
              root: clsx(styles.navButton, styles.navButtonPrev, 'swiper-prev-video', {
                [styles.navButtonDisabled]: activeSlideIndex === 1,
              }),
            }}
            htmlType="button"
            ariaLabel="Previous slide"
            onClick={() => {
              handleNavigateSlide('prev')
            }}
            iconOnly
            noHover
            size="lg"
            icon={<ChevronRight color="white" />}
          />
          <Button
            variant="ghost"
            status="secondary"
            theme={{
              root: clsx(styles.navButton, 'swiper-next-video', {
                [styles.navButtonDisabled]: activeSlideIndex === videos.length,
              }),
            }}
            htmlType="button"
            ariaLabel="Next slide"
            onClick={() => {
              handleNavigateSlide('next')
            }}
            iconOnly
            noHover
            size="lg"
            icon={<ChevronRight color="white" />}
          />
        </div>
      </div>
      <Swiper
        enabled
        slidesPerView="auto"
        updateOnWindowResize={false}
        modules={[Scrollbar, Navigation]}
        navigation={{
          nextEl: '.swiper-next-video',
          prevEl: '.swiper-prev-video',
        }}
        onSlideChange={(sw) => {
          swiperRef.current = sw
        }}
        scrollbar={{
          hide: false,
          draggable: true,
          dragSize: 130,
          el: '.videoScrollbar',
          horizontalClass: styles.videoScrollbar,
        }}
        breakpoints={{
          320: {
            spaceBetween: 16,
          },
          412: {
            spaceBetween: 16,
            slidesOffsetAfter: 80,
          },
          768: {
            spaceBetween: 32,
            slidesOffsetAfter: 104,
          },
        }}
        className={styles.videoSwiper}>
        {videos?.map((item, index) => {
          const { video, name, time, thumbnail, id } = item
          return (
            <SwiperSlide key={id}>
              <div className={clsx('relative overflow-hidden h-full', styles.videoWrapper)}>
                {video?.url && thumbnail?.url && (
                  <video
                    poster={thumbnail?.url}
                    height={350}
                    width={500}
                    ref={(ref) => (videoRefs.current[index + 1] = ref)}
                    className={styles.video}>
                    <source src={video?.url} type="video/mp4" />
                    <track kind="captions" />
                  </video>
                )}
                <Button
                  status="secondary"
                  noHover
                  iconAlignment="left"
                  icon={activeVideoIndex === index + 1 ? <IconVideoPause /> : <IconVideoPlay />}
                  onClick={() => handlePlayVideo(index + 1)}
                  theme={{ root: clsx('absolute left-0 bottom-0', styles.playBtn) }}>
                  <Typography variant="subheading" tag="span" weight="bold" theme={{ root: styles.singleVideoBtnText }}>
                    {name}
                  </Typography>
                  <Typography
                    variant="subheading"
                    tag="span"
                    theme={{ root: clsx('ml-2 hidden md:block', styles.time) }}>
                    {time}
                  </Typography>
                </Button>
              </div>
            </SwiperSlide>
          )
        })}
        <div className="videoScrollbar" />
      </Swiper>
    </>
  )
}
