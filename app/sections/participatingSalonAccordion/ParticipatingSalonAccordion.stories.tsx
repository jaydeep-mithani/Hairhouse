import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ParticipatingSalonAccordion } from './ParticipatingSalonAccordion'
import { mock } from './ParticipatingSalonAccordion.mock'
import { ParticipatingSalonAccordionProps } from './ParticipatingSalonAccordion.types'

export default {
  title: 'Sections/Participating Salon Accordion',
} as Meta

export const story: StoryFn<ParticipatingSalonAccordionProps> = (args) => {
  return <ParticipatingSalonAccordion {...args} />
}

story.storyName = 'Default'
story.args = mock
