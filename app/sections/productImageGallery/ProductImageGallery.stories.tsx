import { Meta, StoryFn } from '@storybook/react'

import { ProductImageGallery } from './ProductImageGallery'
import { mock } from './ProductImageGallery.mock'
import { ProductImageGalleryProps } from './ProductImageGallery.types'

export default {
  title: 'Sections/ProductImageGallery',
} as Meta

export const story: StoryFn<ProductImageGalleryProps> = (args) => {
  return <ProductImageGallery {...args} />
}

story.storyName = 'Default'
story.args = mock
