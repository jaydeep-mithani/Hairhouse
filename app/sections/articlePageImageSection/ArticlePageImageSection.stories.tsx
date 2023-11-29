import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { ArticlePageImageSection } from './ArticlePageImageSection'
import { mock, mock2 } from './ArticlePageImageSection.mock'
import { ArticlePageImageSectionProps } from './ArticlePageImageSection.types'

export default {
  title: 'Sections/Article Page Image Section',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<ArticlePageImageSectionProps> = (args) => {
  return <ArticlePageImageSection {...args} />
}

story.storyName = 'Default'
story.args = mock

export const story2: StoryFn<ArticlePageImageSectionProps> = (args) => {
  return <ArticlePageImageSection {...args} />
}

story2.storyName = 'Single Full-width Image'
story2.args = mock2
