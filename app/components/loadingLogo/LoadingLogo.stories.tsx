import { Meta, StoryFn } from '@storybook/react'

import { LoadingLogo } from './LoadingLogo'
import { mock } from './LoadingLogo.mock'
import { LoadingLogoProps } from './LoadingLogo.types'

export default {
  title: 'Components/loadingLogo',
} as Meta

export const story: StoryFn<LoadingLogoProps> = (args) => {
  return <LoadingLogo {...args} />
}

story.storyName = 'Default'
story.args = mock
