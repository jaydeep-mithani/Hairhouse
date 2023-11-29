import { Button, Typography } from '@overdose/components'
import { ChevronRight } from '~/components'
import clsx from 'clsx'
import React, { useId } from 'react'
import { Scrollbar, Keyboard, Navigation, Pagination, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { CarouselProps } from './declarations/Carousel.types'
import styles from './styles/Carousel.module.css'

const defaultOptions = {
  spaceBetween: 26,
  slidesPerView: 2.1,
  keyboard: true,
}

export const Carousel = ({
  children,
  options = {},
  showScrollbar = false,
  showArrows,
  showPagination,
  carouselTitle,
  className,
  navButtonProps,
  preserveHiddenNavButtonHeight,
  preserveHiddenScrollbarHeight,
  paginationClassNamePrefix = '',
  placement,
}: CarouselProps) => {
  const mergedOptions = { ...defaultOptions, ...options }
  const id = useId()
  const uniqueNavClassSuffix = id.replaceAll(':', '')
  if (!children) return null

  const getFormattedTitle = (title) => {
    if (title?.html) {
      return (
        <Typography
          tag="p"
          variant="displayLarge"
          dangerouslySetInnerHTML={{ __html: title.html }}
          theme={{
            root: styles.carouselTitle,
          }}
        />
      )
    }
    return (
      <Typography
        tag="p"
        variant={placement === 'cartDrawer' ? 'bodyLarge' : 'displayLarge'}
        theme={{
          root: clsx(styles.carouselTitle, { [styles.carouselTitleCart]: placement === 'cartDrawer' }),
        }}>
        {title}
      </Typography>
    )
  }

  const swiperModules = [Scrollbar, Keyboard, Navigation, Pagination]
  if (options?.direction === 'vertical') {
    swiperModules.push(Mousewheel)
  }

  return (
    <div className={clsx(styles.root, className, { [styles.showScrollbar]: showScrollbar })}>
      {(carouselTitle || showArrows) && (
        <div
          className={clsx(styles.titleWrapper, { [styles.titleWrapperCart]: placement === 'cartDrawer' })}
          style={{ '--justifyTitle': carouselTitle ? 'space-between' : 'flex-end' }}>
          {carouselTitle && getFormattedTitle(carouselTitle)}
          {showArrows && (
            <div
              className={clsx(styles.navButtonWrapper, { [styles.navButtonWrapperCart]: placement === 'cartDrawer' })}>
              <Button
                variant="ghost"
                status="secondary"
                theme={{ root: clsx(styles.navbutton_prev, `swiper-prev-${uniqueNavClassSuffix}`) }}
                htmlType="button"
                size="lg"
                ariaLabel="Previous slide"
                iconOnly
                noHover
                icon={<ChevronRight />}
                {...navButtonProps}
              />
              <Button
                variant="ghost"
                status="secondary"
                theme={{ root: clsx(styles.navbutton_next, `swiper-next-${uniqueNavClassSuffix}`) }}
                htmlType="button"
                size="lg"
                ariaLabel="Next slide"
                iconOnly
                noHover
                icon={<ChevronRight />}
                {...navButtonProps}
              />
            </div>
          )}
        </div>
      )}
      <Swiper
        {...mergedOptions}
        observer
        enabled
        modules={swiperModules}
        navigation={
          showArrows
            ? {
                nextEl: `.swiper-next-${uniqueNavClassSuffix}`,
                prevEl: `.swiper-prev-${uniqueNavClassSuffix}`,
                disabledClass: styles.navbutton_disabled,
                lockClass: preserveHiddenNavButtonHeight ? styles.element_hidden : 'swiper-button-lock',
              }
            : false
        }
        scrollbar={
          !showScrollbar
            ? false
            : {
                hide: false,
                draggable: true,
                dragSize: 130,
                el: '.customScrollbar',
                horizontalClass: styles.scrollbar,
                lockClass: preserveHiddenScrollbarHeight ? styles.element_hidden : 'swiper-scrollbar-lock',
              }
        }>
        {React.Children.map(children, (child) => (
          <SwiperSlide>{React.cloneElement(child)}</SwiperSlide>
        ))}

        {showScrollbar && <div className="customScrollbar" />}
      </Swiper>

      {showPagination && <div className={`${paginationClassNamePrefix} swiper-pagination`} />}
    </div>
  )
}
