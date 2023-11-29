import { Typography } from '@overdose/components'
import { ProductCarousel } from '~/components'
import clsx from 'clsx'

import { recommendedProduct, giftProduct, termsAndConditions } from '../Cart.mock'
import styles from '../Cart.module.css'
import { CartDetailsProps } from '../Cart.types'
import { CrossSell } from '../CrossSell'
import { GiftCallout } from '../GiftCallout'
import { CartCheckoutActions } from './CartCheckoutActions'
import { CartDiscounts } from './CartDiscounts'
import { CartLines } from './CartLines'
import { CartSummary } from './CartSummary'
import { ProgressBar } from './ProgressBar'

export const CartDetails = ({ layout, cart, onClose, unbxdRecs }: CartDetailsProps) => {
  const isZeroCost = !cart || cart?.cost?.subtotalAmount?.amount === '0.0'

  const container = {
    drawer: clsx(
      styles.cartWrapper,
      'grid grid-cols-1 h-screen-no-nav grid-rows-[48px_51px_1fr_auto] lg:grid-rows-[43px_52px_1fr_auto]',
    ),
    page: 'px-4 pt-8 md:p-8 lg:px-12 lg:pt-16 w-full grid lg:grid-cols-[2fr_0.95fr] lg:items-start gap-[22px]  lg:gap-24',
  }

  return layout === 'drawer' ? (
    <div className={container[layout]}>
      {cart?.totalQuantity && (
        <Typography tag="p" variant="displayMedium" theme={{ root: styles.minicartTitle }}>
          Your bag ({cart?.totalQuantity})
        </Typography>
      )}
      <ProgressBar cart={cart} layout={layout} />
      <CartLines lines={cart?.lines} layout={layout} />

      {!isZeroCost && <CartSummary cart={cart} onClose={onClose} layout={layout} />}
    </div>
  ) : (
    <div className="w-full overflow-hidden">
      <div className={container[layout]}>
        <div>
          <Typography tag="p" variant="displayLarge" theme={{ root: styles.cartTitle }}>
            My bag ({cart?.totalQuantity})
          </Typography>
          <CartCheckoutActions
            checkoutUrl={cart.checkoutUrl}
            onClose={onClose}
            layout={layout}
            className="py-5 border-b-[1px] border-b-[var(--color-border-line-primary)] mb-4 lg:hidden"
          />
          <CartLines lines={cart?.lines} layout={layout} />
          <CrossSell product={recommendedProduct} className="mt-5 lg:mt-16" />
          <GiftCallout product={giftProduct} className="mt-5 lg:mt-12" termsAndConditions={termsAndConditions} />
        </div>
        {!isZeroCost && (
          <CartSummary cart={cart} layout={layout} onClose={onClose}>
            <ProgressBar cart={cart} layout={layout} />
          </CartSummary>
        )}
      </div>
      {layout === 'page' && <ProductCarousel data={unbxdRecs} className={styles.productCarousel} />}
    </div>
  )
}
