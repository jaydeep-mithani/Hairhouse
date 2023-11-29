import { Typography } from '@overdose/components'
import { IconChevronLeft, IconChevronRight } from '~/components'
import clsx from 'clsx'
import { useState } from 'react'

import styles from './AccountOrders.module.css'
import { AccountOrdersProps } from './AccountOrders.types'
import { OrderCard } from './OrderCard'

export const OrdersPagination = ({
  orders,
  paginationSize,
}: {
  orders: AccountOrdersProps['orders']
  paginationSize: number
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(orders.length / paginationSize)
  const indexOfLastOrder = currentPage * paginationSize
  const indexOfFirstOrder = indexOfLastOrder - paginationSize
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)

  const getPageNumbers = (totalPages: number) => {
    const arr = []
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i)
    }
    return arr
  }

  const pageNumbers = getPageNumbers(totalPages)

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div>
      <ul>{currentOrders && currentOrders.map((order) => <OrderCard order={order} key={order.id} />)}</ul>
      <ul className="flex mt-5 md:mt-6 justify-center items-center gap-x-1">
        <li
          onClick={handlePrevClick}
          className={clsx('p-[7px] flex justify-center items-center', {
            hidden: currentPage === 1,
          })}>
          <IconChevronLeft width={18} height={18} />
        </li>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li
                key={number}
                className={clsx('w-8 h-8 flex justify-center items-center', styles.paginationNumber, {
                  [styles.paginationNumberActive]: currentPage === number,
                })}
                onClick={() => handlePageClick(number)}>
                <Typography variant="body" tag="p">
                  {number}
                </Typography>
              </li>
            )
          })}
        <li
          onClick={handleNextClick}
          className={clsx('p-[7px] flex justify-center items-center', {
            hidden: currentPage === totalPages,
          })}>
          <IconChevronRight width={18} height={18} />
        </li>
      </ul>
    </div>
  )
}
