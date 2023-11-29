import { Button } from '@overdose/components'

import { HeaderFragment } from '../Header.fragment.generated'
import styles from './MegaMenu.module.css'
import { MegaMenuItem } from './MegaMenuItem'

const LEFT_MENU_AMOUNT = 9

export const MegaMenu = ({
  menu,
  brands,
}: {
  menu: HeaderFragment['megaMenu']
  brands: HeaderFragment['brandsBrandsLogos']
}) => {
  if (!menu) {
    return null
  }

  const leftMenu = menu?.navigationItems?.slice(0, LEFT_MENU_AMOUNT)
  const rightMenu = menu?.navigationItems?.slice(-(menu.navigationItems.length - LEFT_MENU_AMOUNT))

  return (
    <div className={styles.menuWrapper}>
      <nav itemScope role="navigation" className={styles.menuSection}>
        {!!leftMenu?.length &&
          leftMenu?.map((item) => {
            return <MegaMenuItem key={item.id} menuItem={item} brands={brands} />
          })}
        <div className={styles.cover} />
      </nav>
      <div className={styles.menuRight}>
        <nav itemScope role="navigation" className={styles.menuSection}>
          {!!rightMenu?.length &&
            rightMenu?.map((item) => {
              return <MegaMenuItem key={item.id} menuItem={item} brands={brands} />
            })}
          <div className={styles.cover} />
        </nav>
        <Button to="/" variant="solid" status="secondary" theme={{ root: styles.menuBtn }}>
          Book Appointment
        </Button>
      </div>
    </div>
  )
}
