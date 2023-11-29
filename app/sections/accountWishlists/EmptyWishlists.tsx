import { Typography } from '@overdose/components'
import { IconEmptyWishlist } from '~/components'
import clsx from 'clsx'

import styles from './AccountWishlists.module.css'

export const EmptyWishlists = () => {
  return (
    <div
      className={clsx('flex flex-col justify-center items-center w-full mb-15 md:mb-20 px-10', styles.wishlistEmpty)}>
      <IconEmptyWishlist />
      <Typography
        tag="p"
        variant="bodyLarge"
        theme={{ root: clsx(styles.thinText, 'mt-3 whitespace-pre-line text-center') }}>
        You don&apos;t have items in this list yet. Explore the store or search for an item you would like to add.
      </Typography>
    </div>
  )
}
