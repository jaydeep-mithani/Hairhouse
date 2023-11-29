import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { TextBlockWithCTASection } from './TextBlockWithCTASection'
import { mock1, mock2, mock3 } from './TextBlockWithCTASection.mock'
import { TextBlockWithCTASectionProps } from './TextBlockWithCTASection.types'

export default {
  title: 'Sections/Text Block With CTA',
} as Meta

export const story: StoryFn<TextBlockWithCTASectionProps> = (args) => {
  return <TextBlockWithCTASection {...args} />
}

export const story2: StoryFn<TextBlockWithCTASectionProps> = (args) => {
  return <TextBlockWithCTASection {...args} />
}

export const story3: StoryFn<TextBlockWithCTASectionProps> = (args) => {
  return <TextBlockWithCTASection {...args} />
}

story.storyName = 'Default'
story.args = mock1

story2.storyName = 'With No Button'
story2.args = mock2

story3.storyName = 'With Two Buttons'
story3.args = mock3
