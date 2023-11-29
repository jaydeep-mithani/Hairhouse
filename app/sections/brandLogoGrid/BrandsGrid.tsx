import clsx from 'clsx'
import React from 'react'
import Marquee from 'react-fast-marquee'

import { BrandCard } from './BrandCard'
import { BrandsGridPops } from './BrandCard.types'
import styles from './BrandLogoGrid.module.css'

export const BrandsGrid = ({ brands, asCarousel }: BrandsGridPops) => {
  if (!brands?.length) {
    return null
  }

  const renderBrands = () => {
    if (asCarousel) {
      return (
        <Marquee pauseOnHover className={styles.desktopBrandsWrapper} gradient={false} speed={40}>
          {brands?.map((item, i) => {
            return <BrandCard {...item} key={i} />
          })}
        </Marquee>
      )
    }
    return brands?.map((item, i) => {
      return <BrandCard {...item} key={i} />
    })
  }

  return <div className={clsx(styles.brandsGridContainer, { [styles.asCarousel]: asCarousel })}>{renderBrands()}</div>
}
