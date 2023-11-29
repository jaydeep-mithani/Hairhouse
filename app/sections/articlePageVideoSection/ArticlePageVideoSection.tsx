import { Typography } from '@overdose/components'
import clsx from 'clsx'
import React, { useRef, useState } from 'react'

import styles from './ArticlePageVideoSection.module.css'
import { ArticlePageVideoSectionProps } from './ArticlePageVideoSection.types'

export const ArticlePageVideoSection: React.FC<ArticlePageVideoSectionProps> = ({ data }) => {
  const { thumbnail, videoFile, videoTitle } = data
  const videoRef = useRef(null)
  const [duration, setDuration] = useState('')
  const [playing, setPlaying] = useState(false)

  if (!videoFile?.url) {
    return null
  }

  /*
   * Play/Pause Video
   */
  const playPauseVideo = () => {
    if (videoRef?.current?.paused) {
      videoRef?.current?.play()
      setPlaying(true)
    } else {
      videoRef?.current?.pause()
      setPlaying(false)
    }
  }
  /*
   * Go to initial state
   */
  const goToInitialState = () => {
    videoRef?.current?.load()
    setPlaying(false)
  }
  /*
   * Calculate Video duration
   */
  const calculateVideoDuration = () => {
    const durationInSecs = parseInt(videoRef?.current?.duration)
    const totalMinutes = Math.floor(durationInSecs / 60)
    const seconds = durationInSecs % 60
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    if (hours > 0) {
      setDuration(`(${hours}:${minutes}:${seconds})`)
    } else {
      setDuration(`(${minutes}:${seconds})`)
    }
  }

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.videoWrapper, {
          [styles.playing]: playing === true, // adds 'playing' class when playing is set to true
        })}>
        <video
          ref={videoRef}
          width="100%"
          poster={thumbnail?.url}
          preload="metadata"
          onClick={() => playPauseVideo()}
          onEnded={() => goToInitialState()}
          onLoadedMetadata={() => calculateVideoDuration()}>
          <source src={videoFile?.url} type="video/mp4" />
          <track />
        </video>
        <div className={styles.playBtnArea}>
          <button className={styles.playBtn} onClick={() => playPauseVideo()}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.16663 2.56836L15.8333 10.0684L4.16663 17.5684V2.56836Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {videoTitle && (
            <Typography tag="span" className={styles.title}>
              {videoTitle}
            </Typography>
          )}
          {duration && (
            <Typography tag="span" className={styles.duration}>
              {duration}
            </Typography>
          )}
        </div>
      </div>
    </div>
  )
}
