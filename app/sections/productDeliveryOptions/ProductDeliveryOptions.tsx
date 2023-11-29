import { Typography } from '@overdose/components'
import { Location } from '~/assets'
import { Button } from '~/components'
import { Tab } from '~/components/Tab'
import React, { useState } from 'react'

import { DeliveryTab } from './components/DeliveryTab'
import { DeliveryOptions, ProductDeliveryOptionsProps } from './ProductDeliveryOptions.types'

export const ProductDeliveryOptions: React.FC<ProductDeliveryOptionsProps> = ({ itemType, location, delivery }) => {
  const [activeTab, setActiveTab] = useState('Delivery')

  const tabsData = [
    {
      id: 1,
      text: 'Delivery',
    },
    {
      id: 2,
      text: 'Click & Collect',
    },
    {
      id: 3,
      text: 'In-Store',
    },
  ]
  const disabled = itemType === 'onlineExclusive' || itemType === 'preOrder'
  return (
    <div className="bg-white p-4">
      <div className="flex flex-row items-start gap-3 max-w-[493px] m-auto">
        {tabsData.length > 0 &&
          tabsData.map((tab) => {
            return (
              <Tab
                key={tab.id}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tab={tab}
                initialTab="Delivery"
                disabled={disabled}
              />
            )
          })}
      </div>
      <div className="flex flex-col justify-center items-center px-4 pb-4 gap-4 max-w-[493px] m-auto border border-solid border-[#E2E2E2]">
        <div className="flex flex-row justify-between items-center py-2.5 gap-3 w-full border-b border-solid border-[#E2E2E2]">
          <div className="flex flex-row justify-center items-center gap-1.5">
            <Location />
            {location && (
              <Typography tag="p" variant="body">
                {location}
              </Typography>
            )}
          </div>
          <Button variant="inline" className="text-xs text-[#4A4F53]">
            Change location
          </Button>
        </div>
        {activeTab === DeliveryOptions.Delivery &&
          (delivery && delivery?.length > 0
            ? delivery?.map((type, index: number) => {
                return <DeliveryTab title={type.title} subtext={type.subtext} charges={type.charges} key={index} />
              })
            : null)}
      </div>
    </div>
  )
}
