import { useBaazarVoice } from '~/hooks/useBaazarvoice'

interface ReviewHighlightsProps {
  productId: string
}

export const ReviewHighlights = ({ productId }: ReviewHighlightsProps) => {
  useBaazarVoice()

  return <div data-bv-show="review_highlights" data-bv-product-id={productId} />
}
