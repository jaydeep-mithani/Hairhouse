import { Typography } from '@overdose/components'
import { IconEmptyOrders } from '~/components'
import clsx from 'clsx'

import styles from './AccountOrders.module.css'

export const EmptyOrders = () => {
  return (
    <div className={clsx('flex flex-col justify-center items-center w-full mb-15 md:mb-20', styles.ordersEmpty)}>
      <IconEmptyOrders />
      <Typography tag="p" variant="bodyLarge" theme={{ root: clsx(styles.thinText, 'mt-3') }}>
        You have not placed any orders
      </Typography>
    </div>
  )
}
