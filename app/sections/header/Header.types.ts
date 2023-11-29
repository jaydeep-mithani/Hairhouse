import { Page } from 'types/Page.types'

import { HeaderFragment } from './Header.fragment.generated'

export type PromobarProps = {
  promoBarContent?: {
    html?: string
    text?: string
  }
  promoBarExpiry?: string
  promoBarBackgroundColour?: {
    css?: string
    hex?: string
  }
}
export type HeaderProps = HeaderFragment & { page: Page } & PromobarProps

export type HeaderNavigationProps = {
  logo: HeaderProps['logo']
  openCart: () => void
  openMenu: () => void
  openLogin: () => void
}

export type MobileMenuDrawerProps = {
  isOpen: boolean
  onClose: () => void
  menu: HeaderProps['megaMenu']
  mobileMenuFooter: HeaderProps['mobileMenuFooter']
}

export type CartDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export type LoginDrawerProps = {
  isOpen: boolean
  onClose: () => void
  loginData: HeaderProps['sectionAccountSignupCta']
}
