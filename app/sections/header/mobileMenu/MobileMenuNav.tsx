import { Typography } from '@overdose/components'
import { Link, IconChevronRight } from '~/components'
import { MegaMenu, TopNavigation, MenuRow } from 'graphql/types'

import styles from './MobileMenu.module.css'
import { MobileMenuNavProps, ArrOfPreviousProps } from './MobileMenu.types'

export const MobileMenuNav = ({ itemsObj, typeOfLink, onClose, setActiveId, setArrOfPrevious }: MobileMenuNavProps) => {
  if (!itemsObj) {
    return null
  }

  const onClickHandle = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    parentObj?: MegaMenu['navigationItems'] | TopNavigation | MenuRow,
  ) => {
    setActiveId?.(id)
    setArrOfPrevious?.((prev: [] | ArrOfPreviousProps[] | undefined) => {
      return [...prev, parentObj]
    })
    e?.preventDefault()
  }

  let menuItemsToRender: TopNavigation[] | MenuRow[] | null

  if (typeOfLink === 'topMenuLink') {
    menuItemsToRender = itemsObj as TopNavigation[]
  } else if ('menuColumn1' in itemsObj && itemsObj.menuColumn1 && itemsObj.menuColumn1[0]?.menurow) {
    menuItemsToRender = itemsObj.menuColumn1[0]?.menurow
  } else if ('menuColumn2' in itemsObj && itemsObj.menuColumn2?.menuRow) {
    menuItemsToRender = itemsObj.menuColumn2.menuRow
  } else {
    menuItemsToRender = null
  }

  return (
    <nav>
      {!!menuItemsToRender?.length &&
        menuItemsToRender?.map((item) => {
          const hasChildren =
            typeOfLink === 'topMenuLink'
              ? 'menuColumn1' in item && !!item.menuColumn1?.length
              : 'menuColumn2' in item && !!item.menuColumn2
          const { url, id, headingText } = item
          return (
            url && (
              <Link
                to={url}
                itemProp="url"
                className={styles.menuLink}
                key={id}
                onClick={(e) => {
                  return hasChildren ? onClickHandle(e, id, itemsObj) : onClose()
                }}>
                {headingText && (
                  <Typography
                    tag="span"
                    variant="body"
                    theme={{
                      root: styles.topMenuLink,
                    }}>
                    {headingText}
                  </Typography>
                )}
                {hasChildren && <IconChevronRight />}
              </Link>
            )
          )
        })}
    </nav>
  )
}
