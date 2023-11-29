import { useLocation, Location } from '@remix-run/react'
import type { FilterType, Filter } from '@shopify/hydrogen/storefront-api-types'
import { AppliedFilter, SortParam } from '~/routes/($lang)/collections/$collectionHandle'

import { SortMenuItem } from './SortFilter.types'

/**
 * Creates a link with all filters removed by deleting their corresponding URL params.
 * @param appliedFilters An array of applied filters to be removed
 * @param params The URLSearchParams object containing the current URL params
 * @param location The current location object
 * @returns A new link with all filters removed
 */
export function clearAllFiltersLink(appliedFilters?: AppliedFilter[], params: URLSearchParams, location: Location) {
  const paramsClone = new URLSearchParams(params)
  if (appliedFilters && appliedFilters.length) {
    appliedFilters.forEach((filter) => paramsClone.delete(filter.urlParam.key))
    paramsClone.delete('cursor')
  }
  return `${location.pathname}?${paramsClone.toString()}`
}

/**
 * Returns the applied filter link by removing the specified filter from the URL parameters.
 * @param filter - The applied filter object.
 * @param params - The URL search parameters.
 * @param location - The location object.
 * @returns The updated filter link.
 */
export function getAppliedFilterLink(filter: AppliedFilter, params: URLSearchParams, location: Location) {
  const paramsClone = new URLSearchParams(params)
  const variantOptions = paramsClone.getAll(filter.urlParam.key)
  const filteredVariantOptions = variantOptions.filter((options) => !options.includes(filter.urlParam.value))
  paramsClone.delete(filter.urlParam.key)
  paramsClone.delete('cursor')
  for (const filteredVariantOption of filteredVariantOptions) {
    paramsClone.append(filter.urlParam.key, filteredVariantOption)
  }
  return `${location.pathname}?${paramsClone.toString()}`
}

/**
 * Creates a link with the specified sort parameter added or updated.
 * @param sort The sort parameter value to be set
 * @param params The URLSearchParams object containing the current URL params
 * @param location The current location object
 * @returns A new link with the specified sort parameter added or updated
 */
export function getSortLink(sort: SortParam, params: URLSearchParams, location: Location) {
  params.set('sort', sort)
  return `${location.pathname}?${params.toString()}`
}

/**
 * Converts the filter input to URL parameters based on the filter type.
 * @param type The type of the filter
 * @param rawInput The raw input data for the filter
 * @param params The URLSearchParams object to store the converted parameters
 * @returns The updated URLSearchParams object
 */
export function filterInputToParams(type: FilterType, rawInput: string | Record<string, any>, params: URLSearchParams) {
  const input = typeof rawInput === 'string' ? JSON.parse(rawInput) : rawInput
  params.delete('cursor')
  switch (type) {
    case 'PRICE_RANGE':
      if (input.price.min) params.set('minPrice', input.price.min)
      if (input.price.max) params.set('maxPrice', input.price.max)
      break
    case 'LIST':
      Object.entries(input).forEach(([key, value]) => {
        if (typeof value === 'string') {
          params.append(key, value)
        } else if (typeof value === 'boolean') {
          params.set(key, value.toString())
        } else {
          const { name, value: val } = value as { name: string; value: string }
          const allVariants = params.getAll(`variantOption`)
          const newVariant = `${name}:${val}`
          if (!allVariants.includes(newVariant)) {
            params.append('variantOption', newVariant)
          }
        }
      })
      break
    default:
      break
  }

  return params
}

/**
 * Generates a filter link with the updated parameters based on the filter and input.
 * @param filter The filter object
 * @param rawInput The raw input data for the filter
 * @param params The URLSearchParams object containing the current parameters
 * @param location The location object retrieved from `useLocation` hook
 * @returns The generated filter link
 */
export function getFilterLink(
  filter: Filter,
  rawInput: string | Record<string, any>,
  params: URLSearchParams,
  location: ReturnType<typeof useLocation>,
) {
  const paramsClone = new URLSearchParams(params)
  const newParams = filterInputToParams(filter.type, rawInput, paramsClone)
  return `${location.pathname}?${newParams.toString()}`
}

/**
 * Retrieves the list of applied filter labels based on the filters and applied filters.
 * @param filters The array of filters
 * @param appliedFilters The array of applied filters
 * @returns The list of applied filter labels
 */
export const getAppliedFiltersList = (filters: Filter[], appliedFilters: AppliedFilter[]) => {
  const filtersMap = new Map()
  filters.forEach((filter) => filtersMap.set(filter.id, filter))
  return appliedFilters.reduce((acc, res) => {
    return [...acc, filtersMap.get(res.urlParam.key)?.label]
  }, [])
}

export const sortMenuItems: SortMenuItem[] = [
  { label: 'Featured', key: 'featured' },
  {
    label: 'Price: Low - High',
    key: 'price-low-high',
  },
  {
    label: 'Price: High - Low',
    key: 'price-high-low',
  },
  {
    label: 'Best Sellers',
    key: 'best-selling',
  },
  {
    label: 'Newest',
    key: 'newest',
  },
]
