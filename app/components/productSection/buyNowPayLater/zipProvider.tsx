import { Typography } from '@overdose/components'
import ZipIcon from '~/assets/ZipIcon'

import styles from './BuyNowPayLater.module.css'

interface ZipProviderProps {
  amount: number
}

const PAYMENTS_COUNT = 4
const CURRENCY_PRECISION = 2

const ZipProvider: React.FC<ZipProviderProps> = ({ amount }) => {
  const installmentAmount = amount / PAYMENTS_COUNT

  return (
    <div className={styles.providerContainer}>
      <Typography theme={{ root: styles.typography }} variant="caption">
        4 payments of ${installmentAmount.toFixed(CURRENCY_PRECISION)}
      </Typography>
      <ZipIcon grayscale />
    </div>
  )
}

export default ZipProvider
