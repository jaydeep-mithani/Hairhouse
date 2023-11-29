import { Meta, StoryFn } from '@storybook/react'

import { SectionFullWidthImage } from './SectionFullWidthImage'
import { mock } from './SectionFullWidthImage.mock'
import { SectionFullWidthImageProps } from './SectionFullWidthImage.types'

export default {
  title: 'Sections/SectionFullWidthImage',
} as Meta

export const story: StoryFn<SectionFullWidthImageProps> = (args) => {
  return <SectionFullWidthImage {...args} />
}

story.storyName = 'Default'
story.args = mock
