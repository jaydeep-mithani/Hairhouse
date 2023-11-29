import { TabbedProductCarousel } from '~/components/productCarousel/TabbedProductCarousel'
import React, { useState, useEffect } from 'react'

import { FeatureProductCarouselTabbedProps } from './FeatureProductCarouselTabbed.types'
import { adaptProductCarousel } from './helpers/adaptProductCarousel'
import { useCollectionProducts, useCuratedProducts } from './hooks'

export const FeatureProductCarouselTabbed: React.FC<FeatureProductCarouselTabbedProps> = ({
  header,
  tabbedContent,
  navigationPostion,
}) => {
  const [tabs, setTabs] = useState({})

  const { areProductsFetched: collectionFetched, findProductsFromCollectionByShopifyId } = useCollectionProducts({
    tabbedContent,
  })

  const { areProductsFetched: curatedFetched, findProductsFromCuratedByShopifyId } = useCuratedProducts({
    tabbedContent,
  })

  const putProductsInTab = (tab) => {
    if (tab.__typename === 'ProductCarouselCollection') {
      const productsFromShopifyCollection = findProductsFromCollectionByShopifyId(tab.shopifyCollectionId)
      return {
        ...tab,
        products: productsFromShopifyCollection?.products,
      }
    }
    if (tab.__typename === 'ProductCarouselCurated') {
      const productsFromShopifyCurated = findProductsFromCuratedByShopifyId(tab.id)
      return {
        ...tab,
        products: productsFromShopifyCurated?.products,
      }
    }
    return tab
  }

  const handleTabs = () => {
    setTabs({
      header,
      tabs:
        (!!tabbedContent?.length &&
          adaptProductCarousel(
            tabbedContent.map((tab) => {
              return putProductsInTab(tab)
            }),
          )) ??
        [],
    })
  }

  useEffect(() => {
    if (collectionFetched || curatedFetched) {
      handleTabs()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionFetched, curatedFetched])

  if (!tabs) {
    return null
  }

  return <TabbedProductCarousel data={tabs} tabsPosition={navigationPostion && navigationPostion?.toLowerCase()} />
}
