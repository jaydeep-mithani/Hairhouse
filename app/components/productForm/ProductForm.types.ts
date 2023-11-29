import { ShopifyAnalyticsProduct } from '@shopify/hydrogen'
import { Metafield, Product, ProductVariant, Maybe } from '@shopify/hydrogen/storefront-api-types'

export type ProductFormProps = {
  product: Product
  analytics?: {
    pageType: 'product'
    resourceId: string
    products: ShopifyAnalyticsProduct[]
    totalValue: number
  }
  selectedVariant: ProductVariant
  sizeAndColorProductData?: SizeAndColorProductData
  isOnSale?: Maybe<Metafield | undefined>
  packValueAt?: Maybe<Metafield | undefined>
}

type ProductNode = {
  handle: string
  metafields: Metafield[]
}

type SizeAndColorProductData = {
  nodes: ProductNode[]
}
