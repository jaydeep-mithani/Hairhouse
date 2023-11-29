import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { PopularSearches } from './PopularSearches'
import { mock } from './PopularSearches.mock'
import { PopularSearchesProps } from './PopularSearches.types'

export default {
  title: 'Sections/Popular Searches',
} as Meta

export const story: StoryFn<PopularSearchesProps> = (args) => {
  return <PopularSearches {...args} />
}

story.storyName = 'Default'
story.args = mock
