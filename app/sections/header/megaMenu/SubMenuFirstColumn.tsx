import { Typography } from '@overdose/components'
import { Link, IconChevronRight } from '~/components'
import { addPrefixSlashToUrl } from '~/lib/utils'
import clsx from 'clsx'

import styles from './MegaMenu.module.css'
import { FirstColumnProps } from './MegaMenu.types'

export const SubMenuFirstColumn = ({ submenuColumn, setActiveId, setSecondActiveId }: FirstColumnProps) => {
  const { name, menurow, bottomLinkText, shopAllUrl } = submenuColumn
  return (
    <div
      className={clsx(styles.columnFirst, styles.category)}
      onMouseEnter={() => {
        return setSecondActiveId(null)
      }}>
      <div className={styles.columnTop}>
        {name && (
          <div className={styles.subMenuTitle}>
            <Typography tag="p" variant="displaySmall">
              {name}
            </Typography>
          </div>
        )}
        <ul>
          {!!menurow?.length &&
            menurow?.map((child) => {
              const { headingText, url, id, menuColumn2 } = child
              const hasChildren = !!menuColumn2
              return (
                <li
                  key={id}
                  onMouseEnter={() => {
                    return setActiveId(id)
                  }}
                  data-parent-category-handle={id}
                  className={styles.listLink}>
                  {url && (
                    <Link to={addPrefixSlashToUrl(url)} itemProp="url" className={styles.columnLink}>
                      <Typography tag="span" variant="body">
                        {headingText}
                      </Typography>
                      {hasChildren && <IconChevronRight width={20} height={20} />}
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
