import { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { PdpProductRecommendations } from './PdpProductRecommendations'
import { mock } from './PdpProductRecommendations.mock'
import { PdpProductRecommendationsProps } from './PdpProductRecommendations.types'

export default {
  title: 'Sections/PdpProductRecommendations',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<PdpProductRecommendationsProps> = (args) => {
  return <PdpProductRecommendations {...args} />
}

story.storyName = 'Default'
story.args = mock
