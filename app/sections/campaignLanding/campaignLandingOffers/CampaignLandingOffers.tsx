import { Button, Image, Typography } from '@overdose/components'
import clsx from 'clsx'

import styles from './CampaignLandingOffers.module.css'
import { CampaignLandingOffersProps } from './CampaignLandingOffers.types'

export const CampaignLandingOffers: React.FC<CampaignLandingOffersProps> = (props) => {
  if (!props) {
    return null
  }

  const { offerName, offerItems, offerBgColor } = props
  return (
    <div className={clsx(styles.root, offerBgColor?.hex ? `!bg-[${offerBgColor?.hex}]` : '')}>
      {offerName && (
        <Typography
          tag="h1"
          variant="displayLarge"
          weight="bold"
          className={offerBgColor?.hex ? '!text-[#000000]' : ''}>
          {offerName}
        </Typography>
      )}
      <div className={styles.all_products_container}>
        {offerItems?.map((prod, index) => {
          return (
            <div className={styles.product_card} key={index}>
              {prod?.heading ? (
                <>
                  <div className={styles.product_img_container}>
                    {prod && prod?.image && prod?.image?.url && (
                      <Image src={prod.image.url} alt={prod.image.altText || 'Hair product image'} />
                    )}
                    {prod && prod?.topLeftBoxText && (
                      <div className={styles.tag}>
                        <Typography tag="span" variant="body">
                          {prod.topLeftBoxText}
                        </Typography>
                      </div>
                    )}
                  </div>
                  <div className={styles.product_detail_container}>
                    <div>
                      {prod && prod.brandImage && prod.brandImage.url && (
                        <Image
                          src={prod.brandImage.url}
                          alt={prod.brandImage.altText || 'Hair Brand product image'}
                          className={styles.brandImage}
                        />
                      )}
                      {prod && prod.heading && (
                        <Typography tag="h2" variant="heading" weight="bold">
                          {prod.heading}
                        </Typography>
                      )}
                      {prod && prod.description && (
                        <Typography tag="p" variant="body" weight="medium">
                          {prod.description}
                        </Typography>
                      )}
                    </div>
                    {prod && prod?.buttonText && prod?.url && (
                      <Button variant="outline" shape="square">
                        {prod.buttonText}
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                prod?.image?.url && (
                  <Image
                    src={prod.image.url}
                    alt={prod.image?.altText || 'Hair product image'}
                    className={styles.fullImg}
                  />
                )
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
