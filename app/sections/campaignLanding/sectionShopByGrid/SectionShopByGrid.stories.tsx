import { Meta, StoryFn } from '@storybook/react'

import { SectionShopByGrid } from './SectionShopByGrid'
import { SectionShopByGridData } from './SectionShopByGrid.mock'
import { SectionShopByGridProps } from './SectionShopByGrid.types'

export default {
  title: 'Sections/Campaign Landing/Campaign Landing Shop by Group',
  component: SectionShopByGrid,
  args: SectionShopByGridData,
} as Meta

export const DefaultSectionShopByGrid: StoryFn<SectionShopByGridProps> = (args: SectionShopByGridProps) => {
  return <SectionShopByGrid {...SectionShopByGridData} {...args} />
}

DefaultSectionShopByGrid.storyName = 'Default'
