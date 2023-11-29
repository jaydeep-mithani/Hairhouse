import { Typography } from '@overdose/components'
import { Carousel, ArticleGridItem } from '~/components'
import clsx from 'clsx'

import styles from './SectionBlogGrid.module.css'
import { SectionBlogGridProps } from './SectionBlogGrid.types'

export const SectionBlogGrid = ({
  title,
  itemsPerRowDesktop,
  enableDarkBackground,
  buttonText,
  featuredArticles,
}: SectionBlogGridProps) => {
  if (!featuredArticles?.length) {
    return null
  }

  const showArrows = !!(itemsPerRowDesktop && featuredArticles.length > itemsPerRowDesktop)

  return (
    <div className={clsx(styles.root, { [styles.hasDarkBg]: enableDarkBackground })}>
      <div className={clsx(styles.sectionBlogGrid, { [styles.showArrows]: showArrows })}>
        {title && (
          <Typography
            tag="p"
            variant="displayLarge"
            theme={{
              root: styles.sectionBlogGridTitle,
            }}>
            {title}
          </Typography>
        )}
        <div className={clsx(styles.carouselWrapper, styles.sectionBlogGridCarouselWrapper)}>
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
            {featuredArticles.map((articleItem, index) => {
              return (
                <ArticleGridItem
                  article={articleItem}
                  buttonText={buttonText}
                  key={`agi${index + 1}`}
                  theme={{
                    title: styles.articleTitle,
                    excerpt: styles.articleExcerpt,
                    authorAndDate: styles.articleAuthorAndDate,
                    button: styles.articleButton,
                  }}
                />
              )
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
