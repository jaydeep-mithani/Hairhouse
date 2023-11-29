import { TabbedProductCarousel } from '~/components/productCarousel/TabbedProductCarousel'
import React from 'react'

import { PdpProductRecommendationsProps } from './PdpProductRecommendations.types'

export const PdpProductRecommendations: React.FC<PdpProductRecommendationsProps> = ({ data }) => {
  return (
    <div className="py-12 gap-6">
      <div className="hidden md:block">
        <TabbedProductCarousel data={data} tabsPosition="top" />
      </div>
      <div className="block md:hidden">
        <TabbedProductCarousel data={data} tabsPosition="left" />
      </div>
    </div>
  )
}
