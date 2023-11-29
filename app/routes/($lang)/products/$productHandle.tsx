import { useLoaderData } from '@remix-run/react'
import { AnalyticsPageType, ShopifyAnalyticsProduct } from '@shopify/hydrogen'
import {
  Image,
  Menu,
  Metaobject,
  Product as ProductType,
  ProductVariant,
  SelectedOptionInput,
  Shop,
} from '@shopify/hydrogen/storefront-api-types'
import { AppLoadContext, defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { Breadcrumbs } from '~/components/breadcrumbs'
import { ComposeSections } from '~/components/composeSections/ComposeSections'
import { Gap } from '~/components/productSection/Gap'
import {
  extractIconIds,
  getFreeProductId,
  getGroupTag,
  getMetaobjectId,
  mapProductIds,
  mergeNodeData,
} from '~/lib/utils'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'
import { ProductPagesDocument, ProductPagesQuery } from 'graphql/productPage/ProductPage.generated'
import {
  IMAGES_BY_IDS_QUERY,
  METAOBJECT_BY_ID_QUERY,
  NODES_BY_IDS_QUERY,
  PRODUCTS_METAFIELDS_BY_IDS_QUERY,
  PRODUCT_BY_ID_QUERY,
  PRODUCT_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
  RELATED_PRODUCTS_QUERY,
} from 'graphql/productPage/ShopifyProductQueries'
import invariant from 'tiny-invariant'
import { createClient } from 'urql'

import styles from '../../../components/productSection/ProductHandle.module.css'

export async function loader({ params, request, context }: LoaderArgs) {
  const { productHandle } = params
  invariant(productHandle, 'Missing productHandle param, check route filename')

  const searchParams = new URL(request.url).searchParams
  const selectedOptions: SelectedOptionInput[] = []

  searchParams.forEach((value, name) => {
    selectedOptions.push({ name, value })
  })

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

  const { productPages, websiteConfigs } = await client
    .query<ProductPagesQuery>(ProductPagesDocument, { handle: productHandle })
    .toPromise()
    .then((result) => result.data || { productPages: [], websiteConfigs: [] })

  const [page, header, footer] = [productPages?.[0], websiteConfigs?.[0]?.header, websiteConfigs?.[0]?.footer]

  const SITE_HEIRARCHY_HANDLE = '_site-hierarchy'

  const { shop, product, menu } = await context.storefront.query<{
    product: ProductType & { selectedVariant?: ProductVariant }
    shop: Shop
    menu: Menu
  }>(PRODUCT_QUERY, {
    variables: {
      handle: productHandle,
      selectedOptions,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
      siteHierarchyMenuHandle: SITE_HEIRARCHY_HANDLE,
    },
  })

  if (!product?.id) {
    throw new Response(null, { status: 404 })
  }

  const firstVariant = product.variants.nodes[0]
  const selectedVariant = product.selectedVariant ?? firstVariant

  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: product.id,
    variantGid: selectedVariant.id,
    name: product.title,
    variantName: selectedVariant.title,
    brand: product.vendor,
    price: selectedVariant.price.amount,
  }

  const fetchMetaobject = async (context: AppLoadContext, metaobjectId: string) => {
    return context.storefront.query<{ metaobject: Metaobject }>(METAOBJECT_BY_ID_QUERY, {
      variables: {
        id: metaobjectId,
      },
    })
  }

  const fetchMetaObjectsByIDs = async (context: AppLoadContext, ids: string) => {
    return context.storefront.query<{ nodes: Metaobject[] }>(NODES_BY_IDS_QUERY, {
      variables: {
        ids,
      },
    })
  }

  const fetchMetaObjectsIconsById = async (context: AppLoadContext, ids: string) => {
    return context.storefront.query<{ nodes: Image[] }>(IMAGES_BY_IDS_QUERY, {
      variables: {
        ids,
      },
    })
  }

  const fetchProductById = async (context: AppLoadContext, productId: string) => {
    return context.storefront.query<{ product: ProductType }>(PRODUCT_BY_ID_QUERY, {
      variables: {
        id: productId,
      },
    })
  }

  const fetchProductsByTag = async (context: AppLoadContext, groupTag: string) => {
    const PRODUCTS_BY_TAG_QUERY = `#graphql
      query {
        products(first: 10, query: "tag:'${groupTag}'") {
          nodes {
            id
          }
        }
      }
    `
    return context.storefront.query<{ products: { nodes: ProductType[] } }>(PRODUCTS_BY_TAG_QUERY, {
      variables: {},
    })
  }

  const fetchRecommendedProducts = async (context: AppLoadContext, productId: string) => {
    return context.storefront.query<{ products: { nodes: ProductType[] } }>(RECOMMENDED_PRODUCTS_QUERY, {
      variables: { productId },
    })
  }

  const fetchRelatedProducts = async (context: AppLoadContext) => {
    return context.storefront.query<{ products: { nodes: ProductType[] } }>(RELATED_PRODUCTS_QUERY, {
      variables: { selectedOptions },
    })
  }

  const fetchProductMetafieldsByIds = async (context: AppLoadContext, ids: string[]) => {
    return context.storefront.query<{ data: { nodes: ProductType[] } }>(PRODUCTS_METAFIELDS_BY_IDS_QUERY, {
      variables: {
        ids,
      },
    })
  }

  let promotionLabelMetaObject = null
  const promotionLabelMetaObjectId = getMetaobjectId(product, 'promotion_label')
  promotionLabelMetaObject = promotionLabelMetaObjectId && (await fetchMetaobject(context, promotionLabelMetaObjectId))

  const promotionLabelIconId = promotionLabelMetaObject?.metaobject?.fields?.find((item) => {
    return item?.key === 'circle_image'
  })?.value

  const promotionLabelIcon = promotionLabelIconId && (await fetchMetaObjectsIconsById(context, promotionLabelIconId))

  let ingredientsUspMetaObject = null
  const ingredientsMetaObjectUspIds = getMetaobjectId(product, 'ingredients_list')
  ingredientsUspMetaObject =
    ingredientsMetaObjectUspIds && (await fetchMetaObjectsByIDs(context, JSON.parse(ingredientsMetaObjectUspIds)))

  const iconIds = ingredientsUspMetaObject && extractIconIds(ingredientsUspMetaObject.nodes)
  const metaObjectsIngredientsImages = iconIds && (await fetchMetaObjectsIconsById(context, iconIds))
  const productDetailIcons =
    ingredientsUspMetaObject &&
    metaObjectsIngredientsImages &&
    mergeNodeData(ingredientsUspMetaObject.nodes, metaObjectsIngredientsImages.nodes)

  let freeProduct = null
  const freeProductId = promotionLabelMetaObject && getFreeProductId(promotionLabelMetaObject)
  freeProduct = freeProductId && (await fetchProductById(context, freeProductId))

  let groupedProducts = null
  const groupTag = getGroupTag(product, 'group:')
  groupedProducts = groupTag && (await fetchProductsByTag(context, groupTag))

  const recommendedProducts = await fetchRecommendedProducts(context, product.id)

  const relatedProducts = await fetchRelatedProducts(context)

  let sizeAndColorProductData = null
  const transformedGroupedProducts = groupedProducts && mapProductIds(groupedProducts.products)
  sizeAndColorProductData =
    transformedGroupedProducts && (await fetchProductMetafieldsByIds(context, transformedGroupedProducts))

  return defer({
    page,
    header,
    footer,
    promotionLabelMetaObject,
    productDetailIcons,
    promotionLabelIcon: promotionLabelIcon?.nodes[0]?.image,
    analytics: {
      pageType: AnalyticsPageType.product,
      resourceId: product.id,
      products: [productAnalytics],
      totalValue: parseFloat(selectedVariant.price.amount),
    },
    shop,
    selectedVariant,
    product,
    menu,
    freeProduct,
    sizeAndColorProductData,
    recommendedProducts,
    relatedProducts,
  })
}

export default function ProductPage() {
  const {
    page,
    header,
    footer,
    product,
    menu,
    promotionLabelMetaObject,
    analytics,
    shop,
    selectedVariant,
    freeProduct,
    sizeAndColorProductData,
    productDetailIcons,
    promotionLabelIcon,
    recommendedProducts,
    relatedProducts,
  } = useLoaderData<typeof loader>()
  const { title, collections } = product

  const sectionWithShopifyData = page?.sections.map((section) => {
    return {
      ...section,
      promotionLabelMetaObject,
      productDetailIcons,
      promotionLabelIcon,
      analytics,
      shop,
      selectedVariant,
      product,
      freeProduct,
      sizeAndColorProductData,
      recommendedProducts,
      relatedProducts,
    }
  })

  // TODO: make this a reusable component
  return (
    <div className={styles.productPageSection}>
      {header && <HeaderSection page={page} {...header} />}
      <Gap gap="1rem" mobileGap="1rem" />
      {!page?.hideBreadcrumb && menu && (
        <Breadcrumbs className={styles.breadcrumbs} crumbData={{ title, collections, menu, placement: 'product' }} />
      )}
      <Gap gap="1.5rem" mobileGap="1rem" />
      {page && <ComposeSections sections={sectionWithShopifyData} page={page} />}
      {footer && <Footer page={page} {...footer} />}
    </div>
  )
}
