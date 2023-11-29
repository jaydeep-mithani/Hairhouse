import { MegaMenu, TopNavigation, MenuRow } from 'graphql/types'

export type ArrOfPreviousProps = TopNavigation | MenuRow
export interface SubMenuProps {
  menu: MegaMenu['navigationItems']
  id: string
  setActiveId: (value: null | string) => void
  onClose: () => void
  arrOfPrevious: [] | ArrOfPreviousProps[]
  setArrOfPrevious: React.Dispatch<React.SetStateAction<[] | ArrOfPreviousProps[]>>
}

export interface MobileMenuNavProps {
  itemsObj?: MegaMenu['navigationItems'] | TopNavigation | MenuRow
  typeOfLink?: string
  onClose: () => void
  setActiveId: (value: null | string) => void
  setArrOfPrevious?: React.Dispatch<React.SetStateAction<[] | ArrOfPreviousProps[]>>
  isBottomMenu?: boolean
}
