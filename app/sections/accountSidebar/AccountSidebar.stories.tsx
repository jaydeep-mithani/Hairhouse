import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountSidebar } from './AccountSidebar'
import { mock } from './AccountSidebar.mock'
import { AccountSidebarProps } from './AccountSidebar.types'

export default {
  title: 'Sections/Account Sidebar',
} as Meta

export const story: StoryFn<AccountSidebarProps> = (args) => {
  return <AccountSidebar {...args} />
}

story.storyName = 'Default'
story.args = mock
