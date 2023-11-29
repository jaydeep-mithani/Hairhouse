import { Meta, StoryFn } from '@storybook/react'

import { SalonsMenuVideoSection } from './SalonsMenuVideoSection'
import { mock } from './SalonsMenuVideoSection.mock'
import { SalonsMenuVideoSectionProps } from './SalonsMenuVideoSection.types'

export default {
  title: 'Sections/SalonsMenuVideoSection',
} as Meta

export const story: StoryFn<SalonsMenuVideoSectionProps> = (args) => {
  return <SalonsMenuVideoSection {...args} />
}

story.storyName = 'Default'
story.args = mock
