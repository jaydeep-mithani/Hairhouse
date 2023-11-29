import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { TextAndImageBlockSection } from './TextAndImageBlockSection'
import { textAndImageBlockSectionData } from './TextAndImageBlockSection.mock'
import { TextAndImageBlockSectionProps } from './TextAndImageBlockSection.types'

export default {
  title: 'Sections/Text And Image Block',
} as Meta

export const story: StoryFn<TextAndImageBlockSectionProps> = (args) => {
  return <TextAndImageBlockSection {...args} />
}

story.storyName = 'Default'
story.args = textAndImageBlockSectionData
