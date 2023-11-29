import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { HairProfile } from './HairProfile'
import { mock } from './HairProfile.mock'
import { HairProfileProps } from './HairProfile.types'

export default {
  title: 'Sections/ Hair Profile',
} as Meta

export const story: StoryFn<HairProfileProps> = (args) => {
  return <HairProfile {...args} />
}

story.storyName = 'Default'
story.args = mock
