import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountMembership } from './AccountMembership'
import { mock } from './AccountMembership.mock'
import { AccountMembershipProps } from './AccountMembership.types'

export default {
  title: 'Sections/Account Membership',
} as Meta

export const story: StoryFn<AccountMembershipProps> = (args) => {
  return <AccountMembership {...args} />
}

story.storyName = 'Default'
story.args = mock
