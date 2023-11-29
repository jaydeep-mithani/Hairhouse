import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountCommunication } from './AccountCommunication'
import { mock } from './AccountCommunication.mock'
import { AccountCommunicationProps } from './AccountCommunication.types'

export default {
  title: 'Sections/Account Communication',
} as Meta

export const story: StoryFn<AccountCommunicationProps> = (args) => {
  return <AccountCommunication {...args} />
}

story.storyName = 'Default'
story.args = mock
