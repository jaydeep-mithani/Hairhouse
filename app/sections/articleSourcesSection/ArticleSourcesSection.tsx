import { Typography } from '@overdose/components'
import { PlusCircle, MinusCircle } from '~/assets'
import clsx from 'clsx'
import React, { useState } from 'react'

import styles from './ArticleSourcesSection.module.css'
import { ArticleSourcesSectionProps } from './ArticleSourcesSection.types'

export const ArticleSourcesSection: React.FC<ArticleSourcesSectionProps> = ({ data }) => {
  const { title, subtitle, subtitleBackground, sources } = data
  const [isBlockOpen, setIsBlockOpen] = useState(false)

  if (!data?.title || !data?.sources) {
    return null
  }

  const showContent = () => {
    setIsBlockOpen(!isBlockOpen)
  }

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.articleSourcesSection, {
          [styles.opened]: isBlockOpen === true,
        })}>
        <div className={styles.titleWrapper} onClick={() => showContent()}>
          <Typography tag="h4" className={styles.title}>
            {title}
          </Typography>
          {isBlockOpen ? <MinusCircle /> : <PlusCircle />}
        </div>
        <div className={styles.contentWrapper}>
          {subtitle && (
            <div
              className={clsx(styles.subtitleWrapper, {
                [styles.hasBackground]: subtitleBackground?.hex,
              })}
              style={{ backgroundColor: subtitleBackground?.hex }}>
              <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle?.html }} />
            </div>
          )}
          <div className={styles.sourcesWrapper}>
            {!!sources?.length &&
              sources.map((source, index) => {
                return (
                  <div className={styles.sourceItem} key={`${index + 1}`}>
                    <span className={styles.sourceIndex}>[{index + 1}]</span>
                    <div id={`citation-${source.id}`} className={styles.sourceItemText}>
                      {source?.text}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
