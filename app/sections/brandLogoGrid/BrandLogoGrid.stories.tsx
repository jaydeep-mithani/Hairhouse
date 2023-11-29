import { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { BrandLogoGrid } from './BrandLogoGrid'
import { mockData } from './BrandLogoGrid.mock'

export default {
  title: 'Sections/BrandLogoGrid',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn = (args) => {
  return <BrandLogoGrid {...args} />
}

story.storyName = 'Default'
story.args = mockData
