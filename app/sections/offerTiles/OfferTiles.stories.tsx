import { Meta, StoryFn } from '@storybook/react'

import { OfferTiles } from './OfferTiles'
import { mock } from './OfferTiles.mock'
import { OfferTilesProps } from './OfferTiles.types'

export default {
  title: 'Sections/Offer tiles',
} as Meta

export const story: StoryFn<OfferTilesProps> = (args) => {
  return <OfferTiles {...args} />
}

story.storyName = 'Default'
story.args = mock
