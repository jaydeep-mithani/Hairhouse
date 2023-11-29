import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { mock } from './salonFaqAccordion.mock'
import { FaqAccordionElementProps } from './salonFaqAccordion.types'
import { SalonFaqAccordionSecion } from './salonFaqAccordionSection'

export default {
  title: 'Sections/Salon Faq Accordion',
} as Meta

export const story: StoryFn<FaqAccordionElementProps> = (args) => {
  return <SalonFaqAccordionSecion {...args} />
}

story.storyName = 'Default'
story.args = mock
