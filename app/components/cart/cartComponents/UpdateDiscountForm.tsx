import { useFetcher } from '@remix-run/react'
import { CartAction } from '~/lib/type'

import { UpdateDiscountFormProps } from '../Cart.types'

export function UpdateDiscountForm({ children }: UpdateDiscountFormProps) {
  const fetcher = useFetcher()
  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value={CartAction.UPDATE_DISCOUNT} />
      {children}
    </fetcher.Form>
  )
}
