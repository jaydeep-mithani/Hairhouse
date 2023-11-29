import { Product } from '@shopify/hydrogen/storefront-api-types'
import { Page } from 'types/Page.types'

import { SectionProductReviewFragment } from './SectionProductReview.fragment.generated'

export type SectionProductReviewProps = SectionProductReviewFragment & { page: Page } & { product: Product }
