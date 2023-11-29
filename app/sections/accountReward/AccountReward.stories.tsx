import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountReward } from './AccountReward'
import { mock } from './AccountReward.mock'
import { AccountRewardProps } from './AccountReward.types'

export default {
  title: 'Sections/Account Reward',
} as Meta

export const story: StoryFn<AccountRewardProps> = (args) => {
  return <AccountReward {...args} />
}

story.storyName = 'Default'
story.args = mock
