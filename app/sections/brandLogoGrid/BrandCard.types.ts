import { BrandTags } from '../../../graphql/types'
import { BrandLogoGridFragment, BrandsBrandLogoFragment } from './BrandLogoGrid.fragment.generated'

export interface BrandLogoGridProps {
  subtext?: BrandLogoGridFragment['subtext']
  hdText?: BrandLogoGridFragment['hdText']
  brandsBrands?: BrandCardProps[]
  cta?: BrandLogoGridFragment['cta']
  asGrid?: boolean
  carousel?: boolean
}

export interface BrandCardProps {
  brandTags?: BrandsBrandLogoFragment['brandTags']
  brandName?: BrandsBrandLogoFragment['brandName']
  brandLogo?: BrandsBrandLogoFragment['brandLogo']
  brandUrl?: BrandsBrandLogoFragment['brandUrl']
}

export type SortedBrands = {
  data?: BrandCardProps[]
  firstLetter: string
}

export interface BrandLogoToolbarProps {
  handleSortByTag: (value: BrandTags) => void
  handleSortByLetters: (value: Array<string>) => void
}

export type BrandsGridPops = {
  brands: BrandCardProps[]
  asCarousel?: boolean
}
