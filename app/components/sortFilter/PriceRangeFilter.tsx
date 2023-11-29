import { useLocation, useNavigate } from '@remix-run/react'
import { SyntheticEvent, useMemo, useState } from 'react'
import { useDebounce } from 'react-use'

import { filterInputToParams } from './SortFilter.helpers'
import { PriceRangeFilterProps } from './SortFilter.types'

export function PriceRangeFilter({ max, min }: PriceRangeFilterProps) {
  const PRICE_RANGE_FILTER_DEBOUNCE = 500
  const location = useLocation()
  const params = useMemo(() => new URLSearchParams(location.search), [location.search])
  const navigate = useNavigate()

  const [minPrice, setMinPrice] = useState(min ? String(min) : '')
  const [maxPrice, setMaxPrice] = useState(max ? String(max) : '')

  useDebounce(
    () => {
      if ((minPrice === '' || minPrice === String(min)) && (maxPrice === '' || maxPrice === String(max))) return

      const price: { min?: string; max?: string } = {}
      if (minPrice !== '') price.min = minPrice
      if (maxPrice !== '') price.max = maxPrice

      const newParams = filterInputToParams('PRICE_RANGE', { price }, params)
      navigate(`${location.pathname}?${newParams.toString()}`, { replace: true })
    },
    PRICE_RANGE_FILTER_DEBOUNCE,
    [minPrice, maxPrice],
  )

  const onChangeMax = (event: SyntheticEvent) => {
    const newMaxPrice = (event.target as HTMLInputElement).value
    setMaxPrice(newMaxPrice)
  }

  const onChangeMin = (event: SyntheticEvent) => {
    const newMinPrice = (event.target as HTMLInputElement).value
    setMinPrice(newMinPrice)
  }

  return (
    <div className="flex flex-col px-2">
      <label htmlFor="minPrice" className="mb-4">
        <input
          name="minPrice"
          className="text-black"
          type="number"
          defaultValue={min}
          placeholder="From"
          onChange={onChangeMin}
        />
      </label>
      <label htmlFor="maxPrice">
        <input
          className="text-black"
          name="maxPrice"
          type="number"
          defaultValue={max}
          placeholder="To"
          onChange={onChangeMax}
        />
      </label>
    </div>
  )
}
