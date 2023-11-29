import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { SubcategoriesCarousel } from './SubcategoriesCarousel'
import { mock } from './SubcategoriesCarousel.mock'
import { SubcategoriesCarouselProps } from './SubcategoriesCarousel.types'

export default {
  title: 'Sections/Subcategories Carousel',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<SubcategoriesCarouselProps> = (args) => {
  return <SubcategoriesCarousel {...args} />
}

story.storyName = 'Default'
story.args = mock
