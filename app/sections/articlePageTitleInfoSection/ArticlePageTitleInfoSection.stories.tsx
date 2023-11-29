import { Meta, StoryFn } from '@storybook/react'

import { ArticlePageTitleInfoSection } from '~/sections'

import { mock } from './ArticlePageTitleInfoSection.mock'
import { ArticlePageTitleInfoSectionProps } from './ArticlePageTitleInfoSection.types'

export default {
  title: 'Sections/Article Page Title-Info Section',
} as Meta

export const story: StoryFn<ArticlePageTitleInfoSectionProps> = (args) => {
  return <ArticlePageTitleInfoSection {...args} />
}

story.storyName = 'Default'
story.args = mock
