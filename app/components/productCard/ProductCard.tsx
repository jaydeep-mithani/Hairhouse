import { Typography } from '@overdose/components'
import { flattenConnection, Image, ShopifyAnalyticsProduct, useMoney } from '@shopify/hydrogen'
import type { MoneyV2, Product } from '@shopify/hydrogen/storefront-api-types'
import { Link, AddToCartButton, IconRating, NoImagePlaceholder } from '~/components'
import { RatingSummary } from '~/components/baazarVoiceReviews/ratingSummary'
import { getProductPlaceholder } from '~/lib/placeholders'
import { isDiscounted, isNewArrival } from '~/lib/utils'
import clsx from 'clsx'

import { AddToWishList } from '../AddToWishList'
import { CompareAtPrice } from './CompareAtPrice'
import { ProductCardProps, ProductCardPlacement } from './ProductCard.types'
import styles from './styles/ProductCard.module.css'

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
  wishAdd,
  totalRatting,
  isRatting,
  productTag,
  placement,
}: ProductCardProps) {
  let cardLabel

  const cardProduct: Product = product?.variants ? (product as Product) : getProductPlaceholder()
  if (!cardProduct?.variants?.nodes?.length) {
    return null
  }

  const firstVariant = flattenConnection(cardProduct.variants)[0]

  if (!firstVariant) {
    return null
  }
  const { image, price, compareAtPrice } = firstVariant
  const handle = product?.handle ?? firstVariant?.product?.handle

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currencyNarrowSymbol } = useMoney(price)

  if (label) {
    cardLabel = label
  } else if (isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2)) {
    cardLabel = 'Sale'
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New'
  }

  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  }

  const productRating = (
    <div className="flex flex-row items-center gap-0.5">
      {isRatting &&
        Array.from({ length: isRatting }, (_v, index) => {
          return <IconRating key={index} />
        })}
      {totalRatting && (
        <Typography tag="span" variant="caption" theme={{ root: 'text-[var(--color-text-secondary)]' }}>
          ({totalRatting})
        </Typography>
      )}
      {!isRatting && !totalRatting && <RatingSummary productId={product.id} className={styles.bvRatingSummary} />}
    </div>
  )

  return (
    <div className={clsx(styles.root, { [styles.rootMiniCart]: placement === ProductCardPlacement.MINICART })}>
      <Link onClick={onClick} to={`/products/${handle}`} prefetch="intent">
        <div
          className={clsx(styles.cardWrapper, className, {
            [styles.cardWrapperMiniCart]: placement === ProductCardPlacement.MINICART,
          })}>
          <div className={styles.imageWrapper}>
            {image?.url ? (
              <Image
                className={clsx(styles.image, { [styles.imageMiniCart]: placement === ProductCardPlacement.MINICART })}
                loaderOptions={{
                  crop: 'center',
                  scale: 2,
                }}
                data={image}
                width={image.width}
                height={image.height}
                alt={image.altText || `Picture of ${product.title}`}
                loading={loading}
              />
            ) : (
              <NoImagePlaceholder />
            )}
            {cardLabel && (
              <Typography
                tag="p"
                variant="caption"
                theme={{
                  root: styles.cardLabel,
                }}>
                {cardLabel}
              </Typography>
            )}
            {cardLabel && (
              <Typography
                tag="p"
                variant="caption"
                theme={{
                  root: styles.cardLabel,
                }}>
                {cardLabel}
              </Typography>
            )}
            {productTag && (
              <Typography
                tag="p"
                variant="caption"
                theme={{
                  root: styles.cardTag,
                }}>
                {productTag}
              </Typography>
            )}
          </div>

          <div
            className={clsx(styles.descriptionWrapper, {
              [styles.descriptionWrapperMiniCart]: placement === ProductCardPlacement.MINICART,
            })}>
            <div className={styles.ratingWrapper}>
              <Typography
                tag="p"
                variant="caption"
                theme={{
                  root: clsx(styles.productVendor, {
                    [styles.productVendorMiniCart]:
                      placement === ProductCardPlacement.MINICART ||
                      placement === ProductCardPlacement.INSTANTSEARCH ||
                      placement === ProductCardPlacement.RECOMMENDATIONS,
                  }),
                }}>
                {product.vendor}
              </Typography>
              {placement !== ProductCardPlacement.INSTANTSEARCH &&
                placement !== ProductCardPlacement.MINICART &&
                productRating}
            </div>
            <Typography
              tag="p"
              variant="subheading"
              theme={{
                root: clsx(styles.productTitle, {
                  [styles.productTitleMiniCart]:
                    placement === ProductCardPlacement.MINICART || placement === ProductCardPlacement.INSTANTSEARCH,
                  [styles.productTitleRecommendation]: placement === ProductCardPlacement.RECOMMENDATIONS,
                }),
              }}>
              {product.title}
            </Typography>
            {product?.description && (
              <Typography
                tag="p"
                variant="body"
                theme={{
                  root: styles.productTitle,
                }}>
                {product.description}
              </Typography>
            )}
            <div className="flex gap-4">
              <Typography
                tag="p"
                variant="body"
                theme={{
                  root: clsx(styles.price, {
                    [styles.priceMiniCart]:
                      placement === ProductCardPlacement.MINICART ||
                      placement === ProductCardPlacement.INSTANTSEARCH ||
                      placement === ProductCardPlacement.RECOMMENDATIONS,
                  }),
                }}>
                {!!price?.amount && !!price?.currencyCode && (
                  <div>
                    {currencyNarrowSymbol}
                    <span>{price?.amount}</span>
                    {/* TODO: Fix price?.amount type!!!  */}
                    {/* {typeof price?.amount === 'string' && <Money withoutCurrency data={price} as="span" />} */}
                  </div>
                )}
                {isDiscounted(price as MoneyV2, compareAtPrice as MoneyV2) && (
                  <CompareAtPrice className={styles.compareAtPrice} data={compareAtPrice as MoneyV2} />
                )}
              </Typography>
            </div>
            {placement === ProductCardPlacement.INSTANTSEARCH && <div className="flex gap-1">{productRating}</div>}
            {quickAdd && placement === ProductCardPlacement.MINICART && (
              <AddToCartButton
                onClick={(e) => {
                  return e.stopPropagation()
                }}
                lines={[
                  {
                    quantity: 1,
                    merchandiseId: firstVariant.id,
                  },
                ]}
                variant="custom"
                className={styles.buttonMiniCart}
                analytics={{
                  products: [productAnalytics],
                  totalValue: parseFloat(productAnalytics.price),
                }}>
                <Typography tag="p" variant="button">
                  Add to Bag
                </Typography>
              </AddToCartButton>
            )}
          </div>
        </div>
      </Link>
      {quickAdd && placement !== ProductCardPlacement.MINICART && (
        <AddToCartButton
          lines={[
            {
              quantity: 1,
              merchandiseId: firstVariant.id,
            },
          ]}
          variant="custom"
          className={styles.button}
          analytics={{
            products: [productAnalytics],
            totalValue: parseFloat(productAnalytics.price),
          }}>
          <Typography tag="p" variant="button">
            Add to Bag
          </Typography>
        </AddToCartButton>
      )}
      {wishAdd && <AddToWishList className={styles.wishListBtn} />}
    </div>
  )
}
