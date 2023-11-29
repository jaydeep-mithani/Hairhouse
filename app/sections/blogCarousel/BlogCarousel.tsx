import { Typography, Image } from '@overdose/components'
import { ArticleGridItem, Carousel } from '~/components'
import clsx from 'clsx'

import styles from './BlogCarousel.module.css'
import { BlogCarouseldProps } from './BlogCarousel.types'

export const BlogCarousel: React.FC<BlogCarouseldProps> = (props) => {
  const { heading, image, articles, showScrollbarForHighRes } = props

  if (!articles?.length) {
    return null
  }

  return (
    <div
      className={clsx(styles.root, {
        [styles.noLeftImage]: !image,
      })}>
      {image && (
        <div className={styles.titleWrapper}>
          <div className={styles.imageAndTitle}>
            <Image className={styles.titleImage} alt={image?.altText} src={image?.url} />
            {heading && (
              <Typography
                tag="p"
                variant="pageheading"
                theme={{
                  root: styles.title,
                }}>
                {heading}
              </Typography>
            )}
          </div>
        </div>
      )}
      <div className={styles.carouselWrapper}>
        <Carousel
          showScrollbar
          carouselTitle={!image && heading ? heading : null}
          className={clsx(styles.blogCarousel, { [styles.hasScrollbar]: !!showScrollbarForHighRes })}
          showArrows
          options={{
            keyboard: true,
            breakpoints: {
              320: {
                slidesPerView: image ? 1.32 : 1.5,
                spaceBetween: 20,
                slidesOffsetBefore: image ? 16 : 0,
                slidesOffsetAfter: 16,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                slidesOffsetBefore: image ? 16 : 0,
                slidesOffsetAfter: 16,
              },
              1024: {
                slidesPerView: image ? 2.48 : 3.5,
                spaceBetween: 32,
                scrollbar: { enabled: !!showScrollbarForHighRes },
              },
              1200: {
                slidesPerView: image ? 2.48 : 4,
                spaceBetween: 32,
                scrollbar: { enabled: !!showScrollbarForHighRes },
              },
              2560: {
                slidesPerView: image ? 3.5 : 4,
                spaceBetween: 50,
                scrollbar: { enabled: !!showScrollbarForHighRes },
              },
            },
          }}>
          {articles.map((article, index) => {
            return <ArticleGridItem article={article} key={`agi${index + 1}`} />
          })}
        </Carousel>
      </div>
    </div>
  )
}
