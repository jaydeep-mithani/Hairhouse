import { Metafield, Maybe } from '@shopify/hydrogen/storefront-api-types'

export interface SaleTagProps {
  isOnSale: Maybe<Metafield | undefined>
  packValueAt?: Maybe<Metafield | undefined>
}
