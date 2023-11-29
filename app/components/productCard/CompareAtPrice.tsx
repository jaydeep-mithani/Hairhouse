import { useMoney } from '@shopify/hydrogen'
import clsx from 'clsx'

import { CompareAtPriceProps } from './ProductCard.types'

export function CompareAtPrice({ data, className }: CompareAtPriceProps) {
  const { currencyNarrowSymbol, withoutTrailingZerosAndCurrency } = useMoney(data)
  if (isNaN(withoutTrailingZerosAndCurrency)) {
    return null
  }

  const styles = clsx('line-through', className)

  if (isNaN(withoutTrailingZerosAndCurrency)) {
    return null
  }
  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  )
}
