import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { FullWidthImage } from './FullWidthImage'
import { mock } from './FullWidthImage.mock'
import { FullWidthImageProps } from './FullWidthImage.types'

export default {
  title: 'Sections/FullwidthImage',
} as Meta

export const story: StoryFn<FullWidthImageProps> = (args) => {
  return <FullWidthImage {...args} />
}

story.storyName = 'Default'
story.args = mock
