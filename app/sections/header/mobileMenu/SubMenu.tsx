import { Typography, Button } from '@overdose/components'
import { IconChevronLeft } from '~/components'
import { MenuRow, TopNavigation } from 'graphql/types'

import styles from './MobileMenu.module.css'
import { SubMenuProps } from './MobileMenu.types'
import { MobileMenuNav } from './MobileMenuNav'

export const SubMenu = ({ menu, id, setActiveId, onClose, arrOfPrevious, setArrOfPrevious }: SubMenuProps) => {
  let currentMenu: MenuRow | TopNavigation | undefined
  const findObj = (menu: Array<MenuRow> | Array<TopNavigation>, id: string) => {
    menu?.some((item: MenuRow | TopNavigation) => {
      if (item.id !== id) {
        'menuColumn1' in item && item?.menuColumn1?.length && findObj(item.menuColumn1[0].menurow, id)
        'menuColumn2' in item && item?.menuColumn2?.menuRow && findObj(item.menuColumn2.menuRow, id)
      } else {
        currentMenu = item
      }
    })
  }

  const currentObjTop =
    menu?.find((item) => {
      return id === item.id
    }) || findObj(menu, id)

  const previousObj = arrOfPrevious[arrOfPrevious.length - 1]

  const goBack = () => {
    setActiveId(previousObj?.id)
    setArrOfPrevious(
      arrOfPrevious.filter((obj) => {
        return JSON.stringify(obj) !== JSON.stringify(previousObj)
      }),
    )
  }

  return (
    <div className={styles.subMenu}>
      <div className={styles.subMenuTop}>
        <Button
          variant="link"
          status="secondary"
          theme={{ root: styles.goBackLink }}
          onClick={() => {
            return goBack()
          }}>
          <IconChevronLeft className={styles.goBackLinkIcon} />
          <Typography tag="span" variant="body">
            Back to {previousObj?.headingText ? previousObj.headingText : 'all'}
          </Typography>
        </Button>
        <div className={styles.subMenuTopTitle}>
          <Typography tag="p" variant="displaySmall">
            {currentObjTop?.headingText || currentMenu?.headingText}
          </Typography>
        </div>
      </div>
      <MobileMenuNav
        itemsObj={currentObjTop || currentMenu}
        onClose={onClose}
        setActiveId={setActiveId}
        setArrOfPrevious={setArrOfPrevious}
      />
    </div>
  )
}
