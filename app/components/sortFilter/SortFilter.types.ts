import type { Filter, Collection } from '@shopify/hydrogen/storefront-api-types'
import { SortParam, AppliedFilter } from '~/routes/($lang)/collections/$collectionHandle'

export interface SortFilterProps {
  filters: Filter[]
  appliedFilters?: AppliedFilter[]
  children: React.ReactNode
  collection?: Collection
}

export interface SortMenuProps {
  className?: string
}

export interface SortMenuItem {
  label: string
  key: SortParam
}

export interface FiltersDrawerProps {
  filters: Filter[]
  appliedFilters: AppliedFilter[]
  isOpen: boolean
  setIsOpen: () => void
}

export interface PriceRangeFilterProps {
  max?: number
  min?: number
}
