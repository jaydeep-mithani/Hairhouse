import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { BuyingGuideFeatureProductBlockSection } from './buyingGuideFeatureProduct'
import { mock } from './buyingGuideFeatureProduct.mock'

export default {
  title: 'Sections/Buying Guide Feature Product',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<any> = (args) => {
  return <BuyingGuideFeatureProductBlockSection {...args} />
}

story.storyName = 'Default'
story.args = mock
