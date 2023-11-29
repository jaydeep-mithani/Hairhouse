import { Meta, StoryFn } from '@storybook/react'

import { ServiceMenu } from './ServiceMenu'
import { serviceMenuMock } from './ServiceMenu.mock'
import { ServiceMenuProps } from './ServicesMenu.types'

export default {
  title: 'Sections/ServiceMenu',
} as Meta

export const story: StoryFn<ServiceMenuProps> = (args) => {
  return <ServiceMenu {...args} />
}

story.storyName = 'Default'
story.args = serviceMenuMock
