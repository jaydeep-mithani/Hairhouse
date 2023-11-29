import { Typography, Button, Link } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import clsx from 'clsx'

import styles from './MegaMenu.module.css'
import { PromoMenuProps } from './MegaMenu.types'

const MAX_ALLOWED_LENGTH = 2

export const PromoMenu = ({ amountOfCards, promoMenuBlog, promoMenuOffers }: PromoMenuProps) => {
  if (!amountOfCards) {
    return null
  }

  const amountCardsCondition = amountOfCards === MAX_ALLOWED_LENGTH
  if (amountCardsCondition && promoMenuBlog?.length > MAX_ALLOWED_LENGTH) {
    promoMenuBlog.length = MAX_ALLOWED_LENGTH
  }

  if (amountCardsCondition && promoMenuOffers?.length > MAX_ALLOWED_LENGTH) {
    promoMenuOffers.length = MAX_ALLOWED_LENGTH
  }

  const promoImageSizes =
    amountOfCards === MAX_ALLOWED_LENGTH ? { width: 316, height: 360 } : { width: 300, height: 311 }

  return (
    <div
      className={clsx('xl:gap-8 gap-4', styles.promo, {
        [styles.promoTwoColumn]: amountOfCards === MAX_ALLOWED_LENGTH,
      })}>
      {!!promoMenuBlog?.length &&
        promoMenuBlog?.map((item) => {
          return (
            <div className={styles.promoBlogCard} key={item?.id}>
              {item?.blog?.title && (
                <div className={styles.promoBlogTag}>
                  <Typography tag="p" variant="caption">
                    {item?.blog?.title}
                  </Typography>
                </div>
              )}
              {item?.image?.url && (
                <div className={styles.promoBlogImage}>
                  <Image data={{ url: item?.image?.url, width: 281, height: 352, altText: item?.title }} />
                </div>
              )}
              {item?.title && (
                <Typography
                  tag="p"
                  variant="subheading"
                  weight="bold"
                  theme={{
                    root: styles.promoBlogTitle,
                  }}>
                  {item?.title}
                </Typography>
              )}
              {item?.shortDescription && (
                <div className={styles.cutPromoBlogText}>
                  <Typography
                    tag="p"
                    variant="body"
                    theme={{
                      root: styles.promoBlogText,
                    }}>
                    {item?.shortDescription}
                  </Typography>
                </div>
              )}
              {item?.url && (
                <Button
                  variant="link"
                  href={item.url}
                  theme={{
                    root: styles.promoButton,
                  }}>
                  Read now
                </Button>
              )}
            </div>
          )
        })}
      {!!promoMenuOffers?.length &&
        promoMenuOffers?.map((item) => {
          return (
            <div className={styles.promoCard} key={item.id}>
              {item?.image && (
                <Image
                  data={{
                    url: item.image?.url,
                    width: promoImageSizes.width,
                    height: promoImageSizes.height,
                    altText: item.image.altText,
                  }}
                />
              )}
              <div className={styles.promoBlock}>
                {item?.name && (
                  <Typography tag="p" variant="subheading" weight="bold">
                    {item?.name}
                  </Typography>
                )}
                {item?.link && (
                  <Link to={item.link.url}>
                    <Typography tag="p" variant="body" theme={{ root: styles.promoLinkText }}>
                      {item.link.linkText}
                    </Typography>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
    </div>
  )
}
