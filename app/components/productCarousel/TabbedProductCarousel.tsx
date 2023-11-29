import { TabPanel, Tabs, Typography } from '@overdose/components'
import type { Collection } from '@shopify/hydrogen/storefront-api-types'
import { Carousel, ProductCard } from '~/components'
import clsx from 'clsx'

import styles from './styles/ProductCarousel.module.css'

export const TabbedProductCarousel = ({ data, tabsPosition }) => {
  const { highlightColour, header, tabs: collections } = data

  const formatTabTitle = (index, title) => {
    return (
      <Typography
        tag="p"
        variant="subheading"
        theme={{
          root: styles.panelTitle,
        }}>
        <span>{`0${index + 1}`}</span>
        <span data-type="title">{title.toUpperCase()}</span>
      </Typography>
    )
  }
  return (
    <div className={clsx(styles.root, styles[`root_${tabsPosition}`])}>
      {header && tabsPosition !== 'top' && (
        <Typography
          tag="p"
          variant="displayExtraLarge"
          style={{ '--highlightColour': highlightColour?.hex }}
          dangerouslySetInnerHTML={{ __html: header?.html }}
          theme={{
            root: styles.tabbedCarouselTitle,
          }}
        />
      )}
      <Tabs
        tabPosition={tabsPosition}
        theme={{
          root: styles[`tabRoot_${tabsPosition}`],
          title: styles.tabTitle,
          title_active: styles.tabTitleActive,
          panel: styles.tabPanel,
          tabslist_wrap: styles.tabsListWrap,
          tabslist: styles.tabslist,
        }}
        defaultActiveTab="0">
        {!!collections?.length &&
          collections
            .filter((collection: Collection) => {
              return collection?.getCollectionByHandle?.collection?.length
            })
            .map((collection: Collection, index: number) => {
              return (
                <TabPanel
                  theme={{ panel: `${tabsPosition === 'left' && styles.tabPanel}` }}
                  key={index}
                  title={formatTabTitle(index, collection?.title)}>
                  <div className={styles.carouselWrapper}>
                    <Carousel
                      className={styles.customScrollbar}
                      preserveHiddenNavButtonHeight
                      preserveHiddenScrollbarHeight
                      showScrollbar
                      showArrows
                      options={{
                        keyboard: true,
                        breakpoints: {
                          320: {
                            slidesPerView: 1.31,
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
                            slidesPerView: tabsPosition === 'left' ? 3.5 : 4.4,
                            spaceBetween: 40,
                            slidesOffsetBefore: tabsPosition === 'left' ? 50 : 0,
                            slidesOffsetAfter: tabsPosition === 'left' ? 50 : 0,
                          } as CarouselOptions,
                          1900: {
                            slidesPerView: tabsPosition === 'left' ? 4 : 4.45,
                            spaceBetween: 56,
                            slidesOffsetBefore: tabsPosition === 'left' ? 50 : 0,
                            slidesOffsetAfter: tabsPosition === 'left' ? 50 : 0,
                          } as CarouselOptions,
                          2560: {
                            slidesPerView: tabsPosition === 'left' ? 3.8 : 4.45,
                            spaceBetween: 56,
                            slidesOffsetBefore: tabsPosition === 'left' ? 50 : 0,
                            slidesOffsetAfter: tabsPosition === 'left' ? 50 : 0,
                          } as CarouselOptions,
                        },
                      }}>
                      {collection?.getCollectionByHandle?.collection.map((product, index) => {
                        return <ProductCard product={product} key={`${index}${product.id}`} quickAdd />
                      })}
                    </Carousel>
                  </div>
                </TabPanel>
              )
            })}
      </Tabs>
    </div>
  )
}
