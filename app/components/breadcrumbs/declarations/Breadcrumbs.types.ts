import type { CollectionConnection, Menu, MenuItem } from '@shopify/hydrogen/storefront-api-types'

export interface BreadcrumbProps {
  crumbData: {
    title: string
    collections: CollectionConnection
    menu: Menu
    placement: string
    pathname: string
  }
  className?: string
}

export type CustomMenuItem = MenuItem & { depth?: number; parentId?: string }
