import { Typography } from '@overdose/components'
import clsx from 'clsx'

import { Brands } from './Brands'
import { BrandsMenuByAlphabet } from './BrandsMenuByAlphabet'
import styles from './MegaMenu.module.css'
import { BrandsMenuProps } from './MegaMenu.types'

const PARENT_ALPHABET = 'Brands A - Z'
const TITLES_ALPHABET = ['A - G', 'H - S', 'T - #']

export const BrandsMenu = ({ parentItem, activeId, setActiveId, brands, isThirdColumn }: BrandsMenuProps) => {
  let isSorted = false
  if (!brands) {
    return null
  }

  if (
    parentItem?.headingText?.split(' ').join('').toLocaleLowerCase() ===
    PARENT_ALPHABET.split(' ').join('').toLocaleLowerCase()
  ) {
    brands.sort((a, b) => {
      return a.brandName && b.brandName
        ? a.brandName.toLocaleLowerCase().localeCompare(b.brandName.toLocaleLowerCase())
        : 0
    })
    isSorted = true
  }

  return (
    <div
      className={clsx(styles.columnBrands, {
        [styles.active]: activeId === parentItem?.id,
        [styles.columnBrandsSecond]: !isThirdColumn,
        [styles.brandsAlphabet]: isSorted,
      })}
      onMouseLeave={() => {
        return setActiveId?.(null)
      }}>
      {isSorted ? (
        <BrandsMenuByAlphabet
          titlesAlphabet={TITLES_ALPHABET}
          activeId={activeId}
          brands={brands}
          parentItem={parentItem}
          isSorted={isSorted}
        />
      ) : (
        <>
          {parentItem?.headingText && (
            <div className={styles.subMenuTitle}>
              <Typography tag="p" variant="displaySmall">
                {isThirdColumn ? `Top ${parentItem.headingText} brands` : parentItem.headingText}
              </Typography>
            </div>
          )}
          <Brands brands={brands} activeId={activeId} parentItem={parentItem} isSorted={isSorted} />
        </>
      )}
    </div>
  )
}
