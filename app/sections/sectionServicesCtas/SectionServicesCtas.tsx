import { Typography } from '@overdose/components'
import { Button } from '~/components'
import { PageSectionId, TabsId } from '~/routes/($lang)/store/$storeHandle'
import React from 'react'

import styles from './SectionServicesCtas.module.css'
import { SectionServicesCtasTypes } from './SectionServicesCtas.types'

const buttons = [
  {
    name: 'Salon booking',
    scrollTo: PageSectionId.Services,
    tabName: TabsId.Salon,
    availableCondition: 'available_for_salon',
  },
  {
    name: 'Piercing booking',
    scrollTo: PageSectionId.Services,
    tabName: TabsId.Piercing,
    availableCondition: 'available_for_piercing',
  },
  {
    name: 'Services & pricing',
    scrollTo: PageSectionId.Services,
    tabName: TabsId.Salon,
    availableCondition: null,
  },
  {
    name: 'Contact us',
    scrollTo: PageSectionId.Information,
    tabName: null,
    availableCondition: null,
  },
]

export const SectionServicesCtas = ({ metafields, handleScrollTo }: SectionServicesCtasTypes) => {
  return (
    <div className={styles.container}>
      {!!buttons?.length &&
        buttons.map((btn, index) => {
          return !btn?.availableCondition || metafields[btn?.availableCondition] ? (
            <Button
              key={index}
              width="100%"
              variant="secondary"
              to={`#${btn.scrollTo}`}
              className={styles.serviceButton}
              onClick={() => {
                handleScrollTo(btn.scrollTo, btn.tabName)
              }}>
              <Typography tag="span" variant="body">
                {btn.name}
              </Typography>
            </Button>
          ) : null
        })}
    </div>
  )
}
