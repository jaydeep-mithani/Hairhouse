import { Button, Typography } from '@overdose/components'
import { IconVideoPlay } from '~/components'
import clsx from 'clsx'
import { useRef } from 'react'

import styles from './SectionVideoCarousel.module.css'
import { VideoComponentProps } from './SectionVideoCarousel.types'

export const SingleVideo = ({ headline, videos }: VideoComponentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  if (!headline || !videos) {
    return null
  }

  const handlePlayVideo = () => {
    if (videoRef?.current?.paused) {
      videoRef?.current?.play()
    } else videoRef?.current?.pause()
  }

  const videoContent = videos[0]
  return (
    <div className="flex flex-col justify-center items-center">
      {headline && (
        <Typography tag="p" variant="displayLarge" theme={{ root: clsx('mb-3 md:mb-6 text-center', styles.title) }}>
          {headline}
        </Typography>
      )}
      <div className={clsx('relative overflow-hidden w-full h-full max-h-[623px] max-w-[890px]', styles.videoWrapper)}>
        {videoContent?.video?.url && videoContent?.thumbnail?.url && (
          <video ref={videoRef} poster={videoContent.thumbnail?.url} height={623} width={890}>
            <source src={videoContent.video?.url} type="video/mp4" />
            <track kind="captions" />
          </video>
        )}
        <Button
          status="secondary"
          iconAlignment="left"
          icon={<IconVideoPlay />}
          theme={{ root: clsx('absolute left-0 bottom-0', styles.playSingleBtn) }}
          onClick={handlePlayVideo}>
          <Typography variant="subheading" tag="span" weight="bold" theme={{ root: styles.singleVideoBtnText }}>
            {videoContent.name}
          </Typography>
          <Typography
            variant="subheading"
            tag="span"
            theme={{ root: clsx('ml-2', styles.time, styles.singleVideoBtnText) }}>
            {videoContent.time}
          </Typography>
        </Button>
      </div>
    </div>
  )
}
