import { Meta, StoryFn } from '@storybook/react'

import { StyleSocietyBlock } from './StyleSocietyBlock'
import { data } from './StyleSocietyBlock.mock'
import { StyleSocietyBlockProps } from './StyleSocietyBlock.types'

export default {
  title: 'Sections/Style Society Block',
} as Meta

export const story: StoryFn<StyleSocietyBlockProps> = (args) => {
  return <StyleSocietyBlock {...args} />
}

story.storyName = 'Default'
story.args = data
