import { Typography, Button } from '@overdose/components'
import clsx from 'clsx'

import styles from './AccountWishlists.module.css'
import { AccountWishlistsProps } from './AccountWishlists.types'
import { EmptyWishlists } from './EmptyWishlists'
import { WishListBlock } from './WishListBlock'

export const AccountWishlists = ({ wishlists }: AccountWishlistsProps) => {
  if (!wishlists) {
    return null
  }
  return (
    <>
      <div className="mb-6 md:mb-5 flex justify-between mt-8 lg:mt-0 flex-col md:flex-row gap-y-6 md:gap-y-0 pr-0 md:pr-5">
        <div className="flex flex-col gap-y-1">
          <Typography tag="p" variant="displayLarge">
            Wishlists
          </Typography>
          {wishlists?.length && (
            <Typography tag="p" variant="body" theme={{ root: clsx(styles.thinText, styles.subText) }}>
              {wishlists.length}
              {wishlists.length === 1 ? ' list' : ' lists'}
            </Typography>
          )}
        </div>
        <Button
          variant="solid"
          status="primary"
          theme={{ root: 'w-full md:w-[200px]' }}
          href="/account/create-wishlist">
          Create new list
        </Button>
      </div>
      {!wishlists?.length ? (
        <EmptyWishlists />
      ) : (
        <div className="flex flex-col gap-y-5">
          {wishlists.map((wishList) => {
            return wishList && <WishListBlock wishList={wishList} key={wishList.id} />
          })}
        </div>
      )}
    </>
  )
}
