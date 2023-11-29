import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ArticleSourcesSection } from './ArticleSourcesSection'
import { mock } from './ArticleSourcesSection.mock'
import { ArticleSourcesSectionProps } from './ArticleSourcesSection.types'

export default {
  title: 'Sections/Article Sources Section',
} as Meta

export const story: StoryFn<ArticleSourcesSectionProps> = (args) => {
  return <ArticleSourcesSection {...args} />
}

story.storyName = 'Default'
story.args = mock
