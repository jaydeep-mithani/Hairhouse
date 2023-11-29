import { Carousel, ArticleGridItem } from '~/components'
import clsx from 'clsx'

import styles from './RelatedPosts.module.css'
import { RelatedPostsProps } from './RelatedPosts.types'

export const RelatedPosts = ({ data }: RelatedPostsProps) => {
  if (!data?.articles) return null

  const { id, title, itemsPerRowDesktop, viewLinkText, articles } = data

  const showArrows = !!(itemsPerRowDesktop && articles.length > itemsPerRowDesktop)

  return (
    <div className={styles.root}>
      <div className={styles.RelatedPostsSection}>
        <div className={clsx(styles.carouselWrapper, styles.relatedPostsCarouselWrapper)}>
          <Carousel
            uniqueNavClassSuffix={id}
            carouselTitle={title}
            showScrollbar
            showArrows={showArrows}
            options={{
              keyboard: true,
              breakpoints: {
                320: {
                  slidesPerView: 1.255,
                  spaceBetween: 20,
                } as CarouselOptions,
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                } as CarouselOptions,
                990: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                } as CarouselOptions,
                1200: {
                  slidesPerView: itemsPerRowDesktop,
                  spaceBetween: 32,
                } as CarouselOptions,
                2560: {
                  slidesPerView: itemsPerRowDesktop,
                  spaceBetween: 50,
                } as CarouselOptions,
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
