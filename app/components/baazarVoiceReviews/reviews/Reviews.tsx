import { useBaazarVoice } from '~/hooks/useBaazarvoice'

interface ReviewsProps {
  productId: string
}

export const Reviews = ({ productId }: ReviewsProps) => {
  useBaazarVoice()

  return <div data-bv-show="reviews" data-bv-product-id={productId} />
}
