import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { Link, NoImagePlaceholder } from '~/components'
import { GlobalLoaderContext } from '~/provider/globalLoader'
import clsx from 'clsx'
import { useContext } from 'react'

import styles from '../Cart.module.css'
import { CartLineItemProps } from '../Cart.types'
import { CartLinePrice } from './CartLinePrice'
import { CartLineQuantityAdjust } from './CartLineQuantityAdjust'
import { ItemMoveToWishlist } from './ItemMoveToWishlist'
import { ItemRemoveButton } from './ItemRemoveButton'

export function CartLineItem({ line, layout = 'drawer' }: CartLineItemProps) {
  const { setIsLoaderShown } = useContext(GlobalLoaderContext)
  if (!line?.id) return null

  const { id, quantity, merchandise } = line

  if (typeof quantity === 'undefined' || !merchandise?.product) return null

  return (
    <li key={id} className={clsx(styles.cartLineItemWrapper, { [styles.cartLineItemPageWrapper]: layout === 'page' })}>
      <div className="flex-shrink">
        {merchandise?.image?.url ? (
          <Image
            width={220}
            height={220}
            data={merchandise.image}
            className={clsx('object-cover object-center max-w-fit', {
              'w-[100px] h-[100px]': layout === 'drawer',
              'w-[90px] h-[90px] lg:w-[80px] lg:h-[80px]': layout === 'page',
            })}
            alt={merchandise?.title}
          />
        ) : (
          <NoImagePlaceholder
            viewBox="150 150 250 250"
            className={clsx('object-cover object-center max-w-fit', {
              'w-[100px] h-[100px]': layout === 'drawer',
              'w-[90px] h-[90px] lg:w-[80px] lg:h-[80px]': layout === 'page',
            })}
          />
        )}
      </div>

      <div
        className={clsx(
          layout === 'page'
            ? 'grid lg:grid-cols-[2fr_0.5fr_0.5fr] w-full gap-3 lg:items-center'
            : 'flex justify-between flex-grow',
        )}>
        <div className="grid gap-1">
          <Typography tag="p" variant="caption" theme={{ root: styles.lineItemVendor }}>
            {merchandise?.product?.vendor}
          </Typography>
          <Typography
            tag="p"
            variant="subheading"
            weight="heavy"
            theme={{ root: clsx(styles.lineItemTitle, { [styles.lineItemTitleCartPage]: layout === 'page' }) }}>
            {merchandise?.product?.handle ? (
              <Link to={`/products/${merchandise.product.handle}`}>{merchandise?.product?.title || ''}</Link>
            ) : (
              merchandise?.product?.title || ''
            )}
          </Typography>
          <div
            className={clsx('flex items-center ', {
              'gap-5': layout === 'drawer',
              'gap-3 lg:gap-5': layout === 'page',
            })}>
            <div className={clsx('flex justify-start text-copy', { 'lg:hidden': layout === 'page' })}>
              <CartLineQuantityAdjust line={line} setIsLoaderShown={setIsLoaderShown} />
            </div>
            {layout === 'page' && (
              <CartLinePrice line={line} as="span" priceType="perQuantity" className="hidden lg:flex" />
            )}
            <CartLinePrice line={line} as="span" className={clsx({ 'lg:hidden': layout === 'page' })} />
          </div>
          <div className={clsx('flex flex-row items-baseline gap-4', { '-mt-[2px] lg:-mt-[9px]': layout === 'page' })}>
            <ItemRemoveButton lineIds={[id]} setIsLoaderShown={setIsLoaderShown} />
            <ItemMoveToWishlist
              productId={line.merchandise.product.id}
              lineIds={[id]}
              setIsLoaderShown={setIsLoaderShown}
            />
          </div>
        </div>
        {layout === 'page' && (
          <div className="hidden lg:flex lg:justify-end lg:text-copy">
            <CartLineQuantityAdjust line={line} setIsLoaderShown={setIsLoaderShown} />
          </div>
        )}
        {layout === 'page' && (
          <div className="hidden lg:flex lg:justify-end lg:text-copy">
            <CartLinePrice line={line} as="span" className="flex-col-reverse" />
          </div>
        )}
      </div>
    </li>
  )
}
