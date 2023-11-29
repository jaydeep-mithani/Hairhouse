import { Button } from '@overdose/components'
import { useLocation } from '@remix-run/react'
import { Carousel } from '~/components'
import { MenuRow, MegaMenu } from 'graphql/types'

import styles from './styles/SubcategoriesCarousel.module.css'

export const SubcategoriesCarousel = ({ menu }: { menu: MegaMenu }) => {
  const { pathname } = useLocation()
  const nestedMenu = menu.navigationItems
  const flatMenu = new Map()

  const generateFlatMenu = (nodes: MegaMenu['navigationItems'] | MenuRow[]) => {
    if (!nodes.length) {
      return
    }
    nodes.forEach((node) => {
      if ('menuColumn1' in node && node?.menuColumn1.length && node?.menuColumn1[0].menurow) {
        !flatMenu.has(`/collections/${node.url}`) && flatMenu.set(`/collections/${node.url}`, node)
        generateFlatMenu(node?.menuColumn1[0].menurow)
      }

      if ('menuColumn2' in node && node?.menuColumn2 && node?.menuColumn2.menuRow) {
        !flatMenu.has(`/collections/${node.url}`) && flatMenu.set(`/collections/${node.url}`, node)
        generateFlatMenu(node?.menuColumn2.menuRow)
      }

      if ('menuColumn1' in node && node?.menuColumn1.length && node?.menuColumn1[0].menurow) {
        generateFlatMenu(node?.menuColumn1[0].menurow)
      }

      if ('menuColumn2' in node && node?.menuColumn2 && node?.menuColumn2.menuRow) {
        generateFlatMenu(node?.menuColumn2.menuRow)
      }
    })
  }

  generateFlatMenu(nestedMenu)

  const subcollections: MenuRow[] =
    flatMenu.get(pathname)?.menuColumn1?.[0]?.menurow || flatMenu.get(pathname)?.menuColumn2?.menuRow

  if (!subcollections?.length) {
    return null
  }

  return (
    <div className={styles.root}>
      <Carousel
        className={styles.customScrollbar}
        options={{
          mousewheel: true,
          keyboard: true,
          breakpoints: {
            320: {
              slidesPerView: 'auto',
              spaceBetween: 12,
              slidesOffsetBefore: 16,
              slidesOffsetAfter: 16,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 16,
              slidesOffsetBefore: 48,
              slidesOffsetAfter: 48,
            },
          },
        }}>
        {subcollections.map((subcollection) => {
          return (
            <Button
              variant="solid"
              status="secondary"
              href={subcollection.url}
              theme={{
                root: styles.button,
              }}
              key={subcollection.id}>
              {subcollection.headingText}
            </Button>
          )
        })}
      </Carousel>
    </div>
  )
}
