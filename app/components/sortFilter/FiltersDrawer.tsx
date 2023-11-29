import { Button, Typography, Accordion, AccordionItem, Checkbox, Drawer } from '@overdose/components'
import { useLocation, useSearchParams, useNavigate, useNavigation } from '@remix-run/react'
import type { Filter } from '@shopify/hydrogen/storefront-api-types'
import { ChevronUp, ChevronDown, IconClose } from '~/components'
import { GlobalLoaderContext } from '~/provider/globalLoader'
import { useContext, useEffect } from 'react'

import { PriceRangeFilter } from './PriceRangeFilter'
import { getFilterLink, getAppliedFilterLink, clearAllFiltersLink, getAppliedFiltersList } from './SortFilter.helpers'
import styles from './SortFilter.module.css'
import { FiltersDrawerProps } from './SortFilter.types'

export function FiltersDrawer({ filters = [], appliedFilters = [], isOpen, setIsOpen }: FiltersDrawerProps) {
  const [params] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const navigation = useNavigation()
  const { setIsLoaderShown } = useContext(GlobalLoaderContext)

  useEffect(() => {
    setIsLoaderShown(navigation.state !== 'idle')
    return () => setIsLoaderShown(false)
  }, [navigation])

  const filterMarkup = (filter: Filter, option: Filter['values'][0]) => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (filter.type) {
      case 'PRICE_RANGE':
        const min =
          params.has('minPrice') && !isNaN(Number(params.get('minPrice'))) ? Number(params.get('minPrice')) : undefined

        const max =
          params.has('maxPrice') && !isNaN(Number(params.get('maxPrice'))) ? Number(params.get('maxPrice')) : undefined

        return <PriceRangeFilter min={min} max={max} />

      default:
        const applyFilterUrl = getFilterLink(filter, option.input as string, params, location)
        const appliedItem = appliedFilters.find((item) => item.label === option.label)
        const removeFilterUrl = appliedItem && getAppliedFilterLink(appliedItem, params, location)

        return (
          <Checkbox
            onClick={() => {
              navigate(appliedItem ? removeFilterUrl : applyFilterUrl, { replace: true })
            }}
            key={option.label}
            checked={appliedItem}
            theme={{ root: styles.checkbox, content: styles.checkboxContent }}
            label={
              <div className={styles.checkboxLabel}>
                <Typography tag="span" variant="body">
                  {option.label}
                </Typography>
                <Typography tag="span" variant="caption">
                  {`(${option.count})`}
                </Typography>
              </div>
            }
            value={option.label}
            idSuffix={option.label}
            name={option.label}
          />
        )
    }
  }

  const accordion = (
    <Accordion
      expandIcon={<ChevronDown />}
      collapseIcon={<ChevronUp />}
      defaultValue={getAppliedFiltersList(filters, appliedFilters)}
      theme={{ root: styles.accordion }}>
      {filters &&
        filters.map((filter: Filter) => {
          return (
            filter.values.length && (
              <AccordionItem
                header={filter.label}
                name={filter.label}
                theme={{ item: styles.accordionItem, expanded: styles.accordionExpanded }}
                key={filter.id}>
                {filter.values?.map((option) => {
                  return filterMarkup(filter, option)
                })}
              </AccordionItem>
            )
          )
        })}
    </Accordion>
  )

  const drawerFooter = (
    <div className={styles.drawerFooterButtonsWrapper}>
      <Button
        variant="solid"
        status="secondary"
        noHover
        disabled={!appliedFilters.length}
        onClick={() => navigate(clearAllFiltersLink(appliedFilters, params, location), { replace: true })}
        theme={{ root: styles.drawerFooterButton }}>
        Clear all
      </Button>
      <Button
        variant="solid"
        status="primary"
        noHover
        onClick={() => setIsOpen(false)}
        theme={{ root: styles.drawerFooterButton }}>
        Apply
      </Button>
    </div>
  )

  return (
    <div>
      <Drawer
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
        closable
        placement="right"
        closeIcon={<IconClose />}
        width={330}
        title={
          <Typography tag="p" variant="pageheading">
            Refine by
          </Typography>
        }
        theme={{
          root: 'max-w-full [--drawer-close-button-right:13px] [--drawer-close-button-top:14px]',
          content: 'p-0',
          header: 'w-auto [--drawer-header-height:56px] mx-6 p-0',
        }}>
        <div className={styles.mobileDrawerContent}>
          {accordion}
          {drawerFooter}
        </div>
      </Drawer>
      <nav className="hidden lg:flex py-0  flex-col">
        <Typography tag="p" variant="displayMedium">
          Refine by
        </Typography>
        {accordion}
        <Button
          onClick={() => navigate(clearAllFiltersLink(appliedFilters, params, location), { replace: true })}
          variant="link"
          theme={{ root: styles.clearAllButton }}>
          Clear all filters
        </Button>
      </nav>
    </div>
  )
}
