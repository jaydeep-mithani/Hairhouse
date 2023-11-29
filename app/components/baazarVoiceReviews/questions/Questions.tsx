import { useBaazarVoice } from '~/hooks/useBaazarvoice'

interface QuestionsProps {
  productId: string
}

export const Questions = ({ productId }: QuestionsProps) => {
  useBaazarVoice()

  return <div data-bv-show="questions" data-bv-product-id={productId} />
}
