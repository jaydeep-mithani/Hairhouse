import { Meta, StoryFn } from '@storybook/react'
import { BlogPageTemplate } from '~/sections'
import { withRouter } from 'storybook-addon-react-router-v6'

import { mock } from './BlogPageTemplate.mock'
import { BlogPageTemplateProps } from './BlogPageTemplate.types'

export default {
  title: 'Sections/Blog Page Template',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<BlogPageTemplateProps> = (args) => {
  return <BlogPageTemplate {...args} />
}

story.storyName = 'Default'
story.args = mock
