import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { SectionVideoCarousel } from './SectionVideoCarousel'
import { mock } from './SectionVideoCarousel.mock'
import { SectionVideoCarouselProps } from './SectionVideoCarousel.types'

export default {
  title: 'Sections/Video Block',
} as Meta

export const story: StoryFn<SectionVideoCarouselProps> = (args) => {
  return <SectionVideoCarousel {...args} />
}

story.storyName = 'Default'
story.args = mock
