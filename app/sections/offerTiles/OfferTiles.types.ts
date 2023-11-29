import { OfferTilesFragment } from './OfferTiles.fragment.generated'

export type ITile = {
  heading?: string | null
  description?: string | null
  buttonText?: string | null
  url: string
  topLeftBoxText?: string | null
  image?: { __typename?: 'Asset'; altText?: string | null; url: string; width?: number | null; height?: number | null }
}
export type OfferTilesProps = OfferTilesFragment
