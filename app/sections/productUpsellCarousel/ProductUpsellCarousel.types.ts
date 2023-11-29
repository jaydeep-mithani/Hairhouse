import { Product } from '@shopify/hydrogen/storefront-api-types'
import { SerializeFrom } from '@shopify/remix-oxygen'

export type ProductUpsellCarouselProps = {
  products: Array<SerializeFrom<Product>>
}
