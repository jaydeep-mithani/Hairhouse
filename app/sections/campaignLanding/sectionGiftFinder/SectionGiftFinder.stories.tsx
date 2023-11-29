import { Meta, StoryFn } from '@storybook/react'

import { SectionGiftFinder } from './SectionGiftFinder'
import { SectionGiftFinderData } from './SectionGiftFinder.mock'
import { SectionGiftFinderProps } from './SectionGiftFinder.types'

export default {
  title: 'Sections/Campaign Landing/Campaign Landing Gift Finder',
  component: SectionGiftFinder,
  args: SectionGiftFinderData,
} as Meta

export const DefaultSectionGiftFinder: StoryFn<SectionGiftFinderProps> = (args: SectionGiftFinderProps) => {
  return <SectionGiftFinder {...SectionGiftFinderData} {...args} />
}

DefaultSectionGiftFinder.storyName = 'Default'
