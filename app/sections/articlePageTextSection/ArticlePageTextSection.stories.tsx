import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ArticlePageTextSection } from './ArticlePageTextSection'
import { mock, mock2 } from './ArticlePageTextSection.mock'
import { ArticlePageTextSectionProps } from './ArticlePageTextSection.types'

export default {
  title: 'Sections/Article Page Text Section',
} as Meta

export const story: StoryFn<ArticlePageTextSectionProps> = (args) => {
  return <ArticlePageTextSection {...args} />
}

story.storyName = 'Default'
story.args = mock

export const story2: StoryFn<ArticlePageTextSectionProps> = (args) => {
  return <ArticlePageTextSection {...args} />
}

story2.storyName = 'With Background'
story2.args = mock2
