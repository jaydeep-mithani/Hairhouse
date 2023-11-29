import { ProductHighlightsFragment } from './ProductHighlights.fragment.generated'

export type ProductHighlightsProps = {
  totalReviews: ProductHighlightsFragment['totalReviews']
  ratings: ProductHighlightsFragment['ratings']
  accordions: ProductHighlightsFragment['accordions']
  button: ProductHighlightsFragment['button']
  getProductByHandles: ProductHighlightsFragment['getProductByHandles']
}
