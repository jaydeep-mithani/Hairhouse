import { ShopifyAnalyticsProduct } from '@shopify/hydrogen'
import { Product, ProductVariant } from '@shopify/hydrogen/storefront-api-types'

export interface GiftCardPDPFormProps {
  product: Product
  analytics?: {
    pageType: 'product'
    resourceId: string
    products: ShopifyAnalyticsProduct[]
    totalValue: number
  }
  selectedVariant: ProductVariant
}
