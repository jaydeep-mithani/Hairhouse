import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AnnouncementBarSection } from './AnnouncementBarSection'
import { mock } from './AnnouncementBarSection.mock'
import { AnnouncementBarSectionProps } from './AnnouncementBarSection.types'

export default {
  title: 'Sections/Announcement Bar',
} as Meta

export const story: StoryFn<AnnouncementBarSectionProps> = (args) => {
  return <AnnouncementBarSection {...args} />
}

story.storyName = 'Default'
story.args = mock
