import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { ArticlePageLinksSection } from './ArticlePageLinksSection'
import { mock } from './ArticlePageLinksSection.mock'
import { ArticlePageLinksSectionProps } from './ArticlePageLinksSection.types'

export default {
  title: 'Sections/Article Page Anchor Links Section',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<ArticlePageLinksSectionProps> = (args) => {
  return <ArticlePageLinksSection {...args} />
}

story.storyName = 'Default'
story.args = mock
