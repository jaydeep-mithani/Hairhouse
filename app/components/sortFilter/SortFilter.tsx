import { Button, Typography } from '@overdose/components'
import { useState } from 'react'

import { FiltersDrawer } from './FiltersDrawer'
import styles from './SortFilter.module.css'
import { SortFilterProps } from './SortFilter.types'
import { SortMenu } from './SortMenu'

export function SortFilter({ filters, appliedFilters = [], children, collection }: SortFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  const endCursor = collection?.products?.pageInfo?.endCursor
  const PRODUCTS = collection?.products?.pageInfo?.numberOfProducts
  const SHOWN_PRODUCTS = endCursor < PRODUCTS ? endCursor : PRODUCTS

  return (
    <div className={styles.root}>
      <div className={styles.toolbarButtonWrapper}>
        <Button onClick={() => setIsOpen(true)} variant="solid" status="primary" theme={{ root: styles.refineButton }}>
          Refine by
        </Button>
        <SortMenu />
      </div>
      <FiltersDrawer filters={filters} appliedFilters={appliedFilters} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1">
        <div className="flex flex-row justify-center lg:justify-between items-center pb-6 lg:pb-4">
          <Typography
            tag="p"
            variant="body"
            theme={{
              root: styles.productsCount,
            }}>
            Showing {SHOWN_PRODUCTS} of {PRODUCTS} results
          </Typography>
          <SortMenu className="hidden lg:inline-flex" />
        </div>
        {children}
      </div>
    </div>
  )
}
