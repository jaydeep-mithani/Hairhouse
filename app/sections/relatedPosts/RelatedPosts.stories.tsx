import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { RelatedPosts } from './RelatedPosts'
import { mock } from './RelatedPosts.mock'
import { RelatedPostsProps } from './RelatedPosts.types'

export default {
  title: 'Sections/Related Posts',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<RelatedPostsProps> = (args) => {
  return <RelatedPosts {...args} />
}

story.storyName = 'Default'
story.args = mock
