import { Money } from '@shopify/hydrogen'
import { MoneyV2 } from '@shopify/hydrogen/storefront-api-types'

import styles from './CompareAtPrice.module.css'

interface CompareAtPriceProps {
  price: MoneyV2
}

export const CompareAtPrice: React.FC<CompareAtPriceProps> = ({ price }) => {
  if (!price?.amount) {
    return null
  }

  return (
    <div className={`${styles.container} ${styles.priceOnSale}`}>
      $<Money withoutTrailingZeros withoutCurrency className={styles.priceOnSale} data={price} as="span" />
    </div>
  )
}
