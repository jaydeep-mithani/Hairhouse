import { Page } from 'types/Page.types'

import { ProductHowToFragment } from './ProductHowTo.fragment.generated'

export type ProductHowToProps = {
  page: Page
  headline: ProductHowToFragment['headline']
  content: ProductHowToFragment['content']
  howToAsset1: ProductHowToFragment['howToAsset1']
  howToAsset2: ProductHowToFragment['howToAsset2']
}
