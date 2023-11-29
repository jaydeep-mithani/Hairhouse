import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountLoyaltyBlock } from './AccountLoyaltyBlock'
import { mock } from './AccountLoyaltyBlock.mock'
import { AccountLoyaltyBlockProps } from './AccountLoyaltyBlock.types'

export default {
  title: 'Sections/Account Loyalty Block',
} as Meta

export const story: StoryFn<AccountLoyaltyBlockProps> = (args) => {
  return <AccountLoyaltyBlock {...args} />
}

story.storyName = 'Default'
story.args = mock
