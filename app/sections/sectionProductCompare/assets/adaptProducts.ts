import { Product, Tab, Field } from '../declarations'

export const adaptProducts = (products = [], collections = [], tableRows = []) => {
  const tabs: Array<Tab> = []

  collections.forEach((collection: { displayTitle: string }) => {
    const category = collection.displayTitle
    const tab: Tab = { category, products: [] }

    const product = products.find((product: { title: string }) => product.title === collection.displayTitle)

    const tempProducts: Array<Product> = []
    if (product) {
      product?.products?.nodes?.forEach((product: { collections }) => {
        const root = product?.collections.nodes[0]
        const image = root?.products?.nodes[0]?.variants?.nodes[0].image
        const productName = root?.products?.nodes[0]?.variants?.nodes[0].product.title
        const handle = root?.products?.nodes[0]?.variants?.nodes[0].product.handle ?? ''
        const attributes = root?.products?.nodes[0]?.metafields
          .filter((field: Field) => field !== null)
          .map((field: Field) => ({
            value: field?.value,
            label: tableRows?.find((row) => row?.metafieldReference?.includes(field?.key))?.metafieldLabel,
          }))

        tempProducts.push({ image: { url: image?.url }, altText: image?.altText, productName, attributes, handle })
      })
    }

    tab.products = tempProducts

    tabs.push(tab)
  })
  return tabs
}
