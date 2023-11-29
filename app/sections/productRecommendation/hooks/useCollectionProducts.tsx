import { useFetcher } from '@remix-run/react'
import { useState, useEffect } from 'react'

import { ProductCarouselCollection } from '../FeatureProductCarouselTabbed.types'

export const useCollectionProducts = ({ tabbedContent }) => {
  const { load: loadCollectionsData, data: collectionData, state: loadingCollectionsData } = useFetcher()
  const [collectionTabProducts, setCollectionTabProducts] = useState<Array<ProductCarouselCollection>>([])
  const [areProductsFetched, setAreProductsFetched] = useState<boolean>(false)

  const [collectionTabs, setCollectionTabs] = useState(
    tabbedContent?.filter((tab) => {
      return tab.__typename === 'ProductCarouselCollection'
    }),
  )

  const loadProductsByShopifyCollectionId = async () => {
    const collectionTab = collectionTabs?.[0]
    if (collectionTab && 'shopifyCollectionId' in collectionTab) {
      loadCollectionsData(`/api/collections?shopifyCollectionId=${collectionTab.shopifyCollectionId}`)
    }
  }

  const findProductsFromCollectionByShopifyId = (shopifyId) => {
    if (shopifyId) {
      return collectionTabProducts.find((item) => {
        return item?.id?.includes(shopifyId)
      })
    }

    return null
  }

  useEffect(() => {
    if (loadingCollectionsData === 'idle') {
      loadProductsByShopifyCollectionId()
      if (collectionTabs?.length === 0) {
        setAreProductsFetched(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadCollectionsData, collectionTabs?.length, loadingCollectionsData])

  useEffect(() => {
    if (collectionData) {
      setCollectionTabProducts((products) => {
        return [...products, collectionData]
      })
      setCollectionTabs((tabs) => {
        return tabs.slice(1)
      })
    }
  }, [collectionData])

  return {
    collectionTabProducts,
    areProductsFetched,
    findProductsFromCollectionByShopifyId,
  }
}
