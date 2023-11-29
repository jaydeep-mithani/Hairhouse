import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { SectionProductCompare } from './SectionProductCompare'
import { mock } from './SectionProductCompare.mock'
import { SectionProductCompareProps } from './SectionProductCompare.types'

export default {
  title: 'Sections/Product Compare',
} as Meta

export const story: StoryFn<SectionProductCompareProps> = (args) => {
  return <SectionProductCompare {...args} />
}

story.storyName = 'Default'
story.args = mock
