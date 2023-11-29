import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { SectionPreezieProductFinder } from './SectionPreezieProductFinder'
import { mock } from './SectionPreezieProductFinder.mock'
import { SectionPreezieProductFinderProps } from './SectionPreezieProductFinder.types'

export default {
  title: 'Sections/Preezie Product Finder',
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<SectionPreezieProductFinderProps> = (args) => {
  return <SectionPreezieProductFinder {...args} />
}

story.storyName = 'Default'
story.args = mock
