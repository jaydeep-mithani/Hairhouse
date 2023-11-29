import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { HeroBanner } from './HeroBanner'
import { mock } from './HeroBanner.mock'
import { HeroBannerProps } from './HeroBanner.types'

export default {
  title: 'Sections/Hero Banner',
} as Meta

export const story: StoryFn<HeroBannerProps> = (args) => {
  return <HeroBanner {...args} />
}

story.storyName = 'Default'
story.args = mock
