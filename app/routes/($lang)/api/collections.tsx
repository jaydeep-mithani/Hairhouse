import { type LoaderArgs } from '@shopify/remix-oxygen'
import invariant from 'tiny-invariant'

const COLLECTION_QUERY_BY_ID = `
  query CollectionDetailsById(
    $id: ID
  ) {
    collection(id: $id) {
        handle
        title
        id
        products(first: 10) {
        nodes {
          vendor
          title
          handle
          collections(first: 1) {
            nodes {
              id
              description
              products(first: 1) {
                nodes {
                  handle
                  vendor
                  variants(first: 1) {
                    nodes {
                      image {
                        id
                        url
                        altText
                        width
                        height
                      }
                      price {
                        amount
                        currencyCode
                      }
                      compareAtPrice {
                        amount
                        currencyCode
                      }
                      product {
                        handle
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const COLLECTION_QUERY_BY_HANDLE = `
  query CollectionDetailsByHandle(
    $handle: String!
    $identifiers: [HasMetafieldsIdentifier!]!
  ) {
    collection(handle: $handle) {
        handle
        title
        id
        products(first: 5) {
          nodes {
            vendor
            title
            handle
            collections(first: 1) {
              nodes {
                id
                description
                products(first: 1) {
                  nodes {
                    vendor
                    handle
                    variants(first: 1) {
                      nodes {
                        image {
                          id
                          url
                          altText
                          width
                          height
                        } 
                        product {
                          handle
                          title
                          
                        }
                      }
                    }
                    metafields(identifiers: $identifiers) {
                      value
                      key
                      namespace
                      description
                    }
                  }
                }
              }
            }
          }
        }
    }
  }
`

export async function loader({ request, context: { storefront } }: LoaderArgs) {
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)

  const shopifyCollectionId = searchParams.get('shopifyCollectionId')
  const handle = searchParams.get('handle')

  let data
  if (shopifyCollectionId) {
    data = await storefront.query<{
      collection
    }>(COLLECTION_QUERY_BY_ID, {
      variables: {
        id: `gid://shopify/Collection/${shopifyCollectionId}`,
      },
    })
  } else if (handle) {
    const identifiers = searchParams.get('keys') ? JSON.parse(searchParams.get('keys') ?? '') : ''

    data = await storefront.query<{
      collection
    }>(COLLECTION_QUERY_BY_HANDLE, {
      variables: {
        handle,
        identifiers,
      },
    })
  }

  const { collection } = data

  invariant(collection, 'No data returned from collection query')

  return collection
}
