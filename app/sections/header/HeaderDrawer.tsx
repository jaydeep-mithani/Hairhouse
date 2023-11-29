import { Drawer as CustomDrawer } from '@overdose/components'
import { Await, useLoaderData, useMatches } from '@remix-run/react'
import { Drawer, Cart, CartLoading, IconClose, Logo, CustomerLogin } from '~/components'
import { Suspense } from 'react'

import { MobileMenuDrawerProps, CartDrawerProps, LoginDrawerProps } from './Header.types'
import { MobileMenu } from './mobileMenu/MobileMenu'

export const MobileMenuDrawer = ({ isOpen, onClose, menu, mobileMenuFooter }: MobileMenuDrawerProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading={<Logo width={147} height={24} />} isMenu>
      <MobileMenu menu={menu} menuFooter={mobileMenuFooter} onClose={onClose} />
    </Drawer>
  )
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const [root] = useMatches()

  return (
    // we use CustomDrawer here because of compatibility issues between swiper.js and Drawer component that break carousel navigation
    <CustomDrawer
      visible={isOpen}
      onCancel={onClose}
      closable
      placement="right"
      closeIcon={<IconClose />}
      width={488}
      theme={{
        root: 'max-w-[100vw] [--drawer-close-button-right:13px] [--drawer-close-button-top:14px]  lg:[--drawer-close-button-right:19px] lg:[--drawer-close-button-top:33px]',
        content: 'p-0',
        header: 'border-none [--drawer-header-height:39px] lg:[--drawer-header-height:51px]',
      }}>
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => {
              return <Cart layout="drawer" onClose={onClose} cart={cart} />
            }}
          </Await>
        </Suspense>
      </div>
    </CustomDrawer>
  )
}

export const LoginDrawer = ({ isOpen, onClose, loginData }: LoginDrawerProps) => {
  const { isLoggedIn } = useLoaderData()

  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="right" heading="Login" yScroll>
      <CustomerLogin onClose={onClose} data={{ ...loginData, isLoggedIn }} />
    </Drawer>
  )
}
