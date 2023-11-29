import { Typography, Button } from '@overdose/components'
import clsx from 'clsx'
import moment from 'moment'

import styles from './AccountOrders.module.css'
import { AccountOrder } from './AccountOrders.types'

const STATUSES = {
  PROCESSING: 'Processing',
  COMPLETED: 'Completed',
}

export const OrderCard = ({ order }: { order: AccountOrder }) => {
  if (!order?.id) return null

  // Order.id contains legacyOrderId and key, we get them into separate variables
  const [legacyOrderId, key] = order!.id!.split('/').pop()!.split('?')
  const { orderNumber, processedAt, fulfillmentStatus, currentTotalPrice } = order
  return (
    <li className={clsx('px-[14px] py-5 h-full md:h-[70px]', styles.orderBorder, styles.grid)}>
      {orderNumber && (
        <Typography
          tag="p"
          variant="body"
          theme={{ root: clsx('flex gap-0.5 md:block w-max md:w-[130px] mb-4 md:mb-0', styles.orderNumber) }}>
          <span className="block md:hidden">Order</span>#{orderNumber}
        </Typography>
      )}
      {processedAt && (
        <Typography
          tag="p"
          variant="body"
          theme={{
            root: clsx(styles.orderProcessed, styles.orderSubText, 'whitespace-nowrap w-[140px] mb-[9px] md:mb-0'),
          }}>
          {moment(processedAt).format('ddd, DD MMMM YYYY')}
        </Typography>
      )}
      {currentTotalPrice?.amount && (
        <Typography
          tag="p"
          variant="body"
          theme={{ root: clsx(styles.orderPrice, styles.orderSubText, 'w-[100px] xl:w-[130px] mb-3 md:mb-0') }}>
          ${currentTotalPrice.amount}
        </Typography>
      )}
      {fulfillmentStatus && (
        <div
          className={clsx('w-[94px] h-[30px] flex justify-center items-center', styles.orderStatus, {
            [styles.orderCompleted]: fulfillmentStatus === 'FULFILLED',
            [styles.orderProcessing]: fulfillmentStatus !== 'FULFILLED',
          })}>
          <Typography tag="p" variant="caption">
            {fulfillmentStatus === 'FULFILLED' ? STATUSES.PROCESSING : STATUSES.COMPLETED}
          </Typography>
        </div>
      )}
      {legacyOrderId && key && (
        <Button
          variant="link"
          prefetch="intent"
          href={`/account/orders/${legacyOrderId}?${key}`}
          theme={{
            root: clsx(
              styles.thinText,
              styles.btnLink,
              'underline underline-offset-4 whitespace-nowrap justify-start md:justify-end',
            ),
          }}>
          <Typography tag="span" variant="body" theme={{ root: styles.orderLink }}>
            View order details
          </Typography>
        </Button>
      )}
    </li>
  )
}
