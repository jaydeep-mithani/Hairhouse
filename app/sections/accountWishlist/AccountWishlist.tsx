import { Typography, Button } from '@overdose/components'
import { ProductCard, IconArrowLeft } from '~/components'
import clsx from 'clsx'
import { useState, SyntheticEvent } from 'react'

import styles from './AccountWishlist.module.css'
import { AccountWishlistProps } from './AccountWishlist.types'

export const AccountWishlist = ({
  wishlist,
  removeWishlist,
  removeProductFromWishlist,
  productsFull,
  updateWishlistTitle,
}: AccountWishlistProps) => {
  const [isEditBtn, setIsEditBtn] = useState(true)
  const [title, setTitle] = useState(wishlist?.wishlist_title)
  if (!wishlist) {
    return null
  }
  const { products } = wishlist
  const wishlistId = wishlist.id.replace(/\D/g, '')
  const editHandle = () => {
    if (!isEditBtn && title) {
      updateWishlistTitle(wishlistId, title)
    }
    setIsEditBtn(!isEditBtn)
  }

  return (
    <div className="mt-8 lg:mt-0">
      <Button
        href="/account/wishlists"
        variant="solid"
        status="link"
        theme={{ root: clsx('flex gap-x-2 items-center mb-2 justify-start', styles.buttonLink) }}>
        <IconArrowLeft />
        <Typography variant="caption" tag="p" theme={{ root: clsx(styles.colorSubText, styles.thinText) }}>
          Back
        </Typography>
      </Button>
      <div className="flex flex-col md:flex-row md:justify-between gap-5 mb-2">
        <div>
          {isEditBtn ? (
            <Typography tag="p" variant="displayLarge" theme={{ root: 'mb-1' }}>
              {title || ''}
            </Typography>
          ) : (
            <input
              defaultValue={title || ''}
              onChange={(e: SyntheticEvent) => setTitle((e.target as HTMLInputElement).value)}
              className={clsx(styles.input, 'w-[200px] pb-[13px] pt-[6px] mb-[9px]')}
            />
          )}
          {products && (
            <Typography tag="p" variant="body" theme={{ root: clsx(styles.thinText, styles.subText) }}>
              {products.length}
              {products.length === 1 ? ' product' : ' products'}
            </Typography>
          )}
        </div>
        <div className="flex gap-4">
          <Button variant="solid" status="primary" theme={{ root: 'w-full md:w-[120px]' }} onClick={editHandle}>
            {isEditBtn ? 'Edit' : 'Save'}
          </Button>
          <Button
            variant="solid"
            status="secondary"
            theme={{ root: 'w-full md:w-[120px]' }}
            onClick={() =>
              removeWishlist(wishlistId).then(() => {
                window.location.href = '/account/wishlists'
              })
            }>
            Delete
          </Button>
        </div>
      </div>
      {productsFull?.nodes && (
        <div className="grid gap-x-4 gap-y-10 md:gap-8 grid-cols-[minmax(160px,_1fr)_minmax(160px,_1fr)] md:grid-cols-[minmax(160px,_281px)_minmax(160px,_281px)_minmax(160px,_281px)]">
          {productsFull.nodes.map((product) => {
            const productId = product ? product.id.replace(/\D/g, '') : ''
            return (
              product && (
                <div key={product.id}>
                  <ProductCard product={product} quickAdd isRatting={1} productTag />
                  <div className="flex justify-center mt-2">
                    <Button
                      variant="link"
                      theme={{ root: styles.deleteBtn }}
                      onClick={() =>
                        removeProductFromWishlist(wishlistId, productId).then(() => {
                          location.reload()
                        })
                      }>
                      <Typography tag="p" variant="caption" theme={{ root: clsx(styles.thinText, styles.subText) }}>
                        Remove from wishlist
                      </Typography>
                    </Button>
                  </div>
                </div>
              )
            )
          })}
        </div>
      )}
    </div>
  )
}
