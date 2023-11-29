import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ArticlePageVideoSection } from './ArticlePageVideoSection'
import { mock } from './ArticlePageVideoSection.mock'
import { ArticlePageVideoSectionProps } from './ArticlePageVideoSection.types'

export default {
  title: 'Sections/Article Page Video Section',
} as Meta

export const story: StoryFn<ArticlePageVideoSectionProps> = (args) => {
  return <ArticlePageVideoSection {...args} />
}

story.storyName = 'Default'
story.args = mock
