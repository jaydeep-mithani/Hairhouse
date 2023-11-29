import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountWishlists } from './AccountWishlists'
import { mock } from './AccountWishlists.mock'
import { AccountWishlistsProps } from './AccountWishlists.types'

export default {
  title: 'Sections/Account Wishlist',
} as Meta

export const story: StoryFn<AccountWishlistsProps> = (args) => {
  return <AccountWishlists {...args} />
}

story.storyName = 'Default'
story.args = mock
