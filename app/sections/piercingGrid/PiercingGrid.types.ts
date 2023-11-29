export type PiercingGridProps = {
  piercingGridTabs?: { name?: string | null; piercingGridItems?: PiercingCardProps[] }[]
}

export type PiercingCardProps = {
  name?: string
  description?: string
  image?: {
    altText?: string
    url?: string
    id?: string
    height?: number
    width?: number
  }
}
