import { Typography, Button } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import clsx from 'clsx'

import styles from './AccountWishlists.module.css'
import { AccountWishlistType } from './AccountWishlists.types'

export const WishListBlock = ({ wishList }: { wishList: AccountWishlistType }) => {
  const { products, id, customerid } = wishList
  const title = wishList.wishlist_title
  const wishlistId = id.replace(/\D/g, '')
  return (
    <div className={clsx(styles.wishListBorder, 'p-4 md:p-6')}>
      <div className="mb-3 flex justify-between">
        <div className="flex flex-col gap-y-1">
          {title && (
            <Typography tag="p" variant="subheading" weight="bold" theme={{ root: styles.wishListTitle }}>
              {title}
            </Typography>
          )}
          {products ? (
            <Typography tag="p" variant="body" theme={{ root: clsx(styles.thinText, styles.subText) }}>
              {products.length}
              {products.length === 1 ? ' item' : ' items'}
            </Typography>
          ) : null}
        </div>
        <Button
          variant="solid"
          status="secondary"
          theme={{
            root: clsx('w-[63px] md:w-[100px]', {
              'w-[120px] md:w-[120px]': !products.length,
            }),
          }}
          href={products.length ? `/account/wishlists/${customerid}?id=${wishlistId}` : '/'}>
          {products.length ? 'View' : 'Add products'}
        </Button>
      </div>
      <div className="flex gap-x-[6px] overflow-hidden">
        {products &&
          products.map((item) => {
            const { image, title, id } = item
            return (
              <div className={clsx(styles.wishListBorder, styles.wishListImage, 'shrink-0')} key={id}>
                <Image data={{ url: image?.src, width: 80, height: 80, altText: title }} />
              </div>
            )
          })}
      </div>
    </div>
  )
}
