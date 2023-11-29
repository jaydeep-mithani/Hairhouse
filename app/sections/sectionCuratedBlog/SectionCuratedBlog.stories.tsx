import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { SectionCuratedBlog } from './SectionCuratedBlog'
import { mock } from './SectionCuratedBlog.mock'
import { SectionCuratedBlogProps } from './SectionCuratedBlog.types'

export default {
  title: 'Sections/SectionCuratedBlog',
} as Meta

export const story: StoryFn<SectionCuratedBlogProps> = (args) => {
  return <SectionCuratedBlog {...args} />
}

story.storyName = 'Default'
story.args = mock
