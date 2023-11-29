import { Link, Typography } from '@overdose/components'
import PointsIcon from '~/assets/PointsIcon'
import { Container } from '~/components/container'
import { Gap } from '~/components/productSection/Gap'

import styles from './RewardPoints.module.css'

interface RewardPointsProps {
  productPrice: number
  pointsMultiplication?: number
}

export const RewardPoints: React.FC<RewardPointsProps> = ({ productPrice, pointsMultiplication }) => {
  const pointsEarned = pointsMultiplication ? Math.round(productPrice * pointsMultiplication) : Math.round(productPrice)

  return (
    <Container alignItems="center">
      <PointsIcon />
      <Gap gap="10px" mobileGap="10px" />
      <Typography variant="caption" font="bold" theme={{ root: styles.points }}>
        Earn {pointsEarned} points
      </Typography>
      <Gap gap="8px" mobileGap="8px" />
      <Link className={styles.signIn} to="/account/login">
        <Typography tag="span" variant="caption">
          Sign up
        </Typography>
      </Link>
    </Container>
  )
}
