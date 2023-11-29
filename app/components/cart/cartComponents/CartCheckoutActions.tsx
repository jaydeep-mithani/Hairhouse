import { Button } from '@overdose/components'
import clsx from 'clsx'

import styles from '../Cart.module.css'
import { CartCheckoutActionsProps } from '../Cart.types'

export function CartCheckoutActions({ checkoutUrl, onClose, layout, className }: CartCheckoutActionsProps) {
  if (!checkoutUrl) return null

  const wrapper = {
    drawer: 'flex flex-col mt-2 gap-3',
    page: 'flex flex-col gap-3',
  }

  return (
    <div className={clsx(wrapper[layout], className)}>
      <Button
        variant="solid"
        status="primary"
        href={layout === 'drawer' ? '/cart' : checkoutUrl}
        theme={{
          root: styles.button,
        }}>
        {layout === 'drawer' ? 'View Bag' : 'Checkout Now'}
      </Button>
      {layout === 'drawer' && (
        <Button
          variant="link"
          status="primary"
          onClick={onClose}
          theme={{
            root: styles.buttonLink,
          }}>
          Continue Shopping
        </Button>
      )}
    </div>
  )
}
