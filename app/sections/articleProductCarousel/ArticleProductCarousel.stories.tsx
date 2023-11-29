import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ArticleProductCarousel } from './ArticleProductCarousel'
import { mock } from './ArticleProductCarousel.mock'
import { ArticleProductCarouselProps } from './ArticleProductCarousel.types'

export default {
  title: 'Sections/Article Product Carousel',
} as Meta

export const story: StoryFn<ArticleProductCarouselProps> = (args) => {
  return <ArticleProductCarousel {...args} />
}

story.storyName = 'Default'
story.args = mock
