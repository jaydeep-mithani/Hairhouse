import { getPathFromUrl } from '~/lib/utils'

import { BreadcrumbProps, CustomMenuItem } from '../declarations/Breadcrumbs.types'

export const getBreadcrumbs = (crumbData: BreadcrumbProps['crumbData']) => {
  if (!crumbData) {
    console.error('error: Unablle to find breadcrumbs menu')
    return
  }

  const { title, collections, menu, placement, pathname = '' } = crumbData

  const hierarchyTree = new Map()
  const flatHierarchyTree = new Map()
  const productCollections = new Map()
  let crumbs = [
    {
      path: pathname,
      title,
    },
  ]
  const crumbsPrefix = {
    path: '/',
    title: 'Home',
  }

  if (!collections?.length) {
    crumbs = [crumbsPrefix, ...crumbs]
    return crumbs
  }

  // we parse site hierarchy tree and assign to each child node it's parent node ID and nesting depth
  // so they can be easy to navagate through.
  // then we create flat site Hierarchy and list of collections product belongs to.
  const assignDepth = (arr: Array<CustomMenuItem>, parentId: string, depth = 0): void => {
    arr.forEach((child: CustomMenuItem) => {
      child.depth = depth
      child.parentId = parentId
      hierarchyTree.set(child.resourceId, child)
      flatHierarchyTree.set(child.id, child)
      if (child?.items?.length) {
        assignDepth(child.items, child.id, depth + 1)
      }
    })
  }

  menu?.items.length && assignDepth(menu.items)

  collections?.map((node) => {
    if (hierarchyTree.has(node.id)) {
      productCollections.set(hierarchyTree.get(node.id).depth, hierarchyTree.get(node.id))
    }
  })

  // picking up the most deeply nested product collection
  const deepestNode = productCollections.get(Math.max(...productCollections.keys()))

  // building breadcrumbs array starting from the deepest point (product) and going up to the root node
  const breadcrumbs = (treeNode: unknown, isFirstCall: boolean) => {
    if (isFirstCall && placement === 'product') {
      crumbs = [
        {
          path: getPathFromUrl(treeNode.url),
          title: treeNode.title,
        },
        ...crumbs,
      ]
    }
    if (treeNode?.parentId) {
      const parentNode = flatHierarchyTree.get(treeNode.parentId)

      crumbs = [
        {
          path: getPathFromUrl(parentNode.url),
          title: parentNode.title,
        },
        ...crumbs,
      ]

      if (parentNode.parentId) {
        breadcrumbs(parentNode)
      }
    }
  }
  deepestNode && breadcrumbs(deepestNode, true)
  crumbs = [crumbsPrefix, ...crumbs]
  return crumbs
}
