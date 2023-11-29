import { ShopifyAnalyticsProduct } from '@shopify/hydrogen'
import { Metafield, Metaobject, Product, ProductVariant, Shop } from '@shopify/hydrogen/storefront-api-types'
import { SerializeFrom } from '@shopify/remix-oxygen'
import { Page } from 'types/Page.types'

import { SectionProductMainFragment } from './SectionProductMain.fragment.generated'

export type SectionProductMainProps = SectionProductMainFragment & { page: Page } & AdditionalProps

interface AdditionalProps {
  promotionLabelMetaObject?: {
    metaobject: Metaobject
  }
  productDetailIcons?: ProductDetailIcon[]
  analytics?: {
    pageType: 'product'
    resourceId: string
    products: ShopifyAnalyticsProduct[]
    totalValue: number
  }
  shop?: Shop
  selectedVariant?: ProductVariant
  product?: Product
  freeProduct?: FreeProductList
  sizeAndColorProductData?: SizeAndColorProductData
  recommendedProducts?: ProductRecommendations
  promotionLabelIcon
}

type ProductRecommendations = {
  productRecommendations?: Array<SerializeFrom<Product>>
}

type ProductNode = {
  handle: string
  metafields: Metafield[]
}

export type SizeAndColorProductData = {
  nodes: ProductNode[]
}

interface FreeProduct {
  image: Image
  text: string
}

export type FreeProductList = FreeProduct[]

interface Image {
  altText: string | null
  url: string
  width: number
  height: number
}

interface ProductDetailIcon {
  image: Image
  text: string
}

interface MetafieldInfo {
  [key: string]: string
}

export interface ColorData {
  [handle: string]: MetafieldInfo
}

export interface SizeData {
  [handle: string]: MetafieldInfo
}
