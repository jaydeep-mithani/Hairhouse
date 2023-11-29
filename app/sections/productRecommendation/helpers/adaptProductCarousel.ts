/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-use-before-define */
enum ProductCarouselTypes {
  ProductCarouselUnbxd = 'ProductCarouselUnbxd',
  ProductCarouselCollection = 'ProductCarouselCollection',
  ProductCarouselCurated = 'ProductCarouselCurated',
}

export const adaptProductCarousel = (tabs) => {
  if (!tabs?.length) {
    return null
  }
  return tabs.map((tab) => {
    switch (tab.__typename) {
      case ProductCarouselTypes.ProductCarouselUnbxd:
        return adaptProductProductCarouselUnbxd(tab)
      case ProductCarouselTypes.ProductCarouselCollection:
        return adaptProductCarouselCollection(tab)
      case ProductCarouselTypes.ProductCarouselCurated:
        return adaptProductCarouselCurated(tab)
      default:
        return {}
    }
  })
}

const adaptProductProductCarouselUnbxd = (tab) => {
  const { tabName: title, id } = tab

  return {
    title,
    getCollectionByHandle: { id, collection: [] },
  }
}
const adaptProductCarouselCollection = (tab) => {
  const { tabName: title, id, products } = tab
  const collection = []

  products?.nodes?.forEach((node) => {
    const { title, vendor } = node
    const { nodes } = node.collections
    const { id } = nodes[0] ?? {}
    const { variants } = nodes[0]?.products?.nodes[0] ?? {}

    collection.push({
      id,
      title,
      vendor,
      variants,
    })
  })

  return {
    title,
    getCollectionByHandle: {
      id,
      collection,
    },
  }
}

const adaptProductCarouselCurated = (tab) => {
  const { tabName: title, id } = tab
  const collection = []

  tab?.products?.forEach(({ id, title, publishedAt, vendor, variants }) => {
    if (title && publishedAt && vendor && variants)
      collection.push({
        id,
        title,
        publishedAt,
        vendor,
        variants,
      })
  })

  return {
    title,
    getCollectionByHandle: {
      id,
      collection,
    },
  }
}
