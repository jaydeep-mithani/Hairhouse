import { useLoaderData } from '@remix-run/react'
import { flattenConnection } from '@shopify/hydrogen'
import type { ProductConnection } from '@shopify/hydrogen/storefront-api-types'
import { type ActionArgs, defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { PRODUCT_CARD_FRAGMENT } from '~/data/fragments'
import { PAGINATION_SIZE } from '~/lib/const'
import {
  transformProduct,
  UnbxdParams,
  getUnbxdParams,
  getPageInfo,
  queryAutosuggestResults,
  convertSuggestions,
  SearchParams,
} from '~/lib/unbxd.helper'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'
import { SectionSearchMain, getProducts, parseFilters } from '~/sections/sectionSearchMain'
import { CMsPagesDocument, CMsPagesQuery } from 'graphql/cmsPage/CMSPage.generated'
import invariant from 'tiny-invariant'
import { createClient } from 'urql'

export default function () {
  const { page, header, footer } = useLoaderData<typeof loader>()

  return (
    <>
      {header && <HeaderSection page={page} {...header} />}
      <SectionSearchMain />
      {footer && <Footer page={page} {...footer} />}
    </>
  )
}

export async function action({ request, context }: ActionArgs) {
  const [formData] = await Promise.all([request.formData()])
  const searchTerm = formData.get('searchTerm')

  const unbxdParams: UnbxdParams = getUnbxdParams(context)

  const searchProps: SearchParams = {
    cursor: null,
    sort: null,
    collectionName: null,
    searchTerm,
    unbxdParams,
  }
  let products
  const unbxdResponse = await queryAutosuggestResults(searchProps)
  if (unbxdResponse) {
    products = {
      nodes: unbxdResponse.response.products
        .filter((product) => {
          return product.doctype === 'POPULAR_PRODUCTS'
        })
        .map((product) => {
          return transformProduct(product)
        }),
      suggestions: convertSuggestions(unbxdResponse.response.products),
      filters: [],
      edges: [],
      pageInfo: getPageInfo(unbxdResponse.response),
      searchMetaData: unbxdResponse.searchMetaData,
    }
  } else {
    console.error('Error rendering products from unbxd ')
    return null
  }
  return products
}

const SEARCH_NO_RESULTS_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query searchNoResult(
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
  ) @inContext(country: $country, language: $language) {
    featuredProducts: products(first: $pageBy) {
      nodes {
        ...ProductCard
      }
    }
  }
`

export async function getNoResultRecommendations(storefront: LoaderArgs['context']['storefront']) {
  const data = await storefront.query<{
    featuredProducts: ProductConnection
  }>(SEARCH_NO_RESULTS_QUERY, {
    variables: {
      pageBy: PAGINATION_SIZE,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  })

  invariant(data, 'No data returned from Shopify API')

  return {
    featuredProducts: flattenConnection(data.featuredProducts),
  }
}

export async function loader({ request, context }: LoaderArgs) {
  const client = createClient({
    url: context?.env?.HYGRAPH_API_ENDPOINT,
    fetchOptions: () => {
      const token = context?.env?.PRIVATE_HYGRAPH_PERMANENT_AUTH_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })

  const { page, header, footer }: CMsPagesQuery = await client
    .query(CMsPagesDocument, { url: 'search' })
    .toPromise()
    .then((result) => {
      return {
        page: result?.data?.pages?.[0],
        header: result?.data?.websiteConfigs?.[0]?.header,
        footer: result?.data?.websiteConfigs?.[0]?.footer,
      }
    })

  const { storefront } = context
  const searchParams = new URL(request.url).searchParams
  const searchTerm = searchParams.get('q')

  const { filters, appliedFilters } = parseFilters(searchParams)
  const unbxdParams: UnbxdParams = getUnbxdParams(context)

  const products = await getProducts(unbxdParams, searchParams, filters, searchTerm, storefront)

  const getRecommendations = !searchTerm || products?.nodes?.length === 0

  return defer({
    page,
    header,
    footer,
    searchTerm,
    products,
    appliedFilters,
    noResultRecommendations: getRecommendations ? getNoResultRecommendations(storefront) : Promise.resolve(null),
  })
}
