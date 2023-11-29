import { useBaazarVoice } from '~/hooks/useBaazarvoice'

interface RatingSummaryProps {
  productId: string
  className?: string
}

export const RatingSummary = ({ productId, className }: RatingSummaryProps) => {
  useBaazarVoice()

  return <div data-bv-show="rating_summary" data-bv-product-id={productId} className={className} />
}
