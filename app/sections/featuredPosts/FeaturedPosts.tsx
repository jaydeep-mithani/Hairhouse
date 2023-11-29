import { Typography } from '@overdose/components'
import { Carousel, ArticleGridItem } from '~/components'
import clsx from 'clsx'

import styles from './FeaturedPosts.module.css'
import { FeaturedPostsProps } from './FeaturedPosts.types'

export const FeaturedPosts = (data: FeaturedPostsProps) => {
  if (!data?.articles) return null

  const { title, itemsPerRowDesktop, viewLinkText, articles } = data

  const showArrows = !!(itemsPerRowDesktop && articles.length > itemsPerRowDesktop)

  return (
    <div className={styles.root}>
      <div className={clsx(styles.featuredPostsSection, { [styles.showArrows]: showArrows })}>
        {title && (
          <Typography
            tag="p"
            variant="displayLarge"
            theme={{
              root: styles.featuredPostsTitle,
            }}>
            {title}
          </Typography>
        )}
        <div className={clsx(styles.carouselWrapper, styles.featuredPostsCarouselWrapper)}>
          <Carousel
            showScrollbar
            showArrows={showArrows}
            options={{
              keyboard: true,
              breakpoints: {
                320: {
                  slidesPerView: 1.16,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                990: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: itemsPerRowDesktop,
                  spaceBetween: 48,
                },
                2560: {
                  slidesPerView: itemsPerRowDesktop,
                  spaceBetween: 48,
                },
              },
            }}>
            {articles.map((articleItem, index) => (
              <ArticleGridItem article={articleItem} buttonText={viewLinkText} key={`agi${index + 1}`} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
