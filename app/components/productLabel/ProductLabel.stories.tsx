import { Meta, StoryFn } from '@storybook/react'

import { ProductLable } from './ProductLabel'
import { mock } from './ProductLabel.mock'
import { ProductLableProps } from './ProductLabel.types'

export default {
  title: 'Components/Product Label',
} as Meta

export const story: StoryFn<ProductLableProps> = (args) => {
  return <ProductLable {...args} />
}

story.storyName = 'Default'
story.args = mock
