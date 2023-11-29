import { Image } from '@shopify/hydrogen'
import { Link } from '~/components'
import clsx from 'clsx'

import styles from './MegaMenu.module.css'
import { BrandsMenuProps } from './MegaMenu.types'

const IMAGE_WIDTH = 125
const IMAGE_HEIGHT = 55

export const Brands = ({ brands, activeId, parentItem, isSorted }: BrandsMenuProps) => {
  if (!brands) {
    return null
  }
  return (
    <ul
      className={clsx(styles.childCategory, styles.brandsContainer, {
        [styles.active]: activeId === parentItem?.id,
        'gap-x-5 gap-y-3': !isSorted,
      })}>
      {!!brands?.length &&
        brands?.map((item) => {
          const { id, brandLogo, brandName, brandUrl } = item
          return (
            <li key={id} data-parent-category-handle={id}>
              {brandLogo && brandUrl && (
                <Link to={brandUrl} itemProp="url" className={styles.brandsLink}>
                  <Image
                    data={{
                      url: brandLogo.url,
                      width: IMAGE_WIDTH,
                      height: IMAGE_HEIGHT,
                      altText: brandName,
                    }}
                  />
                </Link>
              )}
            </li>
          )
        })}
    </ul>
  )
}
