import { Button } from '@overdose/components'
import { useLoaderData, useLocation } from '@remix-run/react'
import { Carousel } from '~/components'
import { MegaMenu, MenuRow } from 'graphql/types'
import { useEffect, useState } from 'react'

import styles from './SubcategoriesCarousel.module.css'

export const SubcategoriesCarousel = () => {
  const { header } = useLoaderData()
  const { pathname } = useLocation()
  const [nestedMenu, setNestedMenu] = useState<null | MegaMenu['navigationItems']>(null)

  useEffect(() => {
    if (header?.megaMenu?.navigationItems) {
      setNestedMenu(header?.megaMenu?.navigationItems)
    }
  }, [header])
  const flatMenu = new Map()

  const generateFlatMenu = (nodes: MegaMenu['navigationItems'] | MenuRow[]) => {
    if (!nodes?.length) {
      return null
    }
    return nodes.forEach((node) => {
      if ('menuColumn1' in node && node?.menuColumn1?.length && node?.menuColumn1[0]?.menurow) {
        !flatMenu.has(`/${node.url}`) && flatMenu.set(`/${node.url}`, node)
        generateFlatMenu(node?.menuColumn1[0]?.menurow)
      }

      if ('menuColumn2' in node && node?.menuColumn2 && node?.menuColumn2?.menuRow) {
        !flatMenu.has(`/${node.url}`) && flatMenu.set(`/${node.url}`, node)
        generateFlatMenu(node?.menuColumn2?.menuRow)
      }

      if ('menuColumn1' in node && node?.menuColumn1?.length && node?.menuColumn1[0]?.menurow) {
        generateFlatMenu(node?.menuColumn1[0]?.menurow)
      }

      if ('menuColumn2' in node && node?.menuColumn2 && node?.menuColumn2?.menuRow) {
        generateFlatMenu(node?.menuColumn2?.menuRow)
      }
    })
  }

  nestedMenu && generateFlatMenu(nestedMenu)

  const subcollections: MenuRow[] =
    flatMenu.get(pathname)?.menuColumn1?.[0]?.menurow || flatMenu.get(pathname)?.menuColumn2?.menuRow

  const handleUrl = (url: string | undefined) => {
    if (url?.startsWith('collections/')) {
      return url.substring('collections/'.length)
    }
    return url
  }

  return (
    <div>
      {!!subcollections?.length && (
        <div className={styles.root}>
          <Carousel
            className={styles.customScrollbar}
            showScrollbar
            options={{
              keyboard: { enabled: true },
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
                  href={handleUrl(subcollection.url as string | undefined)}
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
      )}
    </div>
  )
}
