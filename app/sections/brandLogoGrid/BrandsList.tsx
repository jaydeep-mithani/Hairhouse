import { Typography } from '@overdose/components'
import clsx from 'clsx'
import React from 'react'

import { BrandCard } from './BrandCard'
import { BrandCardProps, SortedBrands } from './BrandCard.types'
import styles from './BrandLogoGrid.module.css'

export const BrandsList = ({ brands }: { brands: SortedBrands[] }) => {
  if (!brands?.length) {
    return (
      <Typography
        tag="p"
        variant="label"
        theme={{
          root: clsx(styles.subtitle, styles.emptyState),
        }}>
        No results found for your search term.
      </Typography>
    )
  }

  return (
    <div className={styles.brandsListContainer}>
      {!!brands?.length &&
        brands.map((brand: SortedBrands, index: number) => {
          return (
            <div key={index} className={styles.brandsRow}>
              <div className={styles.brandFirstLetter}>
                <Typography
                  tag="p"
                  variant="displayLarge"
                  theme={{
                    root: 'font-medium',
                  }}>
                  {brand?.firstLetter}
                </Typography>
              </div>
              <div className={styles.brandsList}>
                {brand?.data?.map((item: JSX.IntrinsicAttributes & BrandCardProps, i: number) => {
                  return <BrandCard {...item} key={`${index}_${i}`} />
                })}
              </div>
            </div>
          )
        })}
    </div>
  )
}
