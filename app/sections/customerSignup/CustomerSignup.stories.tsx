import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { CustomerSignup } from './CustomerSignup'
import { mock } from './CustomerSignup.mock'
import { CustomerSignupProps } from './CustomerSignup.types'

export default {
  title: 'Sections/Customer Signup',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<CustomerSignupProps> = (args) => {
  return <CustomerSignup {...args} />
}

story.storyName = 'Default'
story.args = mock
