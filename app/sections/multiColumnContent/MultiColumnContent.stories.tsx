import { Meta, StoryFn } from '@storybook/react'

import { MultiColumnContent } from './MultiColumnContent'
import { mock } from './MultiColumnContent.mock'
import { MultiColumnContentProps } from './MultiColumnContent.types'

export default {
  title: 'Sections/Multi-Column Content',
} as Meta

export const story: StoryFn<MultiColumnContentProps> = (args) => {
  return <MultiColumnContent {...args} />
}

story.storyName = 'Default'
story.args = mock
