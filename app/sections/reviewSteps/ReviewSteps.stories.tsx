import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ReviewSteps } from './ReviewSteps'
import { reviewSteps } from './ReviewSteps.mock'
import { ReviewStepsProps } from './ReviewSteps.types'

export default {
  title: 'Sections/ Review steps',
} as Meta

export const story: StoryFn<ReviewStepsProps> = (args) => {
  return <ReviewSteps {...args} />
}

story.storyName = 'Default'
story.args = reviewSteps
