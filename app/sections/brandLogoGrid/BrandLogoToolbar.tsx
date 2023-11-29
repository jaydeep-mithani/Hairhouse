import { Button } from '@overdose/components'
import { BrandLogoToolbarProps } from '~/sections/brandLogoGrid/BrandCard.types'
import clsx from 'clsx'
import React, { useMemo, useState } from 'react'

import { BrandTags } from '../../../graphql/types'
import styles from './BrandLogoGrid.module.css'
import { lettersFilter } from './utils'

export const BrandLogoToolbar = ({ handleSortByTag, handleSortByLetters }: BrandLogoToolbarProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const tags = Object.values(BrandTags)

  const renderLettersFilter = useMemo(() => {
    return lettersFilter.map((letter, index) => {
      return (
        <Button
          key={`letters_${index}`}
          variant="ghost"
          status="secondary"
          htmlType="button"
          onClick={() => {
            handleSortByLetters(letter.values)
            setSelectedFilter(letter.id)
          }}
          noHover>
          <span className={clsx(styles.toolbarButton, { [styles.active]: selectedFilter === letter.id })}>
            {letter.name}
          </span>
        </Button>
      )
    }, [])
  }, [selectedFilter, handleSortByLetters, setSelectedFilter])

  const renderTagsFilter = useMemo(() => {
    return (
      !!tags?.length &&
      tags.map((tag, index) => {
        return (
          <Button
            key={`tags_${index}`}
            variant="ghost"
            status="secondary"
            htmlType="button"
            onClick={() => {
              handleSortByTag(tag)
              setSelectedFilter(tag)
            }}
            noHover>
            <span className={clsx(styles.toolbarButton, { [styles.active]: selectedFilter === tag })}>{tag}</span>
          </Button>
        )
      }, [])
    )
  }, [selectedFilter, tags, handleSortByTag, setSelectedFilter])

  return (
    <div className={styles.toolbar}>
      <div className={styles.lettersBlocks}>{renderLettersFilter}</div>
      <span className={styles.divider} />
      <div className={styles.tagsBlock}>{renderTagsFilter}</div>
    </div>
  )
}
