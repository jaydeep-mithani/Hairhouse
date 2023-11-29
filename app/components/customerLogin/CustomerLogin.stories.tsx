import { Meta, StoryFn } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { CustomerLogin } from './CustomerLogin'
import { mock } from './CustomerLogin.mock'
import { CustomerLoginProps } from './CustomerLogin.types'

export default {
  title: 'Components/CustomerLogin',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<CustomerLoginProps> = (args) => {
  return <CustomerLogin {...args} />
}

story.storyName = 'Default'
story.args = mock
