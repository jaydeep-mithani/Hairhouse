import { MEDIA_FRAGMENT, SITE_HEIRARCHY_FRAGMENT } from '~/data/fragments'

export const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
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
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`

export const METAOBJECT_BY_ID_QUERY = `#graphql
  query MetaObjectById($id: ID!){
    metaobject(id: $id) {
      handle,
      id,
      fields {
        value
        key
      }
    }
  }
`

export const IMAGES_BY_IDS_QUERY = `#graphql
query ImagesByIds($ids: [ID!]!){
  nodes(ids: $ids) {
    ... on MediaImage {
      image {
        altText
        url
        width
        height
      }
      id
    }
  }
}
`

export const NODES_BY_IDS_QUERY = `#graphql
  query NodesByIds($ids: [ID!]!){
    nodes(ids: $ids) {
      ... on Metaobject {
        handle
        fields {
          key
          value
        }
      }
    }
  }
`

export const PRODUCT_BY_ID_QUERY = `#graphql
  query ProductById($id: ID!) {
    product(id: $id) {
      featuredImage {
        width
        height
        url
        altText
      }
    }
  }
`

export const PRODUCTS_METAFIELDS_BY_IDS_QUERY = `#graphql
  query ProductsById ($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        handle
        metafields (identifiers: [{namespace: "custom", key: "colour_name"},{namespace: "custom", key:"custitem_size_variant"}, {namespace: "custom", key:"custitem_hex_colour1"},{namespace: "custom", key:"custitem_hex_colour2"}]){
          value
          key
          namespace
        }
      }
    }
  }
`

export const PRODUCT_QUERY = `#graphql
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${SITE_HEIRARCHY_FRAGMENT}

  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
    $siteHierarchyMenuHandle: String!
  ) @inContext(country: $country, language: $language) {

    product(handle: $handle) {
      id
      title
      vendor
      handle
      tags
      descriptionHtml
      description
      collections(first: 20) {
        nodes {
          title
          onlineStoreUrl
          id
          handle
        }
      }
      metafields (identifiers: [{namespace: "custom", key:"ingredients_list"},{namespace: "custom", key: "custitem_pre_orderitem"},{namespace: "custom", key:"custitem_b2c_how_to"}, {namespace: "custom", key:"custitem_b2c_ingredients"},{namespace: "custom", key:"custitem_b2c_delivery_desc"},{namespace: "custom", key:"custitem_google_product_description"},{namespace: "custom", key:"custitem_pre_orderdate"},{namespace: "custom", key:"promotion_label"},{namespace: "custom", key:"internalid"},{namespace: "custom", key:"savings"},{namespace: "custom", key:"custitem_pack_value_at"}]){
        value
        key
        namespace
      }
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 20) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
    menu: menu(handle: $siteHierarchyMenuHandle) {
      ...SiteHierarchyMenu
    }
  }
`

export const RECOMMENDED_PRODUCTS_QUERY = `#graphql
${MEDIA_FRAGMENT}
${PRODUCT_VARIANT_FRAGMENT}
query productRecommendations($productId: ID!) {
  productRecommendations(productId: $productId) {
    id
    title
    vendor
    handle
    tags
    descriptionHtml
    
    collections(first: 20) {
      nodes {
        title
        onlineStoreUrl
        id
        handle
      }
    }
    media(first: 7) {
      nodes {
        ...Media
      }
    }
    variants(first: 20) {
      nodes {
        ...ProductVariantFragment
      }
    }
  }
}

`

export const RELATED_PRODUCTS_QUERY = `#graphql
${MEDIA_FRAGMENT}
${PRODUCT_VARIANT_FRAGMENT}

query RelatedProducts($selectedOptions: [SelectedOptionInput!]!) {
  products(first: 3) {
    nodes {
      ...on Product{
          id
        title
        vendor
        handle
        tags
        descriptionHtml
        description
        collections(first: 20) {
          nodes {
            title
            onlineStoreUrl
            id
            handle
          }
        }
        metafields (identifiers: [{namespace: "custom", key:"ingredients_list"},{namespace: "custom", key: "custitem_pre_orderitem"},{namespace: "custom", key:"custitem_b2c_how_to"}, {namespace: "custom", key:"custitem_b2c_ingredients"},{namespace: "custom", key:"custitem_b2c_delivery_desc"},{namespace: "custom", key:"custitem_google_product_description"},{namespace: "custom", key:"custitem_pre_orderdate"},{namespace: "custom", key:"promotion_label"},{namespace: "custom", key:"internalid"}]){
          value
          key
          namespace
        }
        options {
          name
          values
        }
        selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
          ...ProductVariantFragment
        }
        media(first: 7) {
          nodes {
            ...Media
          }
        }
        variants(first: 20) {
          nodes {
            ...ProductVariantFragment
          }
        }
      }
    }
  }
}
`
