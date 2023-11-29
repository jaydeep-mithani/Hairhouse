import { Page } from 'types/Page.types'

import { HeroBannerFragment } from './HeroBanner.fragment.generated'

export type HeroBannerProps = HeroBannerFragment & { page: Page }
