import { Meta, StoryFn } from '@storybook/react'

import { SalonMenu } from './SalonMenu'
import { mock } from './SalonMenu.mock'
import { SalonMenuProps } from './SalonMenu.types'

export default {
  title: 'Sections/SalonMenu',
} as Meta

export const story: StoryFn<SalonMenuProps> = (args) => {
  return <SalonMenu {...args} />
}

story.storyName = 'Default'
story.args = mock
