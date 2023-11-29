import { Typography } from '@overdose/components'
import { Button, Carousel, IconChevronRight } from '~/components'

import styles from './CampaignLandingShopByGroup.module.css'
import { CampaignLandingShopByGroupProps } from './CampaignLandingShopByGroup.types'

export const ShopByGroup: React.FC<CampaignLandingShopByGroupProps> = (props) => {
  if (!props.data) return null

  const { title, subtitle, images, shopByGroup } = props.data
  return shopByGroup === 'column' ? (
    <div className={styles.root}>
      <div className={styles.heading}>
        {title && (
          <Typography tag="h2" variant="displayLarge">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography tag="h6" variant="subheading" weight="light">
            {subtitle}
          </Typography>
        )}
      </div>
      <div className={styles.carousel}>
        <Carousel
          className={styles.customScrollbar}
          uniqueNavClassSuffix="41a1cf58-c8c4-11ed-afa1-0242ac120002"
          showScrollbar
          showArrows
          options={{
            keyboard: true,
            breakpoints: {
              320: {
                slidesPerView: 1.5,
                spaceBetween: 24,
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
              } as CarouselOptions,
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
                slidesOffsetBefore: 32,
                slidesOffsetAfter: 32,
              } as CarouselOptions,
              1024: {
                slidesPerView: 3.6,
                spaceBetween: 40,
                slidesOffsetBefore: 48,
                slidesOffsetAfter: 48,
              } as CarouselOptions,
              2560: {
                slidesPerView: 5.6,
                spaceBetween: 56,
              } as CarouselOptions,
            },
          }}>
          {images.map((image, index) => (
            <div className={`${styles.main_container} ${index % 2 && styles.main_container_odd}`} key={index}>
              <div className={styles.img_container}>
                {image && image.image && image.image.url && (
                  <div className={styles.img_gradient}>
                    <img src={image.image.url} alt={image.altText} className={styles.horizontal_img} />
                  </div>
                )}
                {image && image.label && (
                  <Typography tag="h1" variant="displayLarge">
                    {image.label}
                  </Typography>
                )}
                {image && image.link && (
                  <div className={styles.link}>
                    <Typography tag="h3" variant="subheading" weight="bold">
                      {image.link}
                    </Typography>
                    <div className={styles.arrow}>
                      <IconChevronRight />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  ) : (
    <div className={styles.row_root}>
      <div className={styles.title}>
        {title && (
          <Typography tag="h1" variant="displayLarge" weight="light" align="center">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography tag="p" variant="heading" weight="light" align="center">
            {subtitle}
          </Typography>
        )}
      </div>
      <div className={styles.img_grid_container}>
        {images.map((img, index) => (
          <div className={styles.img_container} key={index}>
            {img && img.image && img.image.url && <img src={img.image.url} alt={images.altText} />}
            <div className={styles.content}>
              {img && img.label && (
                <Typography tag="h3" variant="pageheading" align="center">
                  {img.label}
                </Typography>
              )}
              {img && img.link && (
                <Button shape="square" status="accent" weight="bold">
                  {img.link}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
