import { Image, TabPanel, Tabs, Typography } from '@overdose/components'
import { Link, useFetcher } from '@remix-run/react'
import { Carousel, IconCheck, IconXMark } from '~/components'
import clsx from 'clsx'
import { useEffect, useState, useCallback } from 'react'

import { adaptProducts } from './assets/adaptProducts'
import { Tab, Key, Field } from './declarations'
import styles from './SectionProductCompare.module.css'
import { SectionProductCompareProps } from './SectionProductCompare.types'

export const SectionProductCompare: React.FC<SectionProductCompareProps> = (props) => {
  const { collections, title, tableRows } = props
  const { load, data } = useFetcher()

  const [active, setActive] = useState('0')
  const [products, setProducts] = useState([])
  const [keys, setKeys] = useState<Array<Key>>([])
  const [tabs, setTabs] = useState<Array<Tab>>([])

  const activeHandler = (tab: string) => {
    setActive(tab)
  }

  const adaptKeys = useCallback(() => {
    const temp: Array<Key> = []
    tableRows?.length &&
      tableRows.forEach((row) => {
        const key = row.metafieldReference.split('.').reverse()[0]
        temp.push({ namespace: 'custom', key })
      })

    setKeys(temp)
  }, [tableRows])

  // fetch products based on collection id
  useEffect(() => {
    if (keys.length && collections?.length) {
      collections.forEach((collection) => {
        load(`/api/collections?handle=${collection.collectionHandle}&keys=${encodeURIComponent(JSON.stringify(keys))}`)
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load, keys])

  useEffect(() => {
    setProducts((products) => {
      return [...products, data ?? { title: '' }]
    })
  }, [data])

  useEffect(() => {
    tableRows?.length && adaptKeys()
  }, [tableRows, adaptKeys])

  // there should be 1 products per collection
  useEffect(() => {
    if (products.length === collections.length) {
      setTabs(adaptProducts(products, collections, tableRows))
    }
  }, [products, collections, tableRows])

  const renderAttributeValue = (attribute: Field) => {
    if (['true', 'false'].includes(attribute?.value?.toLowerCase())) {
      return (
        <div className={styles.attribute_value}>
          <Typography variant="body" weight="light">
            {attribute.value?.toLowerCase() === 'true' ? <IconCheck /> : <IconXMark />}
            {attribute.value?.toLowerCase()}
          </Typography>
        </div>
      )
    }
    return (
      <div className={styles.attribute_value}>
        <Typography variant="body" weight="light">
          {attribute?.value}
        </Typography>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      {title && (
        <Typography tag="h1" variant="displayExtraLarge" align="left" weight="bold">
          {title}
        </Typography>
      )}
      <Tabs activeTab={active} onChange={activeHandler} theme={{ root: clsx(styles.tabWrapper) }}>
        {!!tabs?.length &&
          tabs.map((tab, index) => {
            return (
              tab?.category && (
                <TabPanel key={`${index}`} title={tab.category}>
                  {tab?.products?.length ? (
                    <div className={styles.comparision_table}>
                      <Carousel
                        showScrollbar
                        showArrows
                        options={{
                          keyboard: true,
                          breakpoints: {
                            320: {
                              slidesPerView: 3,
                              spaceBetween: 0,
                            } as ScrollOptions,
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 0,
                            } as ScrollOptions,
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 0,
                            } as ScrollOptions,
                            2560: {
                              slidesPerView: 4,
                              spaceBetween: 0,
                            } as ScrollOptions,
                          },
                        }}>
                        {tab?.products?.map((product, index) => {
                          return (
                            product && (
                              <div className={styles.product} key={`${index}`}>
                                {product?.image?.url && product?.productName && (
                                  <div className={styles.product_image}>
                                    <Image src={product.image.url} alt={product.altText} />
                                    <Typography tag="h6" variant="subheading" weight="bold">
                                      {product.productName}
                                    </Typography>
                                  </div>
                                )}
                                {!!product?.attributes?.length &&
                                  product.attributes?.map((attribute) => {
                                    return (
                                      <div key={attribute?.value}>
                                        <div
                                          className={`${styles.attribute_label} ${
                                            index && styles.attribute_label_hidden
                                          }`}>
                                          <Typography variant="subheading" weight="bold">
                                            {attribute?.label}
                                          </Typography>
                                        </div>
                                        {renderAttributeValue(attribute)}
                                      </div>
                                    )
                                  })}
                                {product?.handle && (
                                  <div className={styles.view_product_link}>
                                    <Link to={`/products/${product?.handle}`}>
                                      <Typography variant="body" weight="light">
                                        View Product
                                      </Typography>
                                    </Link>
                                  </div>
                                )}
                              </div>
                            )
                          )
                        })}
                      </Carousel>
                    </div>
                  ) : (
                    <div />
                  )}
                </TabPanel>
              )
            )
          })}
      </Tabs>
    </div>
  )
}
