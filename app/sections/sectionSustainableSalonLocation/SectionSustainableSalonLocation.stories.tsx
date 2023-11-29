import { Meta, StoryFn } from '@storybook/react'

import { SectionSustainableSalonLocation } from './SectionSustainableSalonLocation'
import { SectionSustainableSalonLocationData } from './SectionSustainableSalonLocation.mock'
import { SectionSustainableSalonLocationProps } from './SectionSustainableSalonLocation.types'

export default {
  title: 'Sections/SustainableSalonsLocations',
} as Meta

export const story: StoryFn<SectionSustainableSalonLocationProps> = (args) => {
  return <SectionSustainableSalonLocation {...args} />
}

story.storyName = 'Default'
story.args = SectionSustainableSalonLocationData
