import clsx from 'clsx'

import styles from './SectionVideoCarousel.module.css'
import { SectionVideoCarouselProps } from './SectionVideoCarousel.types'
import { SingleVideo } from './SingleVideo'
import { VideoCarousel } from './VideoCarousel'

export const SectionVideoCarousel = (props: SectionVideoCarouselProps) => {
  if (!props?.videos?.length) {
    return null
  }

  return (
    <div className={clsx('w-full px-4 py-[60px] md:px-12 md:pt-[100px] md:pb-[100px]', styles.wrapper)}>
      {props.videos.length === 1 ? <SingleVideo {...props} /> : <VideoCarousel {...props} />}
    </div>
  )
}
