import { Typography } from '@overdose/components'
import React from 'react'

import { ProductLableProps } from './ProductLabel.types'
import styles from './ProductLable.module.css'

export const ProductLable: React.FC<ProductLableProps> = ({ label }) => {
  if (label.type === 'circle') {
    return (
      <div className={styles.root_circle}>
        <Typography tag="span" variant="caption" weight="light" align="center">
          {label.text}
        </Typography>
      </div>
    )
  }
  if (label.type === 'strip') {
    return (
      <div className={styles.root_strip}>
        <Typography tag="span" variant="caption" weight="light" align="center">
          {label.text}
        </Typography>
      </div>
    )
  }
  if (label.type === 'price') {
    return (
      <div className={styles.root_price}>
        <Typography tag="span" variant="caption" weight="light" align="center">
          {label.text}
        </Typography>
      </div>
    )
  }
  return <div />
}
