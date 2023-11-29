import { Meta, StoryFn } from '@storybook/react'

import { SalonPartners } from './SalonPartners'
import { mock } from './SalonPartners.mock'
import { SalonPartnersProps } from './SalonPartners.types'

export default {
  title: 'Sections/Salon Partners',
} as Meta

export const story: StoryFn<SalonPartnersProps> = (args) => {
  return <SalonPartners {...args} />
}

story.storyName = 'Default'
story.args = mock
