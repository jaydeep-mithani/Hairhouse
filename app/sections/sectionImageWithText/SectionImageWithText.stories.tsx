import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { SectionImageWithText } from './SectionImageWithText'
import { mock } from './SectionImageWithText.mock'
import { SectionImageWithTextProps } from './SectionImageWithText.types'

export default {
  title: 'Sections/SectionImageWithText',
} as Meta

export const story: StoryFn<SectionImageWithTextProps> = (args) => {
  return <SectionImageWithText {...args} />
}

story.storyName = 'Default'
story.args = mock
