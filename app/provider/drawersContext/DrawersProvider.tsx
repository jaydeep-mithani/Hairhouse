import { useDrawer } from '~/components'
import React from 'react'

import { DrawersContext } from './DrawersContext'

export const DrawersProvider = ({ children }) => {
  const { isOpen: isMenuOpen, openDrawer: openMenu, closeDrawer: closeMenu } = useDrawer()
  const { isOpen: isCartOpen, openDrawer: openCart, closeDrawer: closeCart } = useDrawer()
  const { isOpen: isLoginOpen, openDrawer: openLogin, closeDrawer: closeLogin } = useDrawer()
  return (
    <DrawersContext.Provider
      value={{ isMenuOpen, openMenu, closeMenu, isCartOpen, openCart, closeCart, isLoginOpen, openLogin, closeLogin }}>
      {children}
    </DrawersContext.Provider>
  )
}
