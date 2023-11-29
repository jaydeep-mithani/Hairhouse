import { Meta, StoryFn } from '@storybook/react'

import { ProductHowTo } from './ProductHowTo'
import { mock } from './ProductHowTo.mock'
import { ProductHowToProps } from './ProductHowTo.types'

export default {
  title: 'Sections/Product How To',
} as Meta

export const story: StoryFn<ProductHowToProps> = (args) => {
  return <ProductHowTo {...args} />
}

story.storyName = 'Default'
story.args = mock
