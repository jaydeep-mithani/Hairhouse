import { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { ProductHighlights } from './ProductHighlights'
import { mock } from './ProductHighlights.mock'
import { ProductHighlightsProps } from './ProductHighlights.types'

export default {
  title: 'Sections/Product Highlights',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<ProductHighlightsProps> = (args) => {
  return <ProductHighlights {...args} />
}

story.storyName = 'Default'
story.args = mock
