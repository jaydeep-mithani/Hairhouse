import { useState } from 'react'

import { HeaderFragment } from '../Header.fragment.generated'
import { BrandsMenu } from './BrandsMenu'
import styles from './MegaMenu.module.css'
import { FirstColumnDataProps, SecondColumnDataProps } from './MegaMenu.types'
import { PromoMenu } from './PromoMenu'
import { SubMenuFirstColumn } from './SubMenuFirstColumn'
import { SubMenuSecondColumn } from './SubMenuSecondColumn'
import { SubMenuThirdColumn } from './SubMenuThirdColumn'

export function getFilteredBrands(brands: HeaderFragment['brandsBrandsLogos'], subItem: SecondColumnDataProps) {
  return brands?.filter((brand) => {
    return subItem?.menuColumn2?.menuRow?.some((item) => {
      return (
        brand?.brandName?.split(' ').join('').toLocaleLowerCase() ===
        item?.name?.split(' ').join('').toLocaleLowerCase()
      )
    })
  })
}
export const SubMenu = ({
  subMenu,
  brands,
}: {
  subMenu: FirstColumnDataProps
  brands?: HeaderFragment['brandsBrandsLogos']
}) => {
  const [activeId, setActiveId] = useState(null)
  const [secondActiveId, setSecondActiveId] = useState(null)

  const countCard = () => {
    let maxCards = 3
    const maxCardsLimit = 2
    subMenu?.menurow?.forEach((subItem) => {
      const hasChildren = !!subItem?.menuColumn2
      if (hasChildren) {
        subItem?.menuColumn2?.menuRow?.forEach((subSubItem) => {
          if (subSubItem.menuColumn2?.menuRow?.length) {
            maxCards = 0
          }
        })
        if (maxCards > maxCardsLimit) {
          maxCards = maxCardsLimit
        }
      }
    })
    return maxCards
  }

  const maxPromoCards = countCard()
  const promoMenuBlog = subMenu?.pageBlogArticles?.length ? subMenu?.pageBlogArticles : null
  const promoMenuOffers = subMenu?.offerTiles?.length ? subMenu?.offerTiles : null

  return (
    <div
      className={styles.megaMenuWrapper}
      onMouseLeave={() => {
        return setActiveId(null)
      }}>
      <div className={styles.megaMenuNaw}>
        {subMenu && (
          <SubMenuFirstColumn submenuColumn={subMenu} setActiveId={setActiveId} setSecondActiveId={setSecondActiveId} />
        )}
        {!!subMenu?.menurow?.length &&
          subMenu?.menurow?.map((subItem) => {
            const filteredBrands = brands ? getFilteredBrands(brands, subItem) : []
            return filteredBrands.length ? (
              <BrandsMenu
                key={subItem.id}
                parentItem={subItem}
                activeId={activeId}
                brands={filteredBrands}
                isThirdColumn={false}
                setActiveId={setSecondActiveId}
              />
            ) : (
              <SubMenuSecondColumn
                key={subItem.id}
                subitem={subItem}
                activeId={activeId}
                setActiveId={setSecondActiveId}
              />
            )
          })}
        {!!subMenu?.menurow?.length &&
          subMenu?.menurow?.map((subItem) => {
            const hasChildren = !!subItem.menuColumn2
            if (hasChildren) {
              return (
                !!subItem?.menuColumn2?.menuRow?.length &&
                subItem?.menuColumn2?.menuRow?.map((subSubItem) => {
                  if (subSubItem.menuColumn2) {
                    const filteredBrands = brands ? getFilteredBrands(brands, subSubItem) : []
                    return filteredBrands.length ? (
                      <BrandsMenu
                        key={subSubItem.id}
                        parentItem={subSubItem}
                        activeId={secondActiveId}
                        brands={filteredBrands}
                        isThirdColumn
                        setActiveId={setSecondActiveId}
                      />
                    ) : (
                      <SubMenuThirdColumn
                        key={subSubItem.id}
                        subitem={subSubItem}
                        activeId={secondActiveId}
                        setActiveId={setSecondActiveId}
                      />
                    )
                  }
                  return null
                })
              )
            }
            return null
          })}
      </div>
      {(promoMenuBlog || promoMenuOffers) && (
        <PromoMenu promoMenuBlog={promoMenuBlog} amountOfCards={maxPromoCards} promoMenuOffers={promoMenuOffers} />
      )}
    </div>
  )
}
