import { Meta, StoryFn } from '@storybook/react'

import { ImageWithCard } from './ImageWithCard'
import { leftCardMock, mock, rightCardMock } from './ImageWithCard.mock'
import { ImageWithCardProps } from './ImageWithCard.types'

export default {
  title: 'Sections/ImageWithCard',
} as Meta
// left card story
export const storyLeft: StoryFn<ImageWithCardProps> = (args) => {
  return <ImageWithCard {...args} />
}
storyLeft.storyName = 'leftCard'
storyLeft.args = leftCardMock

// right card story
export const storyRight: StoryFn<ImageWithCardProps> = (args) => {
  return <ImageWithCard {...args} />
}
storyRight.storyName = 'rightCard'
storyRight.args = rightCardMock

// store landing story
export const story: StoryFn<ImageWithCardProps> = (args) => {
  return <ImageWithCard {...args} />
}
story.storyName = 'store landing'
story.args = mock
