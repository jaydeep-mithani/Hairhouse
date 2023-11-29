import { Button } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import React, { useState, useEffect, useRef } from 'react'

import styles from './Asset.module.css'
import { AssetProps } from './Asset.types'

export const Asset: React.FC<AssetProps> = ({ asset, maxWidth, playIcon }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const videoEl = useRef<HTMLVideoElement | null>(null)

  const handlePlayVideo = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    if (videoEl.current) {
      if (isPlaying) {
        videoEl.current.pause()
      } else {
        videoEl.current.play().catch((error) => {
          console.error('Error during video play: ', error)
        })
      }
    }
  }

  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.preventDefault()
  }

  useEffect(() => {
    if (videoEl.current) {
      videoEl.current.onplay = () => {
        return setIsPlaying(true)
      }

      videoEl.current.onpause = () => {
        return setIsPlaying(false)
      }
    }
  }, [])

  if (asset?.mimeType === 'image/jpeg') {
    return <Image data={asset} alt={asset.altText ?? asset.fileName} />
  }

  if (asset?.mimeType === 'video/mp4') {
    return (
      <div
        className={styles.videoContainer}
        style={{ maxWidth }}
        onClick={handlePlayVideo}
        role="button"
        tabIndex={0}
        onKeyUp={handlePlayVideo}>
        <video ref={videoEl} controls={false} onClick={handleVideoClick} className={styles.videoElement}>
          <track kind="captions" label="English" default />
          <source src={asset?.url} type={asset?.mimeType} />
        </video>
        {!isPlaying && (
          <Button
            noHover
            status="secondary"
            iconAlignment="left"
            icon={playIcon}
            theme={{ root: styles.playSingleBtn }}
          />
        )}
      </div>
    )
  }

  return null
}
