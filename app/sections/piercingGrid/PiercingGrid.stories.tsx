import { Meta, StoryFn } from '@storybook/react'

import { PiercingGrid } from './PiercingGrid'
import { mock } from './PiercingGrid.mock'
import { PiercingGridProps } from './PiercingGrid.types'

export default {
  title: 'Sections/PiercingGrid',
} as Meta

export const story: StoryFn<PiercingGridProps> = (args) => {
  return <PiercingGrid {...args} />
}

story.storyName = 'Default'
story.args = mock
