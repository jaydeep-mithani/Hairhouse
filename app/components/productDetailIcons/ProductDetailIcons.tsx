import { Image, Typography } from '@overdose/components'
import React from 'react'

import { ProductDetailIconsProps } from './ProductDetailIcons.types'
import styles from './ProductDetailsIcons.module.css'

export const ProductDetailIcons: React.FC<ProductDetailIconsProps> = ({ productDetailIcons }) => {
  return (
    <div className="flex flex-row justify-center items-center px-2 gap-3 md:gap-8">
      {productDetailIcons?.map((ingredient) => {
        return (
          ingredient.image.url &&
          ingredient.text && (
            <div
              key={ingredient.text}
              className="flex flex-col justify-between md:justify-center items-center gap-1 md:flex-row md:gap-1.5">
              <Image src={ingredient.image?.url} alt={ingredient.text} width={28} height={28} />
              <Typography theme={{ root: styles.text }} tag="p" variant="body">
                {ingredient.text}
              </Typography>
            </div>
          )
        )
      })}
    </div>
  )
}
