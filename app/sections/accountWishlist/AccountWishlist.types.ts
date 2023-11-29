import type { Product } from '@shopify/hydrogen/storefront-api-types'
import { Wishlist } from '~/routes/($lang)/account/types'

export type AccountWishlistProps = {
  wishlist?: Wishlist
  removeWishlist: (id: string) => Promise<Response>
  removeProductFromWishlist: (wishlistId: string, productId: string) => Promise<Response>
  productsFull?: {
    nodes: Product[]
  }
  updateWishlistTitle: (wishlistId: string, newTitle: string) => Promise<Response>
}
