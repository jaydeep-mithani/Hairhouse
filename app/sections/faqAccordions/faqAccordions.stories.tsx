import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { mock } from './faqAccordions.mock'
import { AccordionElementProps } from './faqAccordions.types'
import { FaqAccordions } from './FaqAccordionsSection'

export default {
  title: 'Sections/Faq Accordion',
} as Meta

export const story: StoryFn<AccordionElementProps> = (args) => {
  return <FaqAccordions {...args} />
}

story.storyName = 'Default'
story.args = mock
