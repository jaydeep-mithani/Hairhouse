import { Meta, StoryFn } from '@storybook/react'
import { BlogCarousel } from '~/sections'
import React from 'react'

import { mock, mock2 } from './BlogCarousel.mock'
import { BlogCarouseldProps } from './BlogCarousel.types'

export default {
  title: 'Sections/Blog Carousel',
} as Meta

export const story: StoryFn<BlogCarouseldProps> = (args) => {
  return <BlogCarousel {...args} />
}

story.storyName = 'Default'
story.args = mock

export const story2: StoryFn<BlogCarouseldProps> = (args) => {
  return <BlogCarousel {...args} />
}

story2.storyName = 'Without Left Image'
story2.args = mock2
