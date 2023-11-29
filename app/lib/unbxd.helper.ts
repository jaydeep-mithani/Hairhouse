import { type AppLoadContext } from '@shopify/remix-oxygen'
import {
  FiltersQueryParams,
  SortParam,
  VariantFilterParam,
  PriceFiltersQueryParam,
  VariantOptionFiltersQueryParam,
} from '~/routes/($lang)/collections/$collectionHandle'
import { string } from 'prop-types'

export type SearchParams = {
  searchTerm: string | null
  collectionName: string | null
  filter?: FiltersQueryParams
  sort: SortParam | null
  cursor: string | null
  unbxdParams: UnbxdParams
}

export type UnbxdParams = {
  UNBXD_SEARCH_ENABLED?: boolean | null
  UNBXD_BROWSE_ENABLED?: boolean | null
  UNBXD_SITE_NAME?: string | null
  UNBXD_SITE_KEY?: string | null
  UNBXD_SEARCH_HOST?: string | null
  UNBXD_RECS_HOST?: string | null
  UNBXD_RECS_VERSION?: string | null
}

export type AppliedFilter = {
  label: string
  urlParam: {
    key: string
    value: string
  }
}

export type FiltersQueryParams = Array<VariantFilterParam | PriceFiltersQueryParam | VariantOptionFiltersQueryParam>

export type SortParam = 'price-low-high' | 'price-high-low' | 'best-selling' | 'newest' | 'featured'

export type UnbxdOptions = {
  fields: string[]
  sort: {
    [key: string]: string
  }
  pageSize: number
  priceFacetField: string
}

export type UnbxdPageInfo = {
  numberOfProducts: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  startCursor: number
  totalProductCount: number
  currentPage: number
  noOfPages: number
  endCursor: number
}

export const unbxdOptions: UnbxdOptions = {
  fields: [
    'title',
    'uniqueId',
    'publishedAt',
    'availability',
    'doctype',
    'autosuggest',
    'price',
    'compareAtPrice',
    'availableForSaleOfVariants',
    'handle',
    'sku',
    'productUrl',
    'variantCount',
    'vendor',
    'variantId',
    'v_price',
    'v_compareAtPrice',
    'imageUrl',
  ],
  sort: {
    'price-low-high': 'price asc',
    'price-high-low': 'price desc',
    'best-selling': 'title desc',
    newest: 'publishedAt desc',
  },
  pageSize: 15,
  priceFacetField: 'price',
}

const headers = {
  'Content-Type': 'application/json',
}

/**
 * @returns string
 */

/**
 * Returns the sort query param to be added to the search api construct.
 *
 *
 * @param searchProps - The search state of the application
 * @returns sort query param if applicable else empty string
 *
 */
const getSortParam = (searchProps: SearchParams) => {
  if (searchProps.sort && searchProps.sort !== 'featured') {
    let selectedSortOption = ''
    for (const option in unbxdOptions.sort) {
      if (option === searchProps.sort) {
        selectedSortOption = unbxdOptions.sort[option]
        break
      }
    }
    if (selectedSortOption) {
      return `&sort=${selectedSortOption}`
    }
  }
  return ''
}

/**
 * Creates an UnbxdParams object based on the provided context.
 * @param context - The context object containing the environment variables.
 * @returns The UnbxdParams object with the extracted environment variables.
 */
export const getUnbxdParams = (context: AppLoadContext): UnbxdParams => {
  const unbxdParams: UnbxdParams = {
    UNBXD_SEARCH_ENABLED: context?.env?.UNBXD_SEARCH_ENABLED,
    UNBXD_BROWSE_ENABLED: context?.env?.UNBXD_BROWSE_ENABLED,
    UNBXD_SITE_NAME: context?.env?.UNBXD_SITE_NAME,
    UNBXD_SITE_KEY: context?.env?.UNBXD_SITE_KEY,
    UNBXD_SEARCH_HOST: context?.env?.UNBXD_SEARCH_HOST,
    UNBXD_RECS_HOST: context?.env?.UNBXD_RECS_HOST,
    UNBXD_RECS_VERSION: context?.env?.UNBXD_RECS_VERSION,
  }

  return unbxdParams
}

/**
 * Returns the unbxd api version params.
 *
 *
 * @returns unbxd version params
 *
 */
const getVersionParams = () => {
  return '&version=V2&viewType=GRID&facet.version=V2&facet.multiselect=true&variants=true&variants.count=1'
}

/**
 * Returns the product attributes to be returned for matching products in API response.
 *
 *
 * @returns string which is a comma seperated list of products attributes to be returned
 *
 */
const getFieldsParam = () => {
  return `&fields=${unbxdOptions.fields.join(',')}`
}

/**
 * Returns the page size query param to be added to the search api construct.
 *
 *
 * @returns string representing pagesize query param
 *
 */
const getPageSize = () => {
  return `&rows=${unbxdOptions.pageSize}`
}

/**
 * Returns the hostname and uri for the search api
 *
 *
 * @param module - search|category
 * @returns string representing the hostname and URI
 *
 */
const getHostNameAndPath = (unbxdParams: UnbxdParams, module: string) => {
  const { UNBXD_SEARCH_HOST, UNBXD_SITE_KEY, UNBXD_SITE_NAME } = unbxdParams
  return `${UNBXD_SEARCH_HOST}${UNBXD_SITE_KEY}/${UNBXD_SITE_NAME}/${module}`
}

/**
 * Function to record analytics events which would in turn invoke the Unbxd track api
 *
 *
 * @param name - Event name
 * @param payload - analytics payload
 * @returns void
 *
 */
const trackUnbxdEvent = (name: string, payload: object) => {
  /* if ('Unbxd' in window && 'track' in window.Unbxd) {
        window.Unbxd.track(name, payload)
    } else {
        console.log(
            'Missing Unbxd.track function hence event ' + name + ' not fired'
        )
    } */
}

/**
 * Helper function to record search impression event
 *
 *
 * @param url - The search state of the application
 * @param result - search api response object
 * @returns void
 *
 */
export const recordImpressionEvent = async (url: string, result: unknown) => {
  try {
    const response = result.data.response
    if (response.products.length > 0) {
      const pids = response.products.map((product: unknown) => {
        return product.entityId
      })
      const impressionObj = {
        query: result.data.searchMetaData.queryParams.q,
        pids_list: pids,
        // requestId: window.unbxd_request_id,
      }
      trackUnbxdEvent('search_impression', impressionObj)
    }
  } catch (e) {
    console.error(`Error firing impression event :: ${url}`, e)
  }
}

/**
 * Helper function to record add to cart  event
 *
 *
 * @param pid - product identifier
 * @returns void
 *
 */
export const trackAddCart = (pid: unknown) => {
  if (pid) {
    trackUnbxdEvent('addToCart', {
      pid: String(pid),
      qty: String(1),
      // requestId: window.unbxd_request_id,
    })
  }
}

/**
 * Helper function to record remove from cart  event
 *
 *
 * @param pid - product identifier
 * @returns void
 *
 */
export const trackRemoveCart = (pid: unknown) => {
  if (pid) {
    trackUnbxdEvent('cartRemoval', {
      pid: String(pid),
      qty: String(1),
      // requestId: window.unbxd_request_id,
    })
  }
}

/**
 * Helper function to record query search  event
 *
 *
 * @param query - search term
 * @returns void
 *
 */
export const trackSearchEvent = (query: string | null) => {
  if (query) {
    trackUnbxdEvent('search', { query })
  }
}

/**
 *
 * @param c - string which needs to be hex coded
 * @returns encoded string
 */
function hex(c: string) {
  const v = `0${c.charCodeAt(0).toString(16)}`
  return `\\x${v.substr(v.length - 2)}`
}

/**
 * Sanitize facet values to be used in url params
 *
 * @param value - facet field value
 * @returns encoded value
 */
const encodeFacetValue = function (value: unknown) {
  if (typeof value === 'string') {
    value = value
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/\t/g, '\\t')
      .replace(/\v/g, '\\v')
      .replace(/'/g, "\\'")
      .replace(/"/g, '\\"')
      .replace(/[\x00-\x1F\x80-\x9F]/g, hex)
    return encodeURIComponent(value)
  }
  return value
}

/**
 * fetches the category path from the breadcrumb in multi level facet to construct subsequent category drill down.
 *
 * @param categoryBreadCrumb
 * @param isLastLevelReached
 * @returns
 */
export const getCategoryPathFromCrumb = (categoryBreadCrumb: unknown, isLastLevelReached: boolean): string => {
  if (categoryBreadCrumb.values) {
    if (categoryBreadCrumb.child) {
      return `${encodeFacetValue(categoryBreadCrumb.values[0].name)}>${getCategoryPathFromCrumb(
        categoryBreadCrumb.child,
        isLastLevelReached,
      )}`
    }
    return isLastLevelReached ? '' : encodeFacetValue(categoryBreadCrumb.values[0].name)
  }
  return ''
}
/**
 * Utility function to get the category level in the hireracy
 *
 * @param categoryBreadCrumb - breadcrumb object in multi level facet
 * @returns
 */
export const getCategoryLevel = (categoryBreadCrumb: unknown): number => {
  if (categoryBreadCrumb.child) {
    return getCategoryLevel(categoryBreadCrumb.child)
  }
  return categoryBreadCrumb.level ?? 0
}

/**
 * Predicate to check type of facet value
 *
 * @param facetValue
 * @returns true if value is of type VariantFilterParam
 */
const isVariantFilterParam = (
  facetValue: VariantFilterParam | PriceFiltersQueryParam | VariantOptionFiltersQueryParam,
): facetValue is VariantFilterParam => {
  return true
}

/**
 * Predicate to check type of facet value
 *
 * @param facetValue
 * @returns true if value is of type PriceFiltersQueryParam
 */
const isPriceFilterParam = (
  facetValue: VariantFilterParam | PriceFiltersQueryParam | VariantOptionFiltersQueryParam,
): facetValue is PriceFiltersQueryParam => {
  return true
}

/**
 * Utility function which constructs the filter query params based on the applied filter
 *
 * @param searchProps
 * @returns filter query param to be added to the search API
 */
const getAppliedFilterParams = (searchProps: SearchParams): string => {
  let facetUrl = ''
  if (!searchProps?.filter) return ''

  const appliedFiltersMap = new Map<string, string[]>()

  const transfromToUrlFriendly = (value: string) => {
    const doubleStr = '%22'
    return `${doubleStr}${encodeFacetValue(value)}${doubleStr}`
  }

  try {
    if (searchProps.filter.length) {
      searchProps.filter.forEach((facet) => {
        if (isVariantFilterParam(facet)) {
          const facetField = Object.keys(facet)[0]
          const facetValue = transfromToUrlFriendly(Object.values(facet)[0])
          appliedFiltersMap.has(facetField)
            ? appliedFiltersMap.set(facetField, [...appliedFiltersMap.get(facetField), facetValue])
            : appliedFiltersMap.set(facetField, [facetValue])
        } else if (isPriceFilterParam(facet)) {
          const { min, max } = facet.price
          const value = `[${min} TO ${max}]`
          facetUrl += `&filter=${unbxdOptions.priceFacetField}:${value}`
        }
      })

      facetUrl += Array.from(appliedFiltersMap.entries())
        .map(([facetKey, facetValues]) => {
          const value = facetValues.join(` OR ${facetKey}:`)
          return `&filter=${facetKey}:${value}`
        })
        .join('')
    }
  } catch (e) {
    console.error(e)
  }
  return facetUrl
}

/**
 * Utility function used to construct Unbxd Search API based on site and applied search props
 *
 * @param searchProps
 * @returns
 */
export function getSearchUrl(searchProps: SearchParams) {
  return `${getHostNameAndPath(searchProps?.unbxdParams, 'search')}?q=${
    searchProps.searchTerm
  }${getVersionParams()}${getFieldsParam()}${getPageSize()}${getPageStart(searchProps)}${getSortParam(
    searchProps,
  )}${getAppliedFilterParams(searchProps)}`
}

/**
 * Utility function used to construct Unbxd Autosuggest API based on site and applied search props
 *
 * @param searchProps
 * @returns
 */
export function getAutosuggesthUrl(searchProps: SearchParams) {
  return `${getHostNameAndPath(searchProps?.unbxdParams, 'autosuggest')}?q=${
    searchProps.searchTerm
  }&version=V2&inFields.count=0&popularProducts.count=10&keywordSuggestions.count=9&topQueries.count=7&popularProducts.fields=${getFieldsParam()}`
}

/**
 * Utility function used to construct Unbxd Recs API based on site and page type
 *
 * @param recsProps
 * @returns
 */
export function getRecsUrl(recsProps) {
  if (!recsProps.unbxdParams) {
    return null
  }
  const { UNBXD_RECS_HOST, UNBXD_RECS_VERSION, UNBXD_SITE_KEY, UNBXD_SITE_NAME } = recsProps.unbxdParams

  return `${UNBXD_RECS_HOST}${UNBXD_RECS_VERSION}/${UNBXD_SITE_KEY}/${UNBXD_SITE_NAME}/items?pageType=${recsProps.pageType}&uid=${recsProps.uid}`
}

/**
 * Utility function used to fetch recs api results from unbxd
 *
 * @param searchProps
 * @returns
 */
export async function queryRecsResults(recsProps) {
  return fetch(getRecsUrl(recsProps), {
    method: 'GET',
    headers,
  })
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      return console.error(error)
    })
}

/**
 * Returns the pagination position query param to be added to the search api construct.
 *
 * @param searchProps
 * @returns string representing pagination query param
 *
 */
const getPageStart = (searchProps: SearchParams) => {
  if (searchProps.cursor) {
    return `&start=${searchProps.cursor}`
  }
  return ''
}

/**
 * Utility function used to construct Unbxd Category API based on site and applied search props
 *
 * @param searchProps
 * @returns
 */
export function getBrowseUrl(searchProps: SearchParams) {
  return `${getHostNameAndPath(searchProps?.unbxdParams, 'category')}?p=category:"${
    searchProps.collectionName
  }"${getVersionParams()}${getFieldsParam()}${getPageSize()}${getPageStart(searchProps)}&pagetype=boolean${getSortParam(
    searchProps,
  )}${getAppliedFilterParams(searchProps)}`
}

/**
 * Utility function used to fetch category api results from unbxd based on searchprops
 *
 * @param searchProps
 * @returns
 */
export async function queryCollection(searchProps: SearchParams) {
  return fetch(getBrowseUrl(searchProps), {
    method: 'GET',
    headers,
  })
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      return console.error(error)
    })
}

/**
 * Utility function used to fetch search api results from unbxd based on searchprops
 *
 * @param searchProps
 * @returns
 */
export async function querySearchResults(searchProps: SearchParams) {
  return fetch(getSearchUrl(searchProps), {
    method: 'GET',
    headers,
  })
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      return console.error(error)
    })
}

/**
 * Utility function used to fetch autosuggest api results from unbxd based on searchprops
 *
 * @param searchProps
 * @returns
 */
export async function queryAutosuggestResults(searchProps: UnbxdParams) {
  return fetch(getAutosuggesthUrl(searchProps), {
    method: 'GET',
    headers,
  })
    .then((res) => {
      return res.json()
    })
    .catch((error) => {
      return console.error(error)
    })
}

/**
 * Utility function to fetch the pageinfo object corresponding to the unbxd search API response.
 *
 *
 * @returns object pageinfo object
 *
 */
export function getPageInfo(response: UnbxdPageInfo): UnbxdPageInfo {
  return {
    numberOfProducts: response.numberOfProducts,
    hasPreviousPage: response.start > 0,
    hasNextPage: response.numberOfProducts > response.start + unbxdOptions.pageSize,
    startCursor: response.numberOfProducts > 0 ? response.start + 1 : 0,
    totalProductCount: response.numberOfProducts,
    currentPage: Math.ceil(response.start / unbxdOptions.pageSize) + 1,
    noOfPages: Math.ceil(response.numberOfProducts / unbxdOptions.pageSize),
    endCursor:
      response.start + unbxdOptions.pageSize < response.numberOfProducts
        ? response.start + unbxdOptions.pageSize
        : response.numberOfProducts,
  }
}

/**
 * utility function used to tranform Unbxd Response Object to Shopify Product Object
 *
 * @param product
 * @returns
 */
export function transformProduct(product) {
  return {
    description: '',
    handle: product.handle,
    id: `gid://shopify/Product/${product.uniqueId}`,
    publishedAt: product.publishedAt,
    title: product.title,
    vendor: product.vendor,
    variants: {
      nodes: product.variants.map((variant) => {
        return {
          id: `gid://shopify/ProductVariant/${variant.variantId}`,
          selectedOptions: [],
          product: {
            handle: product.handle,
            title: product.title,
          },
          compareAtPrice: {
            amount: String(variant.v_compareAtPrice),
            currencyCode: 'AUD',
          },
          price: {
            amount: String(variant.v_price),
            currencyCode: 'AUD',
          },
          imageUrl: variant?.imageUrl,
          image: {
            url: variant?.imageUrl?.length ? variant?.imageUrl[0] : '',
            altText: product.title,
            height: '800',
            width: '800',
          },
        }
      }),
    },
  }
}

/**
 * Extracts the product handle from the given product URL.
 * @param productUrl The product URL.
 * @returns The product handle extracted from the URL.
 */
function getProductHandleFromUrl(productUrl: string): string {
  const handleIndex = productUrl.lastIndexOf('/') + 1
  return productUrl.slice(handleIndex)
}

/**
 * utility function used to tranform Unbxd Recs Widget Response Object to Shopify Product Object
 *
 * @param product
 * @returns
 */
export function transformRecsProduct(product) {
  return {
    description: '',
    handle: getProductHandleFromUrl(product?.productUrl),
    id: `gid://shopify/Product/${product?.uniqueId}`,
    title: product?.title,
    vendor: product?.vendor,
    variants: {
      nodes: [
        {
          id: `gid://shopify/ProductVariant/${product?.variantId}`,
          selectedOptions: [],
          product: {
            handle: getProductHandleFromUrl(product?.productUrl),
            title: product?.title,
          },
          compareAtPrice: {
            amount: String(product?.compareAtPrice),
            currencyCode: 'AUD',
          },
          price: {
            amount: String(product?.price),
            currencyCode: 'AUD',
          },
          imageUrl: product?.imageUrl,
          image: {
            url: product?.imageUrl?.length ? product?.imageUrl[0] : '',
            altText: product?.title,
            height: '800',
            width: '800',
          },
        },
      ],
    },
  }
}

/**
 * Utility function used to tranform Unbxd Autosuggest products object to suggestion
 *
 * @param product
 * @returns
 */
export const convertSuggestions = (result: unknown): unknown[] => {
  const suggestions = []
  suggestions.push({
    title: 'Suggested searches',
    values: result
      .filter((suggestion: unknown) => {
        return suggestion.doctype === 'KEYWORD_SUGGESTION'
      })
      .map((suggestion: unknown) => {
        return suggestion.autosuggest
      }),
  })
  suggestions.push({
    title: 'Popular searches',
    values: result
      .filter((suggestion: unknown) => {
        return suggestion.doctype === 'TOP_SEARCH_QUERIES' || suggestion.doctype === 'PROMOTED_SUGGESTION'
      })
      .map((suggestion: unknown) => {
        return suggestion.autosuggest
      }),
  })

  return suggestions
}

const getSelectedFilterValue = (result: unknown): Map<string, string[]> => {
  const appliedFilters = new Map<string, string[]>()
  if (result.searchMetaData.queryParams.filter) {
    if (Array.isArray(result.searchMetaData.queryParams.filter)) {
      result.searchMetaData.queryParams.filter.forEach((value: string) => {
        const filterParts = value.split(':')
        if (filterParts.length > 1) {
          appliedFilters.set(
            filterParts[0],
            filterParts[1].split(' OR ').map((term: unknown) => {
              return term.replaceAll('"', '')
            }),
          )
        }
      })
    } else {
      const filterParts = result.searchMetaData.queryParams.filter.split(':')
      if (filterParts.length > 1) {
        appliedFilters.set(
          filterParts[0],
          filterParts[1].split(' OR ').map((term: unknown) => {
            return term.replaceAll('"', '')
          }),
        )
      }
    }
  }
  return appliedFilters
}

/**
 * utility function used to tranform Unbxd Response Object to Shopify Filter Object
 *
 * @param product
 * @returns
 */
export const convertFacetObject = (result: unknown): unknown[] => {
  const facetList = []
  const facets = result.facets
  const selectedValues = getSelectedFilterValue(result)
  try {
    if (facets && facets.text) {
      facetList.push(...convertTextFacet(facets.text.list, selectedValues))
    }
    if (facets && facets.multilevel) {
      facetList.push(...convertMultiLevelFacet(facets.multilevel.list))
    }
    if (facets && facets.range) {
      facetList.push(...convertRangeFacet(facets.range.list))
    }
    facetList.sort(function (x, y) {
      if (x.position < y.position) {
        return -1
      }
      if (x.position > y.position) {
        return 1
      }
      return 0
    })
    facetList.forEach((facet) => delete facet.position)
  } catch (e) {
    console.error(e)
  }
  return facetList
}

/**
 * Filter function used to transform filter values from unbxd to shopify object schema
 *
 * @param facet
 * @param values
 * @returns
 */
const modifyValues = function (facet: unknown, selectedValues: Map<string, string[]>, values = []) {
  const valuesList: unknown = []
  values.forEach((value: unknown, index: number) => {
    const data: unknown = value
    if (value.name) {
      valuesList.push({
        ...data,
      })
    } else {
      let prevData = ''
      if (index % 2 === 1) {
        prevData = values[index - 1]
        valuesList.push({
          id: facet.filterField,
          label: prevData,
          input: `{"${facet.filterField}":"${prevData}"}`,
          count: data,
          isSelected:
            selectedValues.has(facet.filterField) && selectedValues.get(facet.filterField)?.includes(prevData),
        })
      }
    }
  })
  return valuesList
}

/**
 * Filter function used to transform Text type filter values from unbxd to shopify object schema
 *
 * @param facets
 * @returns
 */
const convertTextFacet = function (facets: unknown, selectedValues: Map<string, string[]>) {
  const facetList: unknown = []
  const modifiedFacets = facets || []
  modifiedFacets.forEach((facet: unknown) => {
    const { values, displayName, filterField, position } = facet
    const transformedFacet: unknown = {
      id: filterField,
      label: displayName,
      type: 'LIST',
      position: position || -1,
      values: modifyValues(facet, selectedValues, values),
    }
    facetList.push(transformedFacet)
  })
  return facetList
}

/**
 * utility function to get the leaf node in multi level structure
 *
 * @param categoryBreadCrumb
 * @returns
 */
const getLastCategoryName = function (categoryBreadCrumb: unknown): unknown {
  if (categoryBreadCrumb.child) {
    return getLastCategoryName(categoryBreadCrumb.child)
  }
  return categoryBreadCrumb.values ? categoryBreadCrumb.values[0].name : 'not available'
}
/**
 * utility function used to check if the leaf node is reached in an iteration of multi level object
 *
 * @param breadcrumb
 * @param values
 * @returns
 */
const isLastLevel = function (breadcrumb: unknown, values: unknown) {
  const lastLevelCategory = getLastCategoryName(breadcrumb)
  return (
    values.filter((value: unknown) => {
      return value.name === lastLevelCategory
    }).length > 0
  )
}

/**
 * Filter function used to transform Text type filter values from unbxd to shopify object schema
 *
 * @param values
 * @param breadcrumb
 * @returns
 */
const convertMultiValue = function (values = [], breadcrumb = null) {
  const valuesList: unknown = []
  const isLastLevelReached = isLastLevel(breadcrumb, values)
  values.forEach((value: unknown) => {
    const data = value

    if (value.name) {
      valuesList.push({
        display: value.name,
        value: value.name,
        count: null,
        isLastLevelReached,
        breadcrumb,
        ...data,
      })
    }
  })
  return valuesList
}
/**
 * utility function to format number to 2 decimal currency formatted string
 *
 * @param amount
 * @returns
 */
const formatMoneyEscapeOnlyNull = (amount: number | null) => {
  if (!amount && amount !== 0) {
    // safe escape
    return 0
  }
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}
/**
 * Filter function used to transform Multilevel  filter values from unbxd to shopify object schema
 *
 * @param facets
 * @returns
 */
const convertMultiLevelFacet = function (facets: unknown) {
  const facetList: unknown = []
  const modifiedFacets = facets || []
  modifiedFacets.forEach((facet: unknown) => {
    const { values, displayName, filterField, position, breadcrumb } = facet

    facet.attribute = filterField
    facet.label = displayName
    facet.position = position || -1
    facet.type = 'multilevel'
    facet.value = convertMultiValue(values, breadcrumb)
    facetList.push(facet)
  })
  return facetList
}

/**
 * Filter function used to transform Range filter values from unbxd to shopify object schema
 *
 * @param facets
 * @returns
 */
const convertRangeFacet = (facets: unknown) => {
  const facetList: unknown = []
  const modifiedFacets = facets || []
  modifiedFacets.forEach((facet: unknown) => {
    const {
      values: { counts, gap },
    } = facet
    const values = []
    const valuesHolder = []
    for (let i = 0; i < counts.length; i += 2) {
      const valLabel = Number(counts[i])
      // facet value object
      const valObject = {
        name: valLabel,
        count: counts[i + 1],
        dataId: valLabel,
      }

      // push facet object into a temporary holder
      valuesHolder.push(valObject)
      if (valuesHolder.length >= 2) {
        // get from and end values from the holder
        const [from, end] = valuesHolder
        values.push({
          from,
          end,
          display: `${formatMoneyEscapeOnlyNull(from.name)} - ${formatMoneyEscapeOnlyNull(end.name)}`,
          count: from.count,
        })
        // remove the first value from the holder
        valuesHolder.shift()
        // use the first value as from value in the next iteration
      }
    }

    if (valuesHolder.length === 1) {
      const [from] = valuesHolder
      // formulate an end value using gap
      const valLabel = from.dataId + gap
      const end = {
        name: valLabel,
        count: 0,
        dataId: valLabel,
      }
      values.push({
        from,
        end,
        display: `${formatMoneyEscapeOnlyNull(from.name)} - ${formatMoneyEscapeOnlyNull(end.name)}`,
        count: from.count,
      })
    }
    // pick up start and end values from the parsed array.
    const startVal = values[0].from.dataId
    const endVal = values[values.length - 1].end.dataId
    const transformedFacet: unknown = {
      id: facet.facetName,
      label: facet.displayName,
      type: 'PRICE_RANGE',
      position: facet.position || -1,
      values: [
        {
          id: facet.facetName,
          label: facet.displayName,
          count: 0,
          input: JSON.stringify({ price: { min: startVal, max: endVal } }),
        },
      ],
    }

    facetList.push(transformedFacet)
  })
  return facetList
}

export function getSortValuesFromParam(sortParam: SortParam | null) {
  switch (sortParam) {
    case 'price-high-low':
      return {
        sortKey: 'PRICE',
        reverse: true,
      }
    case 'price-low-high':
      return {
        sortKey: 'PRICE',
        reverse: false,
      }
    case 'best-selling':
      return {
        sortKey: 'BEST_SELLING',
        reverse: false,
      }
    case 'newest':
      return {
        sortKey: 'CREATED',
        reverse: true,
      }
    case 'featured':
      return {
        sortKey: 'MANUAL',
        reverse: false,
      }
    default:
      return {
        sortKey: 'RELEVANCE',
        reverse: false,
      }
  }
}
