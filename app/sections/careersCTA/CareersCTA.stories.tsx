import { Meta, StoryFn } from '@storybook/react'

import { CareersCTA } from './CareersCTA'
import { mock } from './CareersCTA.mock'
import { CareersCTAProps } from './CareersCTA.types'

export default {
  title: 'Sections/Careers CTA',
} as Meta

export const story: StoryFn<CareersCTAProps> = (args) => {
  return <CareersCTA {...args} />
}

story.storyName = 'Default'
story.args = mock
