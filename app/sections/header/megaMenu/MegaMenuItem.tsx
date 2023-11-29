import { Button } from '@overdose/components'
import { addPrefixSlashToUrl } from '~/lib/utils'
import clsx from 'clsx'

import { HeaderFragment } from '../Header.fragment.generated'
import styles from './MegaMenu.module.css'
import { MegaMenuItemProps } from './MegaMenu.types'
import { SubMenu } from './SubMenu'

const BRANDS = 'Brands'

export const MegaMenuItem = ({
  menuItem,
  brands,
}: {
  menuItem: MegaMenuItemProps
  brands?: HeaderFragment['brandsBrandsLogos']
}) => {
  if (!menuItem) {
    return null
  }

  const { url, headingText } = menuItem

  const isSubmenu = !!menuItem.menuColumn1[0]

  const menuBrands = headingText === BRANDS ? brands : []

  return (
    <div
      className={clsx(styles.menuItem, {
        [styles.menuItemWithSubmenu]: isSubmenu,
      })}>
      {headingText && (
        <div className={styles.topMenuItem}>
          <Button
            variant="link"
            href={addPrefixSlashToUrl(url)}
            theme={{
              root: clsx(styles.topMenuItemLink, { [styles.topMenuItemLink_red]: headingText === 'Clearance' }),
            }}>
            {headingText}
          </Button>
        </div>
      )}
      {isSubmenu && (
        <div className={styles.subMenuItem}>
          <SubMenu subMenu={menuItem.menuColumn1[0]} brands={menuBrands} />
        </div>
      )}
    </div>
  )
}
