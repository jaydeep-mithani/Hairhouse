import { Meta, StoryFn } from '@storybook/react'

import { Proposition } from './Proposition'
import { PropositionData } from './Proposition.mock'
import { PropositionProps } from './Proposition.types'

export default {
  title: 'Sections/Proposition',
} as Meta

export const story: StoryFn<PropositionProps> = (args) => {
  return <Proposition {...args} />
}
story.storyName = 'Default'
story.args = PropositionData
