import { Accordion, AccordionItem, Typography } from '@overdose/components'
import clsx from 'clsx'
import React, { useState } from 'react'

import { PiercingCard } from './PiercingCard'
import styles from './PiercingGrid.module.css'
import { PiercingGridProps } from './PiercingGrid.types'

export const PiercingGrid: React.FC<PiercingGridProps> = ({ piercingGridTabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  const tabsData = piercingGridTabs?.map(({ name }, index) => ({ id: index + 1, text: name?.toUpperCase() }))
  return (
    <>
      <div className="hidden md:flex md:flex-col md:gap-10 md:justify-center md:px-20 xl:px-[105px]">
        <div className="flex flex-row justify-center gap-10 max-w-[542px] m-auto">
          {tabsData &&
            tabsData?.length > 0 &&
            tabsData.map((tab, index) => {
              return tab.text ? (
                <button
                  type="button"
                  key={tab.id}
                  className={`${
                    activeTab === index
                      ? 'text-black border-b border-solid border-black'
                      : 'text-[#000000] font-[350] hover:text-black'
                  } pb-1 ${styles.tab_text}`}
                  onClick={() => setActiveTab(index)}>
                  <Typography tag="p" variant="bodyLarge" theme={{ root: clsx('leading-[140%] w-max') }}>
                    0{tab.id} {tab.text}
                  </Typography>
                </button>
              ) : null
            })}
        </div>
        {piercingGridTabs?.map(({ piercingGridItems, name }, index) =>
          activeTab === index ? (
            <div className="flex flex-col pb-10 gap-8" key={index}>
              {name && (
                <Typography
                  tag="h3"
                  variant="heading"
                  theme={{ root: clsx('text-[25px] font-medium leading-[33px] max-w-[1440px] mx-auto w-full') }}>
                  {name}
                </Typography>
              )}
              <div className="grid md:grid-cols-3 lg:grid-cols-4 items-start gap-10 max-w-[1440px] mx-auto w-full">
                {piercingGridItems && piercingGridItems?.length > 0
                  ? piercingGridItems.map((card, index) => <PiercingCard key={index} {...card} />)
                  : null}
              </div>
            </div>
          ) : null,
        )}
      </div>
      {/* mobile view */}
      <div className="block md:hidden">
        {piercingGridTabs && piercingGridTabs?.length > 0 ? (
          <Accordion>
            {piercingGridTabs.map(({ piercingGridItems, name }, index) => {
              return (
                <AccordionItem
                  key={index}
                  variant="default"
                  header={name && `0${index + 1}  ${name}`}
                  name={name && `${name}${index}`}
                  className="border-t border-[#E2E2E2] last:border-b [&>button]:py-4 [&>button]:px-5 [&>button>span]:text-xl"
                  theme={{ title: styles.tab_text }}>
                  <div className="flex flex-col items-center gap-10">
                    {piercingGridItems && piercingGridItems?.length > 0
                      ? piercingGridItems.map((card, index) => <PiercingCard key={index} {...card} />)
                      : null}
                  </div>
                </AccordionItem>
              )
            })}
          </Accordion>
        ) : null}
      </div>
    </>
  )
}
