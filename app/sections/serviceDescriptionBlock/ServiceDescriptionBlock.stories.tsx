import { Meta, StoryFn } from '@storybook/react'

import { ServiceDescriptionBlock } from './ServiceDescriptionBlock'
import { mock, rightImage } from './ServiceDescriptionBlock.mock'
import { ServiceDescriptionBlockProps } from './ServiceDescriptionBlock.types'

export default {
  title: 'Sections/ServiceDescriptionBlock',
} as Meta

export const story: StoryFn<ServiceDescriptionBlockProps> = (args) => {
  return <ServiceDescriptionBlock {...args} />
}

story.storyName = 'Default'
story.args = mock

// right image story
export const storyRight: StoryFn<ServiceDescriptionBlockProps> = (args) => {
  return <ServiceDescriptionBlock {...args} />
}
storyRight.storyName = 'rightimage'
storyRight.args = rightImage
