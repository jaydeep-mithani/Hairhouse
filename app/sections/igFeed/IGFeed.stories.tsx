import { Meta, StoryFn } from '@storybook/react'

import { IGFeed } from './IGFeed'
import { data } from './IGFeed.mock'
import { IGFeedProps } from './IGFeed.types'

export default {
  title: 'Sections/IG Feed',
} as Meta

export const story: StoryFn<IGFeedProps> = (args) => {
  return <IGFeed {...args} />
}

story.storyName = 'Default'
story.args = data
