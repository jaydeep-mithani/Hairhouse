import { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { FeatureProductCarouselTabbed } from './FeatureProductCarouselTabbed'
import { mock } from './FeatureProductCarouselTabbed.mock'
import { FeatureProductCarouselTabbedProps } from './FeatureProductCarouselTabbed.types'

export default {
  title: 'Sections/FeatureProductCarouselTabbed',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<FeatureProductCarouselTabbedProps> = (args) => {
  return <FeatureProductCarouselTabbed {...args} />
}

story.storyName = 'Default'
story.args = mock as unknown
