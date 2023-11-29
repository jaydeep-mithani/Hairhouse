import { Image, Typography } from '@overdose/components'
import { Button, Carousel, IconChevronRight } from '~/components'

import styles from './SectionShopByGrid.module.css'
import { SectionShopByGridProps, NumberTwo } from './SectionShopByGrid.types'

export const SectionShopByGrid: React.FC<SectionShopByGridProps> = (props) => {
  if (!props) {
    return <div />
  }
  const { title, description, categoryTiles, shopByGroup } = props
  const { Two } = NumberTwo
  return shopByGroup === 'column' ? (
    <div className={styles.root}>
      <div className={styles.heading}>
        {title && (
          <Typography tag="h2" variant="displayLarge">
            {title}
          </Typography>
        )}
        {description && (
          <Typography tag="h6" variant="subheading" weight="light">
            {description}
          </Typography>
        )}
      </div>
      {categoryTiles?.length > 0 && (
        <div className={styles.carousel}>
          <Carousel
            className={styles.customScrollbar}
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
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                  slidesOffsetBefore: 32,
                  slidesOffsetAfter: 32,
                },
                1024: {
                  slidesPerView: 3.6,
                  spaceBetween: 40,
                  slidesOffsetBefore: 48,
                  slidesOffsetAfter: 48,
                },
                2560: {
                  slidesPerView: 5.6,
                  spaceBetween: 56,
                },
              },
            }}>
            {categoryTiles?.map((image, index) => {
              return (
                <div className={`${styles.main_container} ${index % Two && styles.main_container_odd}`} key={index}>
                  <div className={styles.img_container}>
                    {image && image.image && image.image.url && (
                      <div className={styles.img_gradient}>
                        <Image src={image.image.url} alt={image.image.altText} className={styles.horizontal_img} />
                      </div>
                    )}
                    {image && image.heading && (
                      <Typography tag="h1" variant="displayLarge">
                        {image.heading}
                      </Typography>
                    )}
                    {image && image.description && (
                      <div className={styles.description}>
                        <Typography tag="h3" variant="subheading" weight="bold">
                          {image.description}
                        </Typography>
                        <div className={styles.arrow}>
                          <IconChevronRight />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      )}
    </div>
  ) : (
    <div className={styles.row_root}>
      <div className={styles.title}>
        {title && (
          <Typography tag="h1" variant="displayLarge" align="center">
            {title}
          </Typography>
        )}
        {description && (
          <Typography tag="p" variant="heading" align="center">
            {description}
          </Typography>
        )}
      </div>
      {categoryTiles?.length > 0 && (
        <div className={styles.img_grid_container}>
          {categoryTiles.map((img, index) => {
            return (
              <div className={styles.img_container} key={index}>
                {img && img.image && img.image.url && <Image src={img.image.url} alt={img.image.altText} />}
                <div className={styles.content}>
                  {img && img.heading && (
                    <Typography tag="h3" variant="pageheading" align="center">
                      {img.heading}
                    </Typography>
                  )}
                  {img && img.description && (
                    <Button shape="square" status="accent" weight="bold">
                      {img.description}
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
