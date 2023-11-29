import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { UspIconsSection } from './UspIconsSection'
import { mock } from './UspIconsSection.mock'
import { UspIconsSectionProps } from './UspIconsSection.types'

export default {
  title: 'Sections/USP Icons',
} as Meta

export const story: StoryFn<UspIconsSectionProps> = (args) => {
  return <UspIconsSection {...args} />
}

story.storyName = 'Default'
story.args = mock
