import { Typography } from '@overdose/components'
import AfterpayIcon from '~/assets/AfterpayIcon'

import styles from './BuyNowPayLater.module.css'

interface AfterpayProviderProps {
  amount: number
}

const PAYMENTS_COUNT = 6
const CURRENCY_PRECISION = 2

const AfterpayProvider: React.FC<AfterpayProviderProps> = ({ amount }) => {
  const installmentAmount = amount / PAYMENTS_COUNT

  return (
    <div className={styles.providerContainer}>
      <Typography theme={{ root: styles.typography }} variant="caption">
        6 payments of ${installmentAmount.toFixed(CURRENCY_PRECISION)}
      </Typography>
      <AfterpayIcon grayscale />
    </div>
  )
}

export default AfterpayProvider
