import { useCartFetchers } from '~/hooks/useCartFetchers'
import { DrawersContext } from '~/provider/drawersContext'
import React, { useEffect, useContext } from 'react'

import { AnnouncementBarSection } from '../announcementBarSection'
import styles from './Header.module.css'
import { HeaderProps } from './Header.types'
import { MobileMenuDrawer, CartDrawer, LoginDrawer } from './HeaderDrawer'
import { HeaderNavigation } from './HeaderNavigation'
import { MegaMenu } from './megaMenu/MegaMenu'
import { NavigationLinks } from './navigationLinks/NavigationLinks'

export const HeaderSection: React.FC<HeaderProps> = ({
  logo,
  brandsBrandsLogos,
  megaMenu,
  promoBarBackgroundColour,
  promoBarContent,
  promoBarExpiry,
  mobileMenuFooter,
  storeLocatorLinks,
  sectionAccountSignupCta,
}) => {
  const { isMenuOpen, openMenu, closeMenu, isCartOpen, openCart, closeCart, isLoginOpen, openLogin, closeLogin } =
    useContext(DrawersContext)

  const addToCartFetchers = useCartFetchers('ADD_TO_CART')

  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) {
      return
    }
    openCart()
  }, [addToCartFetchers, isCartOpen, openCart])

  return (
    <header role="banner" className={`bg-white text-primary sticky flex flex-col z-40 top-0 w-full ${styles.header}`}>
      {(promoBarExpiry || promoBarContent) && (
        <AnnouncementBarSection
          color={promoBarBackgroundColour}
          countDownDate={promoBarExpiry}
          description={promoBarContent}
        />
      )}
      {storeLocatorLinks && <NavigationLinks storeLocatorLinks={storeLocatorLinks.storeLocatorLinks} />}
      <HeaderNavigation logo={logo} openCart={openCart} openMenu={openMenu} openLogin={openLogin} />
      <div className="hidden lg:flex flex-col transition duration-300 px-12">
        <MegaMenu menu={megaMenu} brands={brandsBrandsLogos} />
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <LoginDrawer isOpen={isLoginOpen} onClose={closeLogin} loginData={sectionAccountSignupCta} />
      <MobileMenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={megaMenu} mobileMenuFooter={mobileMenuFooter} />
    </header>
  )
}
