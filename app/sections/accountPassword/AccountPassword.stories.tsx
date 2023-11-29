import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountPassword } from './AccountPassword'
import { mock } from './AccountPassword.mock'
import { AccountPasswordProps } from './AccountPassword.types'

export default {
  title: 'Sections/Account Password',
} as Meta

export const story: StoryFn<AccountPasswordProps> = (args) => {
  return <AccountPassword {...args} />
}

story.storyName = 'Default'
story.args = mock
