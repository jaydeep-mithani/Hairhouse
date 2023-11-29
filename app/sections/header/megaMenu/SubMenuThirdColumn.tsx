import { Typography } from '@overdose/components'
import { Link } from '~/components'
import clsx from 'clsx'

import styles from './MegaMenu.module.css'
import { ThirdColumnProps } from './MegaMenu.types'

export const SubMenuThirdColumn = ({ subitem, activeId, setActiveId }: ThirdColumnProps) => {
  if (!subitem.menuColumn2) {
    return null
  }
  const { name, menuRow, bottomLinkText, shopAllUrl } = subitem.menuColumn2
  return (
    <div
      className={clsx(styles.columnThird, styles.category, { [styles.active]: activeId === subitem.id })}
      onMouseLeave={() => {
        return setActiveId(null)
      }}>
      <div className={styles.columnTop}>
        {name && (
          <div className={styles.subMenuTitle}>
            <Typography tag="p" variant="displaySmall">
              {name}
            </Typography>
          </div>
        )}
        <ul
          className={clsx(styles.childCategory, styles.lastChildCategory, {
            [styles.active]: activeId === subitem.id,
          })}>
          {!!menuRow?.length &&
            menuRow?.map((child) => {
              const { headingText, url, id } = child
              return (
                <li key={id} className={styles.listLink}>
                  {url && (
                    <Link to={url} itemProp="url" className={styles.columnLink}>
                      <Typography tag="span" variant="body">
                        {headingText}
                      </Typography>
                    </Link>
                  )}
                </li>
              )
            })}
        </ul>
      </div>
      {bottomLinkText && shopAllUrl && (
        <Link to={shopAllUrl} className={styles.parentLink}>
          <Typography tag="span" variant="body" weight="mediun">
            {bottomLinkText}
          </Typography>
        </Link>
      )}
    </div>
  )
}
