import { Image, Typography } from '@overdose/components'
import clsx from 'clsx'
import React, { useRef, useState } from 'react'

import { SalonsMenuVideoSectionProps } from './SalonsMenuVideoSection.types'

export const SalonsMenuVideoSection: React.FC<SalonsMenuVideoSectionProps> = (props) => {
  const { desktopLogoHeader, salonsVideoDescription, videoFile, thumbnail } = props
  const vidRef = useRef<HTMLVideoElement>(null)
  const [showbtn, setShowbtn] = useState(true)

  // video play
  const handlePlayVideo = () => {
    if (vidRef.current) {
      const videoElement = vidRef?.current
      if (videoElement.paused) {
        videoElement?.play()
        setShowbtn(false)
      } else {
        videoElement.pause()
        setShowbtn(true)
      }
    }
  }
  return (
    <div className="flex flex-col justify-center items-center bg-[#2d2d2d] py-20 px-5 gap-6 relative md:px-12 md:py-[100px]">
      <div className="flex flex-col items-center pb-5 gap-2.5">
        {desktopLogoHeader && desktopLogoHeader.url && (
          <Image
            src={desktopLogoHeader.url}
            alt={desktopLogoHeader?.altText}
            className="w-[293px] h-[43px] md:w-[435px] md:h-[62px]"
          />
        )}
        {salonsVideoDescription && (
          <div className="max-w-[580px] text-white">
            <Typography
              tag="p"
              variant="bodyLarge"
              theme={{
                root: clsx('text-sm font-[350] leading-[19.6px] text-center md:leading-[22.4px] md:text-base'),
              }}>
              {salonsVideoDescription}
            </Typography>
          </div>
        )}
      </div>
      {videoFile && videoFile.url && (
        <video
          ref={vidRef}
          height={videoFile?.height || '375px'}
          width={videoFile?.width || '730px'}
          poster={thumbnail ? thumbnail?.url : ''}
          onClick={handlePlayVideo}
          className=" h-[202px] object-cover md:h-[375px]">
          <source src={videoFile.url} type="video/mp4" />
          <track kind="captions" />
        </video>
      )}

      {showbtn && (
        <button type="button" className="absolute mt-44 border-none md:mt-40" onClick={handlePlayVideo}>
          <Image
            src="https://media.graphassets.com/7i9MGYX5TWa0AAp9vPUg"
            alt="play"
            className="w-14 h-14 md:h-auto md:w-full "
          />
        </button>
      )}
    </div>
  )
}
