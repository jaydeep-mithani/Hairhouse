import { Typography } from '@overdose/components'
import { Money, useMoney } from '@shopify/hydrogen'
import { isDiscounted } from '~/lib/utils'
import clsx from 'clsx'

import styles from '../Cart.module.css'
import { CartLinePriceProps } from '../Cart.types'

export function CartLinePrice({ line, priceType = 'regular', className, ...passthroughProps }: CartLinePriceProps) {
  const amountPerQuantity = line?.cost?.amountPerQuantity
  if (!amountPerQuantity || !line?.cost?.totalAmount) return null
  const { currencyNarrowSymbol } = useMoney(line?.cost?.totalAmount || '')
  const compareAtAmountPerQuantity = line?.cost?.compareAtAmountPerQuantity
  const totalCompareAtAmount = compareAtAmountPerQuantity
    ? {
        ...compareAtAmountPerQuantity,
        amount: (compareAtAmountPerQuantity.amount * line.quantity).toFixed(2),
      }
    : null

  const moneyV2 = () => {
    switch (priceType) {
      case 'perQuantity':
        return line.cost.amountPerQuantity

      case 'compareAt':
        return compareAtAmountPerQuantity

      default:
        return line.cost.totalAmount
    }
  }

  return (
    <Typography
      tag="p"
      variant="body"
      theme={{
        root: clsx(styles.cartLinePrice, className),
      }}>
      <span>
        {currencyNarrowSymbol}
        <Money withoutCurrency {...passthroughProps} data={moneyV2()} as="span" />
      </span>
      {isDiscounted(amountPerQuantity, compareAtAmountPerQuantity) && (
        <CompareAtPrice
          className="opacity-50"
          data={priceType === 'perQuantity' ? compareAtAmountPerQuantity : totalCompareAtAmount}
        />
      )}
    </Typography>
  )
}

function CompareAtPrice({ data, className }: { data: MoneyV2; className?: string }) {
  const { currencyNarrowSymbol, amount } = useMoney(data)

  const styles = clsx('line-through', className)

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {amount}
    </span>
  )
}
