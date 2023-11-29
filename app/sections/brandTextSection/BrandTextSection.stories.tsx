import { Meta, StoryFn } from '@storybook/react'

import { BrandTextSection } from './BrandTextSection'
import { mock } from './BrandTextSection.mock'
import { BrandTextSectionProps } from './BrandTextSection.types'

export default {
  title: 'Sections/Brand Text Section',
} as Meta

export const story: StoryFn<BrandTextSectionProps> = (args) => {
  return <BrandTextSection {...args} />
}

story.storyName = 'Default'
story.args = mock
