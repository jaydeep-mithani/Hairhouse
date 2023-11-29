import { ArticlePage, MenuTile } from 'graphql/types'
import { Dispatch, SetStateAction } from 'react'

import { HeaderFragment } from '../Header.fragment.generated'

export type MegaMenuItemProps = {
  __typename?: 'TopNavigation'
  id: string
  headingText?: string | null
  name?: string | null
  url?: string | null
  menuColumn1: FirstColumnDataProps[]
}

export type FirstColumnDataProps = {
  __typename?: 'MenuColumn1'
  id: string
  name?: string | null
  bottomLinkText?: string | null
  shopAllUrl?: string | null
  menurow: SecondColumnDataProps[]
  pageBlogArticles: Array<ArticlePage>
  offerTiles: Array<MenuTile>
}

export type FirstColumnProps = {
  submenuColumn: FirstColumnDataProps
  setActiveId: Dispatch<SetStateAction<null>>
  setSecondActiveId: Dispatch<SetStateAction<null>>
}

export type SecondColumnDataProps = {
  __typename?: 'MenuRow'
  id: string
  headingText?: string | null
  name?: string | null
  url?: string | null
  menuColumn2?: {
    __typename?: 'MenuColumn2'
    id: string
    name?: string | null
    bottomLinkText?: string | null
    shopAllUrl?: string | null
    menuRow: ThirdColumnDataProps[]
  } | null
}

export type SecondColumnProps = {
  subitem: SecondColumnDataProps
  setActiveId: Dispatch<SetStateAction<null>>
  activeId?: string | null
}

export type ThirdColumnDataProps = {
  __typename?: 'MenuRow'
  id: string
  headingText?: string | null
  name?: string | null
  url?: string | null
  menuColumn2?: {
    __typename?: 'MenuColumn2'
    id: string
    name?: string | null
    bottomLinkText?: string | null
    shopAllUrl?: string | null
    menuRow: Array<{
      __typename?: 'MenuRow'
      id: string
      headingText?: string | null
      name?: string | null
      url?: string | null
    }>
  } | null
}

export type ThirdColumnProps = {
  subitem: ThirdColumnDataProps
  setActiveId: Dispatch<SetStateAction<null>>
  activeId?: string | null
}

export type BrandsMenuProps = {
  parentItem?: SecondColumnDataProps
  brands: HeaderFragment['brandsBrandsLogos']
  activeId?: string | null
  setActiveId?: Dispatch<SetStateAction<null>>
  isThirdColumn?: boolean
  titlesAlphabet?: string[]
  isSorted?: boolean
}

export type BrandProps = {
  __typename: 'BrandsBrandLogo' | undefined
  id: string
  brandName: string | null | undefined
  brandUrl: string | null | undefined
  brandLogo:
    | {
        __typename: 'Asset' | undefined
        id: string
        url: string
      }
    | null
    | undefined
}

export type PromoMenuProps = {
  amountOfCards: number
  promoMenuBlog: Array<ArticlePage> | null
  promoMenuOffers: Array<MenuTile> | null
}
