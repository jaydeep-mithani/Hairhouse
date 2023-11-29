import { Typography } from '@overdose/components'
import { Image, Money, useMoney, flattenConnection } from '@shopify/hydrogen'
import { Link, AddToCartButton } from '~/components'
import clsx from 'clsx'

import styles from './Cart.module.css'
import { CrossSellProps } from './Cart.types'

export const CrossSell = ({ product, className }: CrossSellProps) => {
  if (!product && !product?.variants) {
    return null
  }
  const firstVariant = flattenConnection(product?.variants)[0]
  const { currencyNarrowSymbol } = useMoney(firstVariant.price)

  return (
    <div className={clsx(styles.crossSellWrapper, className)}>
      {firstVariant?.image && (
        <Image
          width={220}
          height={220}
          data={firstVariant.image}
          className="object-cover object-center max-w-fit w-[90px] h-[90px] p-[10px]  lg:w-[80px] lg:h-[80px] lg:p-[5px] bg-[var(--color-background-primary)]"
          alt={product.title}
        />
      )}
      <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between">
        <div className="flex flex-col">
          <Typography tag="p" variant="subheading" weight="heavy" theme={{ root: styles.productTitle }}>
            {product?.handle ? (
              <Link to={`/products/${product.handle}`}>{product?.title || ''}</Link>
            ) : (
              product?.title || ''
            )}
          </Typography>
          <Typography
            tag="p"
            variant="body"
            theme={{
              root: styles.price,
            }}>
            {!!firstVariant?.price?.amount && (
              <div>
                {currencyNarrowSymbol}
                <Money withoutCurrency data={firstVariant.price} as="span" />
              </div>
            )}
          </Typography>
        </div>
        <AddToCartButton
          width="auto"
          lines={[
            {
              quantity: 1,
              merchandiseId: firstVariant.id,
            },
          ]}
          variant="custom"
          className={styles.addToCartButton}>
          <Typography tag="p" variant="button">
            Add to Bag
          </Typography>
        </AddToCartButton>
      </div>
    </div>
  )
}
