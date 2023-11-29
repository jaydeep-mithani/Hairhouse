import { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { ProductUpsellCarousel } from './ProductUpsellCarousel'
import { mock } from './ProductUpsellCarousel.mock'
import { ProductUpsellCarouselProps } from './ProductUpsellCarousel.types'

export default {
  title: 'Sections/ProductUpsell',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<ProductUpsellCarouselProps> = (args) => {
  return <ProductUpsellCarousel {...args} />
}

story.storyName = 'Default'
story.args = mock
