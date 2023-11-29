import { Button } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { CartAction, WishlistAction } from '~/lib/type'
import { DrawersContext } from '~/provider/drawersContext'
import { useEffect, useContext } from 'react'

import styles from '../Cart.module.css'
import { ItemActionButtonProps } from '../Cart.types'

export function ItemMoveToWishlist({ productId, lineIds, setIsLoaderShown }: ItemActionButtonProps) {
  const fetcher = useFetcher()
  const { isCartOpen, closeCart, openLogin } = useContext(DrawersContext)
  const isAdding = fetcher.state === 'submitting' || fetcher.state === 'loading'

  useEffect(() => {
    setIsLoaderShown(isAdding)

    if (
      !isAdding &&
      fetcher?.data &&
      fetcher.data?.products &&
      fetcher?.data?.products?.find((product) => product.id.toString() === fetcher.data.addedItemId)
    ) {
      fetcher.submit(
        {
          cartAction: CartAction.REMOVE_FROM_CART,
          linesIds: JSON.stringify(lineIds),
        },
        { method: 'post', action: '/cart' },
      )
    } else if (!isAdding && fetcher?.data && !fetcher?.data?.isUserLoggedIn) {
      isCartOpen && closeCart && closeCart()
      openLogin && openLogin()
    }
    return () => setIsLoaderShown(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher])

  return (
    <Button
      variant="link"
      onClick={() => {
        fetcher.submit(
          {
            wishlistAction: WishlistAction.ADD_ITEM_TO_WISHLIST,
            productId,
          },
          { method: 'post', action: '/wishlist' },
        )
      }}
      theme={{
        root: styles.actionButton,
      }}>
      Save for later
    </Button>
  )
}
