import { useFetcher } from '@remix-run/react'
import { useState, useEffect } from 'react'

import { ProductCarouselCurated } from '../FeatureProductCarouselTabbed.types'

export const useCuratedProducts = ({ tabbedContent }) => {
  const { load: loadCuratedsData, data: curatedData, state: loadingCuratedsData } = useFetcher()

  const [curatedTabProducts, setCuratedTabProducts] = useState<Array<ProductCarouselCurated>>([])
  const [areProductsFetched, setAreProductsFetched] = useState<boolean>(false)

  const [curatedTabs, setCuratedTabs] = useState(
    tabbedContent?.filter((tab) => {
      return tab.__typename === 'ProductCarouselCurated'
    }),
  )

  const loadProductsByShopifyId = async () => {
    const curatedTab = curatedTabs?.[0]
    const queryIds = curatedTab?.products?.map((product) => {
      return `(id:${product?.shopifyId})`
    })

    const query = queryIds?.join(' OR ')
    if (query) {
      loadCuratedsData(`/api/products?query=${query}`)
    }
  }

  const findProductsFromCuratedByShopifyId = (id) => {
    if (id) {
      return curatedTabProducts.find((item) => {
        return item?.id === id
      })
    }

    return null
  }

  useEffect(() => {
    if (loadingCuratedsData === 'idle') {
      loadProductsByShopifyId()
    }
    if (curatedTabs?.length === 0) {
      setAreProductsFetched(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadCuratedsData, curatedTabs?.length, loadingCuratedsData])

  useEffect(() => {
    if (curatedData) {
      setCuratedTabProducts((products) => {
        return [...products, { ...curatedData, id: curatedTabs?.[0]?.id }]
      })
      setCuratedTabs((tabs) => {
        return tabs.slice(1)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curatedData])

  return {
    curatedTabProducts,
    areProductsFetched,
    findProductsFromCuratedByShopifyId,
  }
}
