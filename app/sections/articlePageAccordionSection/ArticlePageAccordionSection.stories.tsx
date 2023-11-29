import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ArticlePageAccordionSection } from './ArticlePageAccordionSection'
import { mock } from './ArticlePageAccordionSection.mock'
import { ArticlePageAccordionSectionProps } from './ArticlePageAccordionSection.types'

export default {
  title: 'Sections/Article Page Accordion',
} as Meta

export const story: StoryFn<ArticlePageAccordionSectionProps> = (args) => {
  return <ArticlePageAccordionSection {...args} />
}

story.storyName = 'Default'
story.args = mock
