import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { SustainableSalonAccordion } from './SustainableSalonAccordion'
import { mock } from './SustainableSalonAccordion.mock'
import { SustainableSalonAccordionProps } from './SustainableSalonAccordion.types'

export default {
  title: 'Sections/Sustainable Salon Accordion',
} as Meta

export const story: StoryFn<SustainableSalonAccordionProps> = (args) => {
  return <SustainableSalonAccordion {...args} />
}

story.storyName = 'Default'
story.args = mock
