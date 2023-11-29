import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { Link } from '~/components'
import clsx from 'clsx'
import { TopNavigation } from 'graphql/types'
import { useState } from 'react'

import { HeaderProps } from '../Header.types'
import { JoinBlock } from './JoinBlock'
import styles from './MobileMenu.module.css'
import { ArrOfPreviousProps } from './MobileMenu.types'
import { MobileMenuNav } from './MobileMenuNav'
import { SubMenu } from './SubMenu'

const TOP_MENU_AMOUNT = 9

export const MobileMenu = ({
  menu,
  onClose,
  menuFooter,
}: {
  menu: HeaderProps['megaMenu']
  onClose: () => void
  menuFooter: HeaderProps['mobileMenuFooter']
}) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [arrOfPrevious, setArrOfPrevious] = useState<ArrOfPreviousProps[] | []>([])

  const topMenu = menu?.navigationItems?.length && menu?.navigationItems?.slice(0, TOP_MENU_AMOUNT)
  const bottomtMenu =
    menu?.navigationItems?.length && menu?.navigationItems?.slice(-(menu.navigationItems.length - TOP_MENU_AMOUNT))

  return (
    <div className={styles.wrapper}>
      {activeId ? (
        <SubMenu
          menu={menu?.navigationItems as TopNavigation[]}
          id={activeId}
          setActiveId={setActiveId}
          onClose={onClose}
          arrOfPrevious={arrOfPrevious}
          setArrOfPrevious={setArrOfPrevious}
        />
      ) : (
        <div className={styles.wrapper}>
          <MobileMenuNav
            itemsObj={topMenu as TopNavigation[]}
            typeOfLink="topMenuLink"
            onClose={onClose}
            setActiveId={setActiveId}
          />
          <div className={styles.pagesNav}>
            <MobileMenuNav
              itemsObj={bottomtMenu as TopNavigation[]}
              onClose={onClose}
              setActiveId={setActiveId}
              typeOfLink="topMenuLink"
            />
            <JoinBlock onClose={onClose} />
          </div>
          <div className={styles.footer}>
            <nav>
              {!!menuFooter?.length &&
                menuFooter?.map((item) => {
                  const { imageLink, id, adminTitle, promoImage } = item
                  return imageLink ? (
                    <Link
                      to={imageLink}
                      itemProp="url"
                      className={clsx(styles.menuLink, styles.footerMenuLink)}
                      key={id}
                      onClick={() => {
                        return onClose()
                      }}>
                      {promoImage && <Image data={{ url: promoImage.url, width: 20, height: 20 }} />}
                      <Typography tag="span" variant="body">
                        {adminTitle}
                      </Typography>
                    </Link>
                  ) : null
                })}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
