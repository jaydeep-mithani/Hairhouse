import { Meta, StoryFn } from '@storybook/react'

import { LandingHeroBanner as HeroBanner } from './LandingHeroBanner'
import { mock } from './LandingHeroBanner.mock'
import { LandingHeroBanner } from './LandingHeroBanner.types'

export default {
  title: 'Sections/Landing  Hero Banner',
} as Meta

export const story: StoryFn<LandingHeroBanner> = (args) => {
  return <HeroBanner {...args} />
}

story.storyName = 'Default'
story.args = mock
