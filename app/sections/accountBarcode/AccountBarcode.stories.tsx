import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { AccountBarcode } from './AccountBarcode'
import { mock } from './AccountBarcode.mock'
import { AccountBarcodeProps } from './AccountBarcode.types'

export default {
  title: 'Sections/Account Barcode',
} as Meta

export const story: StoryFn<AccountBarcodeProps> = (args) => {
  return <AccountBarcode {...args} />
}

story.storyName = 'Default'
story.args = mock
