import { Meta, StoryFn } from '@storybook/react'

import { SalonServices } from './SalonServices'
import { mock } from './SalonServices.mock'
import { SalonServicesProps } from './SalonServices.types'

export default {
  title: 'Sections/Salon Services',
} as Meta

export const story: StoryFn<SalonServicesProps> = (args) => {
  return <SalonServices {...args} />
}

story.storyName = 'Default'
story.args = mock
