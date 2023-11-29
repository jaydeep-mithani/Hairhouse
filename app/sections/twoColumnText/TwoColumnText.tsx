import { Typography } from '@overdose/components'
import clsx from 'clsx'
import { TextLayout } from 'graphql/types'
import React from 'react'

import styles from './TwoColumnText.module.css'
import { SectionSeoTextProps } from './TwoColumnText.types'

export const TwoColumnText = ({ adminTitle, content, colun2Content, textLayout }: SectionSeoTextProps) => {
  if (!content) {
    return null
  }

  return (
    <div className={styles.root}>
      {adminTitle && (
        <Typography tag="p" variant="body">
          {adminTitle}
        </Typography>
      )}
      <div className={textLayout === TextLayout.OneColumn ? `${styles.column_content}` : `${styles.content_wrapper}`}>
        {content && (
          <div className={clsx([styles.leftside_content], textLayout === TextLayout.OneColumn && styles.full_width)}>
            {content?.html && (
              <Typography
                tag="p"
                variant="caption"
                weight="bold"
                theme={{ root: 'font-[350]' }}
                dangerouslySetInnerHTML={{ __html: content?.html }}
              />
            )}
          </div>
        )}
        {colun2Content && (
          <div className={clsx([styles.rightside_content], textLayout === TextLayout.OneColumn && styles.full_width)}>
            {colun2Content?.html && (
              <Typography
                tag="p"
                variant="caption"
                weight="bold"
                theme={{ root: 'font-[350]' }}
                dangerouslySetInnerHTML={{ __html: colun2Content?.html }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
