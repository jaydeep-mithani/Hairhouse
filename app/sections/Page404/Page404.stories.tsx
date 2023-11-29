import { Meta, StoryFn } from '@storybook/react'

import { Page404 } from './Page404'
import { mock } from './Page404.mock'
import { Page404Props } from './Page404.types'

export default {
  title: 'Sections/404 Page',
} as Meta

export const story: StoryFn<Page404Props> = (args) => {
  return <Page404 {...args} />
}

story.storyName = 'Default'
story.args = mock
