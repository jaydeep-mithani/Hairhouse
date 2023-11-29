import { Typography } from '@overdose/components'
import React from 'react'

import styles from './Discount.module.css'

interface DiscountProps {
  originalPrice: string
  salePrice: string
}

export const Discount: React.FC<DiscountProps> = ({ originalPrice, salePrice }) => {
  const calculateDiscount = (original: string | undefined, sale: string | undefined) => {
    if (!original || !sale) {
      return 0
    }

    const originalNum = parseFloat(original)
    const saleNum = parseFloat(sale)

    const discount = ((originalNum - saleNum) / originalNum) * 100
    return Math.floor(discount)
  }

  const discountPercentage = calculateDiscount(originalPrice, salePrice)

  return (
    <div className={styles.container}>
      <Typography variant="caption" theme={{ root: styles.discountedPrice }}>
        Save {discountPercentage}%
      </Typography>
    </div>
  )
}
