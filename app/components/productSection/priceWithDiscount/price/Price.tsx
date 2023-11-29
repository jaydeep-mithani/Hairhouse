import { Money } from '@shopify/hydrogen'
import { MoneyV2 } from '@shopify/hydrogen/storefront-api-types'

import styles from './Price.module.css'

interface PriceProps {
  price: MoneyV2
}

export const Price: React.FC<PriceProps> = ({ price }) => {
  return (
    <div className={`${styles.container} ${styles.price}`}>
      $<Money withoutCurrency withoutTrailingZeros className={styles.price} data={price} as="span" />
    </div>
  )
}
