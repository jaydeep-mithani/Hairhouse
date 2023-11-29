import { Meta, StoryFn } from '@storybook/react'

import { EmployeeBenefits } from './EmployeeBenefits'
import { mock } from './EmployeeBenefits.mock'
import { EmployeeBenefitsProps } from './EmployeeBenefits.types'

export default {
  title: 'Sections/Employee Benefits',
} as Meta

export const story: StoryFn<EmployeeBenefitsProps> = (args) => {
  return <EmployeeBenefits {...args} />
}

story.storyName = 'Default'
story.args = mock
