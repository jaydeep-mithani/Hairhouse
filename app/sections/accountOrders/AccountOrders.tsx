import { Button, Typography } from '@overdose/components'
import clsx from 'clsx'

import { mock } from './AccountOrders.mock'
import styles from './AccountOrders.module.css'
import { AccountOrdersProps } from './AccountOrders.types'
import { EmptyOrders } from './EmptyOrders'
import { Orders } from './Orders'

export const AccountOrders = ({ orders, isMainPage = mock.isMainPage }: AccountOrdersProps) => {
  if (!orders) {
    return null
  }
  return (
    <div
      className={clsx({
        'mb-[60px] md:mb-20': isMainPage,
      })}>
      <div className="flex justify-between items-center">
        <Typography tag="p" variant={!isMainPage ? 'displayLarge' : 'pageheading'}>
          {!isMainPage ? 'Orders' : 'Recent orders'}
        </Typography>
        {isMainPage && (
          <Button
            variant="text"
            prefetch="intent"
            href="/account/orders"
            theme={{
              root: clsx(
                styles.thinText,
                styles.btnLink,
                'underline underline-offset-4 whitespace-nowrap w-[47px] overflow-hidden md:w-max',
              ),
            }}>
            <Typography tag="p" variant="body" theme={{ root: 'relative left-5 md:left-0' }}>
              View all orders
            </Typography>
          </Button>
        )}
      </div>
      {orders?.length ? <Orders orders={orders} isMainPage={isMainPage} /> : <EmptyOrders />}
    </div>
  )
}
