import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountWishlist } from './AccountWishlist'
import { mock } from './AccountWishlist.mock'
import { AccountWishlistProps } from './AccountWishlist.types'

export default {
  title: 'Sections/Account Wishlist Item',
} as Meta

export const story: StoryFn<AccountWishlistProps> = (args) => {
  return <AccountWishlist {...args} />
}

story.storyName = 'Default'
story.args = mock
