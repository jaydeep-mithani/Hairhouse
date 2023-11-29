import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountOrders } from './AccountOrders'
import { mock } from './AccountOrders.mock'
import { AccountOrdersProps } from './AccountOrders.types'

export default {
  title: 'Sections/Account Orders',
} as Meta

export const story: StoryFn<AccountOrdersProps> = (args) => {
  return <AccountOrders {...args} />
}

story.storyName = 'Default'
story.args = mock
