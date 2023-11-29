export interface Field {
  value: string
  key: string
}

export interface Product {
  image: { url: string }
  altText: string
  productName: string
  attributes: Array<Field>
}

export interface Tab {
  category: string
  products: Array<Product>
}

export interface Key {
  namespace: string
  key: string
}
