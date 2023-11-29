import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ImageTextOverlaySection } from './ImageTextOverlaySection'
import { mock } from './ImageTextOverlaySection.mock'
import { ImageTextOverlaySectionProps } from './ImageTextOverlaySection.types'

export default {
  title: 'Sections/Image Text Overlay Section',
} as Meta

export const story: StoryFn<ImageTextOverlaySectionProps> = (args) => {
  return <ImageTextOverlaySection {...args} />
}

story.storyName = 'Default'
story.args = mock
