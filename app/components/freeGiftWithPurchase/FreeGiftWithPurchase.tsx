import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { FC } from 'react'

import { Container } from '../container'
import styles from './FreeGiftWithPurchase.module.css'

interface FreeGiftWithPurchaseProps {
  productPageLabel?: string
  image: {
    width: number
    height: number
    url: string
    altText?: string | null
  }
  description?: string | null
}

export const FreeGiftWithPurchase: FC<FreeGiftWithPurchaseProps> = ({ productPageLabel, description, image }) => {
  return (
    <div className={styles.root}>
      {image && <Image data={image} alt={image.altText ?? undefined} className={styles.image} width={60} />}
      <Container flexDirection="column" gap="2px">
        <Typography tag="p" variant="body" theme={{ root: styles.title }}>
          {productPageLabel}
        </Typography>
        {description && (
          <Typography
            tag="p"
            variant="body"
            theme={{ root: styles.description }}
            style={{ fontSize: '10px' }}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        )}
      </Container>
    </div>
  )
}

export default FreeGiftWithPurchase
