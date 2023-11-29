import type { ProductConnection } from '@shopify/hydrogen/storefront-api-types'
import { PRODUCT_CARD_FRAGMENT } from '~/data/fragments'
import { PAGINATION_SIZE } from '~/lib/const'
import {
  transformProduct,
  getPageInfo,
  querySearchResults,
  convertFacetObject,
  FiltersQueryParams,
  SortParam,
  AppliedFilter,
  SearchParams,
  UnbxdParams,
} from '~/lib/unbxd.helper'
import invariant from 'tiny-invariant'

const SEARCH_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query search(
    $searchTerm: String
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $after: String
  ) @inContext(country: $country, language: $language) {
    products(
      first: $pageBy
      sortKey: RELEVANCE
      query: $searchTerm
      after: $after
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

/**
 * Parses the filters from the search parameters and returns the filters and applied filters.
 * @param searchParams The URL search parameters.
 * @returns An object containing the filters and applied filters.
 */
export function parseFilters(searchParams: URLSearchParams): {
  filters: FiltersQueryParams
  appliedFilters: AppliedFilter[]
} {
  const filters: FiltersQueryParams = []
  const appliedFilters: AppliedFilter[] = []

  for (const [key, value] of searchParams.entries()) {
    try {
      if (key.endsWith('_uFilter')) {
        filters.push({ [key]: value })
        appliedFilters.push({ label: value, urlParam: { key, value } })
      }
    } catch (e) {
      console.error(e)
    }
  }

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

    filters.push({ price })
  }

  return { filters, appliedFilters }
}

/**
 * Retrieves the products based on the search parameters and filters.
 * @param unbxdParams The Unbxd parameters.
 * @param searchParams The URL search parameters.
 * @param filters The filters to apply.
 * @param searchTerm The search term.
 * @param storefront The storefront context.
 * @returns A promise that resolves to the ProductConnection or undefined.
 */
export async function getProducts(
  unbxdParams: UnbxdParams,
  searchParams: URLSearchParams,
  filters: FiltersQueryParams,
  searchTerm: string,
  storefront: StorefrontContext,
): Promise<ProductConnection | undefined> {
  if (unbxdParams?.UNBXD_SEARCH_ENABLED) {
    const searchProps: SearchParams = {
      cursor: searchParams.get('cursor'),
      sort: searchParams.get('sort') as SortParam,
      filter: filters,
      collectionName: null,
      searchTerm,
      unbxdParams,
    }

    const unbxdResponse = await querySearchResults(searchProps)

    if (!unbxdResponse?.error) {
      return {
        nodes: unbxdResponse.response.products.map(transformProduct),
        filters: convertFacetObject(unbxdResponse),
        edges: [],
        pageInfo: getPageInfo(unbxdResponse.response),
      }
    }
    console.error('Error rendering products from unbxd')
  } else {
    const data = await storefront.query<{ products: ProductConnection }>(SEARCH_QUERY, {
      variables: {
        pageBy: PAGINATION_SIZE,
        searchTerm,
        cursor: searchParams.get('cursor'),
        country: storefront.i18n.country,
        language: storefront.i18n.language,
      },
    })

    invariant(data, 'No data returned from Shopify API')
    return data.products
  }

  return undefined
}
