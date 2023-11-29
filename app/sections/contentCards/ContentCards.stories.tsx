import { Meta, StoryFn } from '@storybook/react'

import { ContentCards } from './ContentCards'
import { mock } from './ContentCards.mock'
import { ContentCardsProps } from './ContentCards.types'

export default {
  title: 'Sections/ContentCards',
} as Meta

export const story: StoryFn<ContentCardsProps> = (args) => {
  return <ContentCards {...args} />
}

story.storyName = 'Default'
story.args = mock
