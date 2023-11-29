import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { CustomerProfile } from './CustomerProfile'
import { mock } from './CustomerProfile.mock'
import { CustomerProfileProps } from './CustomerProfile.types'

export default {
  title: 'Sections/Customer Profile',
} as Meta

export const story: StoryFn<CustomerProfileProps> = (args) => {
  return <CustomerProfile {...args} />
}

story.storyName = 'Default'
story.args = mock
