import { Typography } from '@overdose/components'
import React from 'react'

import styles from './SectionServicingSuburbs.module.css'
import { ServicingSuburbsProps } from './SectionServicingSuburbs.types'

const TITLE = 'Servicing the suburbs of'

export const SectionServicingSuburbs = ({ suburbsList }: ServicingSuburbsProps) => {
  if (!suburbsList?.length) {
    return null
  }

  return (
    <div className={styles.container}>
      <Typography
        tag="h3"
        variant="displayLarge"
        theme={{
          root: styles.title,
        }}>
        {TITLE}
      </Typography>
      <div className={styles.suburbsList}>
        {suburbsList.map((suburb, index) => {
          return (
            <Typography
              key={index}
              tag="p"
              variant="displaySmall"
              theme={{
                root: styles.suburb,
              }}>
              {suburb}
            </Typography>
          )
        })}
      </div>
    </div>
  )
}
