import { CartProps } from './Cart.types'
import { CartDetails } from './cartComponents/CartDetails'
import { CartEmpty } from './cartComponents/CartEmpty'

export const Cart = ({ layout, onClose, cart, unbxdRecs }: CartProps) => {
  const linesCount = Boolean(cart?.lines?.edges?.length || 0)

  return linesCount ? (
    <CartDetails cart={cart} layout={layout} onClose={onClose} unbxdRecs={unbxdRecs} />
  ) : (
    <CartEmpty hidden={linesCount} onClose={onClose} layout={layout} unbxdRecs={unbxdRecs} />
  )
}
