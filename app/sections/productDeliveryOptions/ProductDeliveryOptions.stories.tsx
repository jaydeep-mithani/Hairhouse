import { Meta, StoryFn } from '@storybook/react'

import { ProductDeliveryOptions } from './ProductDeliveryOptions'
import { mock, onlineExclusive, preOrder } from './ProductDeliveryOptions.mock'
import { ProductDeliveryOptionsProps } from './ProductDeliveryOptions.types'

export default {
  title: 'Sections/ProductDeliveryOptions',
} as Meta

export const story: StoryFn<ProductDeliveryOptionsProps> = (args) => {
  return <ProductDeliveryOptions {...args} />
}

story.storyName = 'Default'
story.args = mock

// preorder story
export const storyPreOrder: StoryFn<ProductDeliveryOptionsProps> = (args) => {
  return <ProductDeliveryOptions {...args} />
}
storyPreOrder.storyName = 'PreOrder'
storyPreOrder.args = preOrder

// online exclusive
export const storyonlineExclusive: StoryFn<ProductDeliveryOptionsProps> = (args) => {
  return <ProductDeliveryOptions {...args} />
}
storyonlineExclusive.storyName = 'OnlineExclusive'
storyonlineExclusive.args = onlineExclusive
