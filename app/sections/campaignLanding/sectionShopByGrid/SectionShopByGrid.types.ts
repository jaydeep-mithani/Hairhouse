export interface SectionShopByGridProps {
  __typename: string
  id?: string
  description: string
  title: string
  shopByGroup: string
  categoryTiles: Array<{
    heading: string
    description: string
    image: {
      altText: string | null
      url: string
    }
  }>
}

export enum NumberTwo {
  Two = 2,
}
