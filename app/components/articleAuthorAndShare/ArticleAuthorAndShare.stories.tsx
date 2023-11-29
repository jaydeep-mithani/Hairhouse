import { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { ArticleAuthorAndShare } from './ArticleAuthorAndShare'
import { mock } from './ArticleAuthorAndShare.mock'
import { ArticleAuthorAndShareProps } from './ArticleAuthorAndShare.types'

export default {
  title: 'Components/ArticleAuthorAndShare',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<ArticleAuthorAndShareProps> = (args) => {
  return <ArticleAuthorAndShare {...args} />
}

story.storyName = 'Default'
story.args = mock
