import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { StoreLandingBannerSection } from './StoreLandingBannerSection'
import { mock } from './StoreLandingBannerSection.mock'
import { StoreLandingBannerSectionProps } from './StoreLandingBannerSection.types'

export default {
  title: 'Sections/Store Landing Banner Section',
} as Meta

export const story: StoryFn<StoreLandingBannerSectionProps> = (args) => {
  return <StoreLandingBannerSection {...args} />
}

story.storyName = 'Default'
story.args = mock
