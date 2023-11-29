import { TabPanel, Tabs, Typography } from '@overdose/components'
import { Carousel } from '~/components'
import { TabsId } from '~/routes/($lang)/store/$storeHandle'
import React from 'react'
import { SwiperOptions } from 'swiper'

import styles from './SectionServicesAndPricing.module.css'
import { SectionServicesAndPricingProps } from './SectionServicesAndPricing.types'
import { ServiceBlock } from './ServiceBlock'
import { options, tabs } from './utils'

const TabTitle = ({ title }: { title: string }) => {
  return (
    <Typography
      tag="p"
      variant="displayLarge"
      theme={{
        root: styles.title,
      }}>
      {title}
    </Typography>
  )
}

export const SectionServicesAndPricing = ({
  id,
  metafields,
  activeTab,
  setActiveTab,
  storeName,
}: SectionServicesAndPricingProps) => {
  const availabilityTabs =
    (!!tabs?.length &&
      tabs.filter((tab) => {
        return (
          !!tab?.availability?.length &&
          tab.availability.every((x) => {
            return (metafields as { [key: string]: string })?.[x]
          })
        )
      })) ||
    []

  const onChangeTab = (tab: TabsId) => {
    setActiveTab(tab)
  }

  return (
    <div id={id} className={styles.container}>
      <Tabs
        activeTab={activeTab}
        onChange={onChangeTab}
        theme={{
          root: styles.tabWrapper,
          title: styles.tabTitle,
          title_active: styles.tabTitleActive,
          tabslist_wrap: styles.tabsListWrap,
          tabslist: styles.tabList,
        }}>
        {!!availabilityTabs?.length &&
          availabilityTabs.map((tab) => {
            const showCta =
              !!tab.ctaAvailability.length &&
              tab.ctaAvailability.find((x) => {
                return (metafields as { [key: string]: string })?.[x]
              })
            return (
              <TabPanel
                key={tab.id}
                title={<TabTitle title={`${storeName} ${tab.name}`} />}
                theme={{ panel: styles.tab, panel_active: styles.tabActive }}>
                <Carousel showScrollbar options={options as SwiperOptions} className={styles.carousel}>
                  {tab.content.map((service, index) => {
                    return <ServiceBlock key={index} service={service} metafields={metafields} showCta={!!showCta} />
                  })}
                </Carousel>
              </TabPanel>
            )
          })}
      </Tabs>
    </div>
  )
}
