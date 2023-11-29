import { Typography } from '@overdose/components'
import clsx from 'clsx'

import styles from './AccountOrders.module.css'
import { AccountOrdersProps } from './AccountOrders.types'
import { OrderCard } from './OrderCard'
import { OrdersPagination } from './OrdersPagination'

const TABLE_HEADERS = ['Order no.', 'Date', 'Total', 'Status']

export const Orders = ({
  orders,
  isMainPage,
}: {
  orders: AccountOrdersProps['orders']
  isMainPage?: AccountOrdersProps['isMainPage']
}) => {
  // This component is used on the /account page and on the /account/orders page. Only the last three orders are needed in /account, and since we receive all orders, we trim the array.

  const lastOrders = orders?.length > 3 ? orders.slice(0, 3) : orders
  const totalOrders = !isMainPage ? orders : lastOrders
  return (
    <>
      {!isMainPage && (
        <div className="md:mt-5 py-[18px] px-3 hidden md:grid grid-cols-[minmax(130px,_178px)_minmax(140px,_188px)_minmax(130px,_178px)_94px_minmax(129px,_1fr)]">
          {TABLE_HEADERS &&
            TABLE_HEADERS.map((item, index) => {
              return (
                <Typography variant="bodyLarge" weight="bold" tag="p" key={index} theme={{ root: styles.tableHeader }}>
                  {item}
                </Typography>
              )
            })}
        </div>
      )}
      <div
        className={clsx(styles.ordersBorder, {
          'mt-5': isMainPage,
          'mt-6 md:mt-0': !isMainPage,
        })}>
        {!isMainPage ? (
          <OrdersPagination orders={totalOrders} paginationSize={10} />
        ) : (
          <ul>
            {totalOrders.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
