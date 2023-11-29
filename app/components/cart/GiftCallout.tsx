import { Typography, Alert } from '@overdose/components'
import { Image, Money, flattenConnection } from '@shopify/hydrogen'
import { Link } from '~/components'
import { GlobalLoaderContext } from '~/provider/globalLoader'
import clsx from 'clsx'
import { useContext } from 'react'

import styles from './Cart.module.css'
import { GiftsProps } from './Cart.types'
import { ItemRemoveButton } from './cartComponents/ItemRemoveButton'

export const GiftCallout = ({ product, className, termsAndConditions }: GiftsProps) => {
  if (!product && !product?.variants) {
    return null
  }
  const firstVariant = flattenConnection(product?.variants)[0]
  const { setIsLoaderShown } = useContext(GlobalLoaderContext)

  // todo: replace mock id
  const id = 'gid://shopify/CartLine/da8eec11-0ad2-4691-9c4f-8dd63ad57dba?cart=c1-b3ef169ed79a43e40599b6f00d249153'

  const price =
    Number(firstVariant?.price?.amount) === 0
      ? 'FREE'
      : !!firstVariant?.price && <Money data={firstVariant.price} as="span" />

  return (
    <div className={className}>
      <Typography tag="p" variant="displaySmall" theme={{ root: styles.giftCalloutTitle }}>
        Your free gift
      </Typography>
      <div className={styles.productWrapper}>
        {firstVariant?.image && (
          <Image
            width={220}
            height={220}
            data={firstVariant.image}
            className="object-cover object-center max-w-fit w-[90px] h-[90px] p-[10px]  lg:w-[80px] lg:h-[80px] lg:p-[10px] bg-[var(--color-background-primary)]"
            alt={product.title}
          />
        )}
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col justify-center items-start">
            <Typography
              tag="p"
              variant="subheading"
              weight="heavy"
              theme={{ root: clsx(styles.lineItemTitle, styles.lineItemTitleCartPage) }}>
              {product?.handle ? (
                <Link to={`/products/${product.handle}`}>{product?.title || ''}</Link>
              ) : (
                product?.title || ''
              )}
            </Typography>
            <Typography tag="p" variant="body" theme={{ root: 'pt-1 lg:hidden' }}>
              {price}
            </Typography>
            {termsAndConditions && <Alert content={termsAndConditions} theme={{ root: styles.alert }} />}
            <ItemRemoveButton
              lineIds={[id]}
              setIsLoaderShown={setIsLoaderShown}
              customTitle="Remove my gift"
              className={styles.removeGiftButton}
            />
          </div>
          <Typography tag="p" variant="body" theme={{ root: 'hidden lg:flex' }}>
            {price}
          </Typography>
        </div>
      </div>
    </div>
  )
}
