import { Image } from '@overdose/components'

import styles from './PromotionLabel.module.css'
import { PromotionLabelProps } from './PromotionLabel.types'

export const PromotionLabel: React.FC<PromotionLabelProps> = ({ promotionLabel, promotionLabelIcon, badgeType }) => {
  const { backgroundColor, borderColor, color, label } = promotionLabel
  const { url, altText, width, height } = promotionLabelIcon || {}

  if (badgeType === 'Circle badge') {
    if (url) {
      return <Image src={url} alt={altText} width={width} height={height} />
    }

    if (label) {
      return (
        <div style={{ backgroundColor, borderColor, color }} className={styles.root}>
          {label}
        </div>
      )
    }
  }

  return null
}
