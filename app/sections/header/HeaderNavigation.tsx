import { Image, Button, Link } from '@overdose/components'
import { useLoaderData } from '@remix-run/react'
import { IconHeart, IconMenu, IconAccount, SearchBox } from '~/components'
import { CartCount } from '~/sections/header/CartCount'
import clsx from 'clsx'

import styles from './Header.module.css'
import { HeaderNavigationProps } from './Header.types'

export const HeaderNavigation = ({ logo, openCart, openMenu, openLogin }: HeaderNavigationProps) => {
  const { isLoggedIn } = useLoaderData()

  return (
    <div
      className={clsx(
        'px-4 pt-2 pb-3 gap-y-1 grid lg:px-12 lg:py-[15px] justify-between items-center lg:gap-[60px]',
        styles.navWrapper,
      )}>
      <div className={clsx('flex lg:hidden gap-3', styles.leftBlock)}>
        <button type="button" onClick={openMenu} className="relative flex items-center justify-center">
          <IconMenu />
        </button>
        {isLoggedIn ? (
          <a href="/account" className="relative flex items-center justify-center">
            <IconAccount />
          </a>
        ) : (
          <button type="button" onClick={openLogin} className="relative flex items-center justify-center">
            <IconAccount />
          </button>
        )}
      </div>
      {logo?.url && (
        <Link to="/">
          <Image
            alt={logo?.altText || ''}
            className={clsx('w-[147px] h-[24px] sm:w-[214px] sm:h-[35px]', styles.logo)}
            src={logo.url}
            height={35}
            width={214}
          />
        </Link>
      )}
      <div className={clsx('w-full', styles.search)}>
        <SearchBox />
      </div>
      <div className={clsx('flex justify-between items-center gap-[6px] lg:gap-4', styles.rightBlock)}>
        {isLoggedIn ? (
          <Link to="/account" className="relative flex items-center justify-center">
            My Account
          </Link>
        ) : (
          <div className={styles.buttonBlock}>
            <Button variant="link" onClick={openLogin} theme={{ root: 'hidden lg:block' }}>
              Login
            </Button>
            |
            <Button variant="link" onClick={openLogin} theme={{ root: 'hidden lg:block' }}>
              Sign Up
            </Button>
          </div>
        )}
        <Link to="/account/wishlists">
          <IconHeart />
        </Link>
        <CartCount isHome openCart={openCart} />
      </div>
    </div>
  )
}
