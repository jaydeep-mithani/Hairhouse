import { Typography, Input, Button } from '@overdose/components'
import { IconSearch } from '~/components'
import clsx from 'clsx'
import React, { useCallback, useEffect, useState } from 'react'

import { BrandTags } from '../../../graphql/types'
import { BrandCardProps, BrandLogoGridProps, SortedBrands } from './BrandCard.types'
import styles from './BrandLogoGrid.module.css'
import { BrandLogoToolbar } from './BrandLogoToolbar'
import { BrandsGrid } from './BrandsGrid'
import { BrandsList } from './BrandsList'
import { sortedBrands } from './utils'

export const BrandLogoGrid = ({ brandsBrands, subtext, hdText, cta, asGrid, carousel }: BrandLogoGridProps) => {
  const [brandsList, setBrandList] = useState<BrandCardProps[] | SortedBrands[]>([])

  useEffect(() => {
    const list = asGrid ? sortedBrands(brandsBrands ?? []) : brandsBrands
    setBrandList(list || [])
  }, [asGrid, brandsBrands])

  const handleSearchByBrand = (searchTerm: string) => {
    const filteredBrands = brandsBrands?.filter((brand) => {
      const brandName = brand?.brandName?.toLowerCase() || ''
      return brandName?.includes(searchTerm)
    })

    setBrandList(sortedBrands(filteredBrands ?? []))
  }

  const handleSortByTag = (selectedTag: BrandTags) => {
    const filteredBrands = brandsBrands?.filter((brand) => {
      return brand.brandTags?.includes(selectedTag)
    })

    setBrandList(sortedBrands(filteredBrands ?? []))
  }

  const handleSortByLetters = (selectedTag: Array<string>) => {
    const filteredBrands = sortedBrands(brandsBrands ?? [])?.filter((brand: { firstLetter: string }) => {
      return (
        selectedTag.includes(brand?.firstLetter) ||
        selectedTag.some((x) => {
          return brand?.firstLetter.match(x)
        })
      )
    })

    setBrandList(filteredBrands)
  }

  const renderButton = useCallback(
    (breakpoint: string) => {
      return !asGrid
        ? cta?.buttonText && (
            <Button
              variant="link"
              href={cta?.url}
              theme={{
                root: clsx(styles.button, styles[`button${breakpoint}`]),
              }}>
              {cta?.buttonText}
            </Button>
          )
        : null
    },
    [cta, asGrid],
  )

  return (
    <div className={clsx(styles.root, { [styles.isCarousel]: !asGrid })}>
      <Typography
        tag="p"
        variant="label"
        theme={{
          root: styles.subtitle,
        }}>
        {subtext}
      </Typography>
      <Typography
        tag="p"
        variant="displayLarge"
        theme={{
          root: styles.title,
        }}>
        {hdText}
      </Typography>
      {renderButton('Desktop')}
      {asGrid && (
        <>
          <Input
            name="searchBrand"
            placeholder="Search brands "
            theme={{ root: styles.searchInput }}
            type="search"
            onChange={(val: string) => {
              handleSearchByBrand(val)
            }}
            prefix={<IconSearch />}
          />
          <BrandLogoToolbar handleSortByTag={handleSortByTag} handleSortByLetters={handleSortByLetters} />
        </>
      )}
      {asGrid ? (
        <BrandsList brands={brandsList as SortedBrands[]} />
      ) : (
        <BrandsGrid asCarousel={carousel} brands={brandsList as BrandCardProps[]} />
      )}
      {renderButton('Mobile')}
    </div>
  )
}
