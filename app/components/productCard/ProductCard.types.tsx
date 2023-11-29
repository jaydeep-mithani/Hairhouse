import type { Product, MoneyV2 } from '@shopify/hydrogen/storefront-api-types'
import { SerializeFrom } from '@shopify/remix-oxygen'

export type ProductCardProps = {
  product: SerializeFrom<Product>
  label?: string
  className?: string
  loading?: HTMLImageElement['loading']
  onClick?: () => void
  quickAdd?: boolean
  wishAdd?: boolean
  isRatting?: number
  totalRatting?: number
  productTag?: boolean
  placement?: string
}

export enum ProductCardPlacement {
  MINICART = 'miniCart',
  INSTANTSEARCH = 'instantSearch',
  RECOMMENDATIONS = 'productRecommendation',
}

export interface CompareAtPriceProps {
  data: MoneyV2
  className?: string
}
