import { Meta, StoryFn } from '@storybook/react'

import { CompetitionBanner } from './SectionCompetitionBanner'
import { mock } from './SectionCompetitionBanner.mock'
import { SectionCompetitionBannerProps } from './SectionCompetitionBanner.types'

export default {
  title: 'Sections/SectionCompetitionBanner',
} as Meta

export const story: StoryFn<SectionCompetitionBannerProps> = (args) => {
  return <CompetitionBanner {...args} />
}

story.storyName = 'Default'
story.args = mock
