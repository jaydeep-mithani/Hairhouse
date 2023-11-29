import { Meta, StoryFn } from '@storybook/react'

import { ArticleGridItem } from './ArticleGridItem'
import { mock } from './ArticleGridItem.mock'
import { ArticleGridItemProps } from './ArticleGridItem.types'

export default {
  title: 'Components/ArticleGridItem',
} as Meta

export const story: StoryFn<ArticleGridItemProps> = (args) => {
  return <ArticleGridItem {...args} />
}

story.storyName = 'Default'
story.args = mock
