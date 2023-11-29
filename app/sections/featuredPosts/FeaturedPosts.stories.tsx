import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { FeaturedPosts } from './FeaturedPosts'
import { mock } from './FeaturedPosts.mock'
import { FeaturedPostsProps } from './FeaturedPosts.types'

export default {
  title: 'Sections/Featured Posts',
} as Meta

export const story: StoryFn<FeaturedPostsProps> = (args) => {
  return <FeaturedPosts {...args} />
}

story.storyName = 'Default'
story.args = mock
