import { Meta, StoryFn } from '@storybook/react'
import { SectionBlogGrid } from '~/sections'
import React from 'react'

import { mock } from './SectionBlogGrid.mock'
import { SectionBlogGridProps } from './SectionBlogGrid.types'

export default {
  title: 'Sections/Section Blog Grid',
} as Meta

export const story: StoryFn<SectionBlogGridProps> = (args) => {
  return <SectionBlogGrid {...args} />
}

story.storyName = 'Default'
story.args = mock
