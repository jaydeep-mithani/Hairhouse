import { Meta, StoryFn } from '@storybook/react'

import { SectionCollectionDropDown } from './SectionCollectionDropDown'
import { mockData } from './SectionCollectionDropDown.mock'
import { SectionCollectionDropDownProps } from './SectionCollectionDropDown.types'

export default {
  title: 'Sections/SectionCollectionDropDown',
} as Meta

export const story: StoryFn<SectionCollectionDropDownProps> = (args) => {
  return <SectionCollectionDropDown {...args} />
}
story.storyName = 'Default'
story.args = mockData
