import { Typography } from '@overdose/components'
import { flattenConnection } from '@shopify/hydrogen'
import clsx from 'clsx'
import { useRef } from 'react'
import { useScroll } from 'react-use'

import styles from '../Cart.module.css'
import { CartLinesProps } from '../Cart.types'
import { CartLineItem } from './CartLineItem'
import { CartRecommendations } from './CartRecommendations'

export function CartLines({ layout = 'drawer', lines: cartLines }: CartLinesProps) {
  const currentLines = cartLines ? flattenConnection(cartLines) : []
  const scrollRef = useRef(null)
  const { y } = useScroll(scrollRef)
  const columns = ['Product', 'Quantity', 'Price']

  const className = clsx([
    y > 0 ? 'border-t' : '',
    layout === 'page'
      ? 'flex-grow md:translate-y-4'
      : 'flex flex-col justify-between px-6 sm-max:pt-2 overflow-auto transition md:px-12',
  ])

  return (
    <section ref={scrollRef} aria-labelledby="cart-contents" className={className}>
      {layout === 'page' && (
        <div className={styles.cartLinesTitleWrapper}>
          {columns.map((column, index) => (
            <Typography tag="p" variant="body" weight="heavy" theme={{ root: styles.cartLinesTitle }} key={index}>
              {column}
            </Typography>
          ))}
        </div>
      )}
      <ul
        className={clsx('grid', {
          [styles.cartLineItemsWrapper]: layout === 'drawer',
          'gap-6 md:gap-10': layout === 'drawer',
          [styles.cartLineItemsWrapperPage]: layout === 'page',
          'gap-4 md:gap-[20px]': layout === 'page',
        })}>
        {currentLines.map((line) => (
          <CartLineItem key={line.id} line={line as CartLine} layout={layout} />
        ))}
      </ul>
      {layout === 'drawer' && <CartRecommendations />}
    </section>
  )
}
