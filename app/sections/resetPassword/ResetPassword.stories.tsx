import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ResetPassword } from './ResetPassword'
import { mock } from './ResetPassword.mock'
import { ResetPasswordProps } from './ResetPassword.types'

export default {
  title: 'Sections/Reset Password',
} as Meta

export const story: StoryFn<ResetPasswordProps> = (args) => {
  return <ResetPassword {...args} />
}

story.storyName = 'Default'
story.args = mock
