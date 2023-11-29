import { Typography } from '@overdose/components'
import { useLoaderData } from '@remix-run/react'
import { useMoney, Image } from '@shopify/hydrogen'
import clsx from 'clsx'

import styles from '../Cart.module.css'
import { CartSummaryProps } from '../Cart.types'
import { CartCheckoutActions } from './CartCheckoutActions'

export function CartSummary({ cart, layout, onClose, children = null }: CartSummaryProps) {
  const { currencyNarrowSymbol, amount } = useMoney(cart.cost?.subtotalAmount || { currencyCode: 'AUD' })
  const { footer } = useLoaderData<typeof loader>()
  const paymentLogos = footer?.paymentLogos

  const summary = {
    drawer: 'grid gap-1 p-6 lg:pb-4 lg:pt-8 border-t px-6 md:px-12',
    page: 'sticky  grid gap-4 p-6 bg-[var(--color-brand-secondary-light-brown)] w-full',
  }

  return (
    <section aria-labelledby="summary-heading" className={summary[layout]}>
      <Typography
        tag="h2"
        variant="displayMedium"
        id="summary-heading"
        theme={{
          root: clsx(layout === 'drawer' ? 'sr-only' : ''),
        }}>
        Order summary
      </Typography>
      {children}
      <dl className="grid">
        <div className="flex items-center justify-between font-medium">
          <Typography
            tag="p"
            variant="bodyLarge"
            weight="bold"
            theme={{
              root: styles.textSubtotal,
            }}>
            Subtotal {layout === 'page' && `(${cart.totalQuantity} ${cart.totalQuantity > 1 ? 'items' : 'item'})`}
          </Typography>
          <Typography
            tag="p"
            variant="bodyLarge"
            weight={layout === 'page' ? 'bold' : 'light'}
            theme={{
              root: styles.textSubtotal,
            }}>
            {cart.cost?.subtotalAmount?.amount ? (
              <span className={styles}>
                {currencyNarrowSymbol}
                {amount}
              </span>
            ) : (
              '-'
            )}
          </Typography>
        </div>
      </dl>
      <CartCheckoutActions checkoutUrl={cart.checkoutUrl} onClose={onClose} layout={layout} />
      {layout === 'page' && !!paymentLogos?.length && (
        <div className="flex flex-row gap-1 items-center justify-center">
          {paymentLogos.map((paymentLogo) => {
            return <Image key={paymentLogo.id} alt={paymentLogo?.altText} data={paymentLogo} />
          })}
        </div>
      )}
    </section>
  )
}
