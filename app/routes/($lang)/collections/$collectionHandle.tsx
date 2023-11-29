import { useLoaderData } from '@remix-run/react'
import { AnalyticsPageType, flattenConnection } from '@shopify/hydrogen'
import type { CollectionConnection, Menu, Collection } from '@shopify/hydrogen/storefront-api-types'
import { defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { ComposeSections } from '~/components/composeSections/ComposeSections'
import { Gap } from '~/components/productSection/Gap'
import { PRODUCT_CARD_FRAGMENT, SITE_HEIRARCHY_FRAGMENT } from '~/data/fragments'
import {
  queryCollection,
  transformProduct,
  UnbxdParams,
  getUnbxdParams,
  SearchParams,
  AppliedFilter,
  FiltersQueryParams,
  SortParam,
  getPageInfo,
  convertFacetObject,
  getSortValuesFromParam,
} from '~/lib/unbxd.helper'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'
import { HeroBanner } from '~/sections/heroBanner'
import { TwoColumnText } from '~/sections/twoColumnText'
import { CollectionPagesQuery, CollectionPagesDocument } from 'graphql/collectionPage/CollectionPage.generated'
import { TextLayout } from 'graphql/types'
import invariant from 'tiny-invariant'
import { createClient } from 'urql'

export async function loader({ params, context, request }: LoaderArgs) {
  const { collectionHandle } = params
  invariant(collectionHandle, 'Missing collectionHandle param')
  const { pathname } = new URL(request.url)
  const SITE_HEIRARCHY_HANDLE = '_site-hierarchy'
  const PAGINATION_SIZE = 15

  // TODO: turn this into a reusable function
  const client = createClient({
    url: context?.env?.HYGRAPH_API_ENDPOINT,
    fetchOptions: () => {
      const token = context?.env?.PRIVATE_HYGRAPH_PERMANENT_AUTH_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })

  const { collectionPages, websiteConfigs } = await client
    .query<CollectionPagesQuery>(CollectionPagesDocument, { handle: collectionHandle })
    .toPromise()
    .then((result) => result.data || { collectionPages: [], websiteConfigs: [] })

  const [page, header, footer] = [collectionPages?.[0], websiteConfigs?.[0]?.header, websiteConfigs?.[0]?.footer]

  const searchParams = new URL(request.url).searchParams
  const knownFilters = ['productVendor', 'productType']
  const available = 'available'
  const variantOption = 'variantOption'
  const { sortKey, reverse } = getSortValuesFromParam(searchParams.get('sort') as SortParam)
  const cursor = searchParams.get('cursor')
  const filters: FiltersQueryParams = []
  const appliedFilters: AppliedFilter[] = []
  const unbxdParams: UnbxdParams = getUnbxdParams(context)

  for (const [key, value] of searchParams.entries()) {
    try {
      if (available === key) {
        filters.push({ available: value === 'true' })
        appliedFilters.push({
          label: value === 'true' ? 'In stock' : 'Out of stock',
          urlParam: {
            key: available,
            value,
          },
        })
      } else if (knownFilters.includes(key) || key.endsWith('_uFilter')) {
        filters.push({ [key]: value })
        appliedFilters.push({ label: value, urlParam: { key, value } })
      } else if (key.includes(variantOption)) {
        const [name, val] = value.split(':')
        filters.push({ variantOption: { name, value: val } })
        appliedFilters.push({ label: val, urlParam: { key, value } })
      }
    } catch (e) {
      console.error(e)
    }
  }

  // Builds min and max price filter since we can't stack them separately into
  // the filters array. See price filters limitations:
  // https://shopify.dev/custom-storefronts/products-collections/filter-products#limitations
  if (searchParams.has('minPrice') || searchParams.has('maxPrice')) {
    const price: { min?: number; max?: number } = {}
    if (searchParams.has('minPrice')) {
      price.min = Number(searchParams.get('minPrice')) || 0
      appliedFilters.push({
        label: `Min: $${price.min}`,
        urlParam: { key: 'minPrice', value: searchParams.get('minPrice') },
      })
    }
    if (searchParams.has('maxPrice')) {
      price.max = Number(searchParams.get('maxPrice')) || 0
      appliedFilters.push({
        label: `Max: $${price.max}`,
        urlParam: { key: 'maxPrice', value: searchParams.get('maxPrice') },
      })
    }
    filters.push({
      price,
    })
  }

  let collectionResponse: {
    collection: Collection
    collections: CollectionConnection
    menu: Menu
  }

  if (unbxdParams?.UNBXD_BROWSE_ENABLED) {
    collectionResponse = await context.storefront.query<{
      collection: Collection
      collections: CollectionConnection
      menu: Menu
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
    }>(UNBXD_COLLECTION_QUERY, {
      variables: {
        handle: collectionHandle,
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
        siteHierarchyMenuHandle: SITE_HEIRARCHY_HANDLE,
      },
    })

    if (collectionResponse.collection) {
      const searchProps: SearchParams = {
        cursor,
        sort: searchParams.get('sort') as SortParam,
        filter: filters,
        collectionName: collectionResponse.collection.title,
        searchTerm: '',
        unbxdParams,
      }

      const data = await queryCollection(searchProps)

      if (data?.response) {
        collectionResponse.collection.products = {
          nodes: data.response.products.map((product) => {
            return transformProduct(product)
          }),
          filters: convertFacetObject(data),
          edges: [],
          pageInfo: getPageInfo(data.response),
        }
      } else {
        console.error('Error rendering products from unbxd ')
      }
    }
  } else {
    collectionResponse = await context.storefront.query<{
      collection: Collection
      collections: CollectionConnection
      menu: Menu
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
    }>(COLLECTION_QUERY, {
      variables: {
        handle: collectionHandle,
        pageBy: PAGINATION_SIZE,
        cursor,
        filters,
        sortKey,
        reverse,
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
        siteHierarchyMenuHandle: SITE_HEIRARCHY_HANDLE,
      },
    })
  }
  const { collection, collections, menu } = collectionResponse

  if (!collection) {
    throw new Response(null, { status: 404 })
  }

  const collectionNodes = flattenConnection(collections)

  return defer({
    page,
    header,
    footer,
    analytics: {
      pageType: AnalyticsPageType.home,
    },
    collection,
    appliedFilters,
    unbxdParams,
    collections: collectionNodes,
    menu,
    pathname,
  })
}

export default function CollectionPage() {
  const { page, header, footer } = useLoaderData<typeof loader>()
  const { heroBannerHeading, heroBannerDescription, desktopImage, mobileImage } = page || {}

  return (
    <>
      {header && <HeaderSection page={page} {...header} />}
      <Gap gap="1rem" mobileGap="1rem" />
      {heroBannerHeading && (
        <HeroBanner
          heading={heroBannerHeading}
          desc={heroBannerDescription}
          desktopImage={desktopImage}
          mobileImage={mobileImage}
          layout="text_block_left"
          showBreadcrumbs={!page?.hideBreadcrumb}
          textBlockLayout="inset"
        />
      )}
      {page && <ComposeSections sections={page?.sections} page={page} />}
      {page?.seoText1?.text && (
        <TwoColumnText
          content={page?.seoText1}
          colun2Content={page?.seoText2}
          textLayout={page?.seoText2?.text ? TextLayout.TwoColumn : TextLayout.OneColumn}
        />
      )}
      {footer && <Footer page={page} {...footer} />}
    </>
  )
}

const UNBXD_COLLECTION_QUERY = `#graphql
${SITE_HEIRARCHY_FRAGMENT}
query CollectionDetails(
  $handle: String!
  $country: CountryCode
  $language: LanguageCode
  $siteHierarchyMenuHandle: String!
) @inContext(country: $country, language: $language) {
  collection(handle: $handle) {
    id
    handle
    title
    description
    seo {
      description
      title
    }
    image {
      id
      url
      width
      height
      altText
    }
  }
  collections(first: 100) {
    edges {
      node {
        id
        title
        handle
      }
    }
  }
  menu: menu(handle: $siteHierarchyMenuHandle) {
    ...SiteHierarchyMenu
  }
}
`

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  ${SITE_HEIRARCHY_FRAGMENT}
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $cursor: String
    $filters: [ProductFilter!]
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean
    $siteHierarchyMenuHandle: String!
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $pageBy,
        after: $cursor,
        filters: $filters,
        sortKey: $sortKey,
        reverse: $reverse
      ) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
    menu: menu(handle: $siteHierarchyMenuHandle) {
      ...SiteHierarchyMenu
    }
  }
`
