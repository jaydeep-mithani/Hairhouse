import { Typography } from '@overdose/components'
import clsx from 'clsx'
import React, { useState } from 'react'

import { SalonMenuProps } from './SalonMenu.types'

export const SalonMenu: React.FC<SalonMenuProps> = ({ menus }) => {
  const [activeTab, setActiveTab] = useState(0)
  const tabsData = [
    {
      id: 1,
      text: 'BEVERAGE MENU',
    },
    { id: 2, text: 'TREATMENT MENU' },
    {
      id: 3,
      text: 'SALON SERVICES',
    },
  ]
  return (
    <div className="flex flex-col justify-center items-start px-4 gap-[60px]  md:px-14 md:gap-[13.75rem] md:flex-row">
      <div className="flex flex-col justify-center items-start gap-5 md:gap-10 max-w-[175px]">
        {tabsData.map((tab, index: number) => {
          return (
            <div className="flex flex-row justify-center items-center gap-x-2" key={tab.id}>
              {tab.id === index + 1 && (
                <button
                  type="button"
                  className={`${
                    activeTab === index ? 'text-[#000000] font-normal' : 'text-[#4A4F53] font-[350]'
                  } pb-1`}>
                  0{tab.id}
                </button>
              )}
              {tab.text && (
                <button
                  type="button"
                  className={`${
                    activeTab === index
                      ? 'text-[#000000] border-b border-solid border-black font-normal text-base leading-[19.2px]'
                      : 'text-[#4A4F53] font-[350] text-base leading-[22.4px]'
                  } pb-1 `}
                  onClick={() => {
                    return setActiveTab(index)
                  }}>
                  <Typography tag="p" variant="bodyLarge">
                    {tab.text}
                  </Typography>
                </button>
              )}
            </div>
          )
        })}
      </div>
      {menus.length > 0 &&
        menus.map((menu, index: number) => {
          return (
            activeTab === index && (
              <div className="flex flex-col items-start gap-10 w-full md:max-w-[605px]" key={menu.name}>
                {menu.name && (
                  <Typography tag="h3" variant="displayLarge" theme={{ root: clsx('md:leading-9 text-[#000000]') }}>
                    {menu.name}
                  </Typography>
                )}
                {/* child */}
                <div className="flex flex-col gap-10 w-full md:flex-row">
                  {menu?.menuSublist && menu?.menuSublist?.length > 0 && (
                    <div className="flex flex-col gap-10 flex-wrap w-full md:w-[283px] md:grid md:grid-cols-2">
                      {menu.menuSublist?.map((subType, index) => {
                        return (
                          <div className="flex flex-col items-start self-start gap-4 w-full" key={index}>
                            {subType.sublistItems?.map((item, index: number) => {
                              return (
                                <div key={index} className="w-[283px]">
                                  {item.title && (
                                    <Typography
                                      tag="h4"
                                      variant="heading"
                                      theme={{ root: clsx('md:text-xl md:leading-6 pb-4') }}>
                                      {item.title}
                                    </Typography>
                                  )}
                                  {item?.items && item?.items?.length > 0 && (
                                    <ul>
                                      {item.items?.map((item, index) => {
                                        return (
                                          <li key={index}>
                                            <Typography
                                              tag="p"
                                              variant="bodyLarge"
                                              theme={{ root: clsx('font-[350] leading-[22.4px] text-[#4A4F53]') }}>
                                              {item}
                                            </Typography>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            )
          )
        })}
    </div>
  )
}
