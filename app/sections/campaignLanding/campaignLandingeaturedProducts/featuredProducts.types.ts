export interface CampaignLandingFeaturedProductsProps {
  __typename: string
  id: string
  title: string
  subtitle: string
  rating: number
  totalRating: number
  products: {
    id: string
    handle: string
    collection: Array<{
      id: string
      title: string
      publishedAt: string
      handle: string
      vendor: string
      variants: {
        nodes: Array<{
          id: string
          image: {
            url: string
            altText: string
            width: number
            height: number
          }
          price: {
            amount: string
            currencyCode: string
          }
          compareAtPrice: {
            amount: string
            currencyCode: string
          }
          selectedOptions: {
            name: string
            value: string
          }
          product: {
            handle: string
            title: string
          }
        }>
      }
      description: string
    }>
  }
}
