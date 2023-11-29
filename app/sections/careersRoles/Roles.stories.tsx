import { Meta, StoryFn } from '@storybook/react'

import { Roles } from './Roles'
import { mock } from './Roles.mock'
import { RolesProps } from './Roles.types'

export default {
  title: 'Sections/Careers Roles',
} as Meta

export const story: StoryFn<RolesProps> = (args) => {
  return <Roles {...args} />
}

story.storyName = 'Default'
story.args = mock
