import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountRewards } from './AccountRewards'
import { mock } from './AccountRewards.mock'
import { AccountRewardsProps } from './AccountRewards.types'

export default {
  title: 'Sections/Account Rewards',
} as Meta

export const story: StoryFn<AccountRewardsProps> = (args) => {
  return <AccountRewards {...args} />
}

story.storyName = 'Default'
story.args = mock
