import { BaazarVoiceReviews } from '~/components/baazarVoiceReviews'
import { Questions } from '~/components/baazarVoiceReviews/questions'
import { ReviewHighlights } from '~/components/baazarVoiceReviews/reviewHighlights'
import { Reviews } from '~/components/baazarVoiceReviews/reviews'
import React from 'react'

import styles from './SectionProductReview.module.css'
import { SectionProductReviewProps } from './SectionProductReview.types'

export const SectionProductReview: React.FC<SectionProductReviewProps> = ({ ...rest }) => {
  const { product } = rest

  const netSuiteId = product?.metafields.find((metafield) => {
    return metafield && metafield.key === 'internalid' && metafield.value
  })

  return (
    <div className={styles.root}>
      {netSuiteId && (
        <BaazarVoiceReviews>
          <Reviews productId={netSuiteId.value} />
          <ReviewHighlights productId={netSuiteId.value} />
          <Questions productId={netSuiteId.value} />
        </BaazarVoiceReviews>
      )}
    </div>
  )
}
