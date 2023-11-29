import { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import CollectionCarousel from './CollectionCarousel'
import { mock } from './CollectionCarousel.mock'
import { CollectionCarouselProps } from './CollectionCarousel.types'

export default {
  title: 'Sections/Collection Carousel',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<CollectionCarouselProps> = (args) => {
  return <CollectionCarousel {...args} />
}

story.storyName = 'Default'
story.args = mock
