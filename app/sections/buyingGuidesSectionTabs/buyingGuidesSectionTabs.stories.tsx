import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { BuyingGuidesSectionTabs } from './buyingGuidesSectionTabs'
import { mock } from './BuyingGuidesSectionTabs.mock'
import { BuyingGuidesSectionTabsProps } from './buyingGuidesSectionTabs.types'

export default {
  title: 'Sections/Buying Guides Section Tabs',
} as Meta

export const story: StoryFn<BuyingGuidesSectionTabsProps> = (args) => {
  return <BuyingGuidesSectionTabs {...args} />
}

story.storyName = 'Default'
story.args = mock
