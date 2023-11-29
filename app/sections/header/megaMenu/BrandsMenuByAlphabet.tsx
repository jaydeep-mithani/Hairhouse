import { Typography } from '@overdose/components'

import { Brands } from './Brands'
import styles from './MegaMenu.module.css'
import { BrandsMenuProps, BrandProps } from './MegaMenu.types'

const RANGE_SECOND = 'H'
const RANGE_THIRD = 'T'
const INDEX_FIRST = 0
const INDEX_SECOND = 1
const INDEX_THIRD = 2

export const BrandsMenuByAlphabet = ({ titlesAlphabet, activeId, brands, parentItem, isSorted }: BrandsMenuProps) => {
  const dividedBrandsArr: BrandProps[][] = brands.reduce(
    (result: BrandProps[][], brand) => {
      const range = brand.brandName?.charAt(0).toUpperCase().charCodeAt(0)

      if (range && range < RANGE_SECOND.charCodeAt(0)) {
        result[INDEX_FIRST].push(brand as BrandProps)
      } else if (range && range < RANGE_THIRD.charCodeAt(0)) {
        result[INDEX_SECOND].push(brand as BrandProps)
      } else {
        result[INDEX_THIRD].push(brand as BrandProps)
      }

      return result
    },
    [[], [], []],
  )

  return (
    <div className={styles.alphabetColumns}>
      {!!dividedBrandsArr?.length &&
        dividedBrandsArr?.map((dividedBrands, index: number) => {
          return (
            dividedBrands && (
              <div className={styles.alphabetColumn} key={index}>
                {titlesAlphabet && (
                  <div className={styles.subMenuTitle}>
                    <Typography tag="p" variant="displaySmall">
                      {titlesAlphabet[index]}
                    </Typography>
                  </div>
                )}
                <Brands brands={dividedBrands} activeId={activeId} parentItem={parentItem} isSorted={isSorted} />
              </div>
            )
          )
        })}
    </div>
  )
}
