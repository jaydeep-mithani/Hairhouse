import { SwiperOptions } from 'swiper'

export interface CarouselProps {
  children: React.ReactElement | React.ReactElement[]
  options?: SwiperOptions
  showScrollbar?: boolean
  showPagination?: boolean
  showArrows?: boolean
  breakpoints?: {
    [width: number]: SwiperOptions
    [ratio: string]: SwiperOptions
  }
  className?: string
  carouselTitle?: string | null
  paginationClassNamePrefix?: string
  navButtonProps?: {
    shape?: string
    status?: string
    variant?: string
    size?: string
  }
  preserveHiddenNavButtonHeight?: string
  preserveHiddenScrollbarHeight?: string
  placement?: string
}
