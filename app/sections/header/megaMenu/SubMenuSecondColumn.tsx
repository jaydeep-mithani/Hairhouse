import { Typography } from '@overdose/components'
import { Link, IconChevronRight } from '~/components'
import clsx from 'clsx'

import styles from './MegaMenu.module.css'
import { SecondColumnProps } from './MegaMenu.types'

export const SubMenuSecondColumn = ({ subitem, activeId, setActiveId }: SecondColumnProps) => {
  const { name, menuRow, bottomLinkText, shopAllUrl } = subitem?.menuColumn2 ?? {}
  return (
    <div
      className={clsx(styles.columnSecond, styles.category, {
        [styles.active]: activeId === subitem.id,
        [styles.hideBorder]: !subitem.menuColumn2,
      })}>
      {subitem?.menuColumn2 && (
        <>
          <div className={styles.columnTop}>
            {name && (
              <div className={clsx(styles.subMenuTitle, styles.subMenuTitleSecond)}>
                <Typography tag="p" variant="displaySmall">
                  {name}
                </Typography>
              </div>
            )}
            <ul className={clsx(styles.childCategory, { [styles.active]: activeId === subitem.id })}>
              {!!menuRow?.length &&
                menuRow?.map((child) => {
                  const { headingText, url, id, menuColumn2 } = child
                  const hasChildren = !!menuColumn2
                  return (
                    <li
                      key={id}
                      data-parent-category-handle={id}
                      className={clsx(styles.listLink, styles.listLinkSecond)}
                      onMouseEnter={() => {
                        return setActiveId(id)
                      }}>
                      {url && (
                        <Link to={url} itemProp="url" className={styles.columnLink}>
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
            <Link to={shopAllUrl} className={clsx(styles.parentLink, styles.parentLinkSecond)}>
              <Typography tag="span" variant="body" weight="mediun">
                {bottomLinkText}
              </Typography>
            </Link>
          )}
        </>
      )}
    </div>
  )
}
