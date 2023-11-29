import { Typography, Select, Option } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { CartAction } from '~/lib/type'
import { useEffect } from 'react'

import styles from '../Cart.module.css'
import { CartLineItemProps } from '../Cart.types'

export function CartLineQuantityAdjust({ line, setIsLoaderShown }: CartLineItemProps) {
  const fetcher = useFetcher()

  useEffect(() => {
    setIsLoaderShown(fetcher.state !== 'idle')
  }, [fetcher])

  if (!line || typeof line?.quantity === 'undefined') return null
  const { id: lineId, quantity } = line
  const quantityOptions = new Array(9).fill(null).map((it, index) => index + 1)
  return (
    <>
      <label htmlFor={`quantity-${lineId}`} className="sr-only">
        Quantity, {quantity}
      </label>
      <Select
        name={quantity}
        value={quantity}
        theme={{
          root: styles.cartLineQuantitySelect,
        }}
        onChange={(value) => {
          fetcher.submit(
            { cartAction: CartAction.UPDATE_CART, lines: JSON.stringify([{ id: lineId, quantity: value }]) },
            { method: 'post', action: '/cart' },
          )
        }}>
        {quantityOptions.map((option, index) => {
          return (
            <Option key={index} value={option} label={option}>
              <Typography
                tag="p"
                variant="body"
                theme={{
                  root: styles.options,
                }}>
                {option}
              </Typography>
            </Option>
          )
        })}
      </Select>
    </>
  )
}
