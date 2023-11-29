import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { TwoColumnText } from './TwoColumnText'
import { mock, oneColumn } from './TwoColumnText.mock'
import { SectionSeoTextProps } from './TwoColumnText.types'

export default {
  title: 'Sections/Two column text',
} as Meta

export const story: StoryFn<SectionSeoTextProps> = (args) => {
  return <TwoColumnText {...args} />
}

story.storyName = 'Default'
story.args = mock

export const oneColumnStory: StoryFn<SectionSeoTextProps> = (args) => {
  return <TwoColumnText {...args} />
}

oneColumnStory.storyName = 'one column'
oneColumnStory.args = oneColumn
