import { Pagination } from '@overdose/components'
import { useLocation, useSearchParams, useNavigate, useFetcher } from '@remix-run/react'
import type { Collection, Product, PageInfo, ProductConnection } from '@shopify/hydrogen/storefront-api-types'
import { Grid, ProductCard, Link, PromoBanner } from '~/components'
import { getImageLoadingPriority } from '~/lib/const'
import { unbxdOptions, UnbxdPageInfo } from '~/lib/unbxd.helper'
import { SectionCollectionMainFragment } from '~/sections/sectionCollectionMain/SectionCollectionMain.fragment.generated'
import { useEffect, useState } from 'react'

interface CustomCollection extends Collection {
  products: ProductConnection & {
    pageInfo: PageInfo & UnbxdPageInfo
  }
}

export function ProductGrid({
  collection,
  modulePromoBanner,
  ...props
}: {
  collection: CustomCollection
  modulePromoBanner: SectionCollectionMainFragment['modulePromoBanner']
}) {
  const [initialProducts, setInitialProducts] = useState(collection?.products?.nodes || [])

  const pageInfo: UnbxdPageInfo = collection?.products?.pageInfo
  const initialCursor = 0
  const [products, setProducts] = useState(initialProducts)
  const [params] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const fetcher = useFetcher()

  // props have changes, reset component state
  const productProps = collection?.products?.nodes || []
  if (initialProducts !== productProps) {
    setInitialProducts(productProps)
    setProducts(productProps)
  }

  const updateCursorQueryParam = (currentPage: number) => {
    const cursor = currentPage > 1 ? (currentPage - 1) * unbxdOptions.pageSize : initialCursor
    params.set('cursor', String(cursor))
    navigate(`${location.pathname}?${params.toString()}`)
  }

  useEffect(() => {
    if (!fetcher.data) {
      return
    }

    const { collection } = fetcher.data
    let { products } = fetcher.data
    if (!products) {
      products = collection.products
    }
    setProducts((prev: Product[]) => [...prev, ...products.nodes])
  }, [fetcher.data])

  const haveProducts = initialProducts.length > 0

  if (!haveProducts) {
    return (
      <>
        <p>No products found on this collection</p>
        <Link to="/products">
          <p className="underline">Browse catalog</p>
        </Link>
      </>
    )
  }

  return (
    <>
      {modulePromoBanner && <PromoBanner className="mb-4 lg:mb-8" modulePromoBanner={modulePromoBanner} />}
      <Grid layout="products" {...props}>
        {!!products?.length &&
          products.map((product, i) => {
            return <ProductCard key={product.id} product={product} loading={getImageLoadingPriority(i)} quickAdd />
          })}
      </Grid>
      <div className="w-full border-b border-[var(--color-border-line-seperate-primary)] my-8 lg:my-10" />
      <Pagination
        total={pageInfo?.noOfPages}
        siblings={1}
        initialPage={1}
        page={pageInfo?.currentPage}
        onChange={(page) => {
          updateCursorQueryParam(page)
        }}
        theme={{
          root: '[--pagination-arrow-border-color:transparent] [--pagination-border-radius:0] [--pagination-border-color-hover:transparent]',
        }}
      />
    </>
  )
}
