import { Page } from 'types/Page.types'

import { EditorialTileFragment } from './MultiColumnContent.fragment.generated'

export interface Icard {
  heading?: string | null
  description?: string | null
  image?: { __typename?: 'Asset'; height?: number | null; url: string; width?: number | null; altText?: string | null }
}

export type MultiColumnContentProps = EditorialTileFragment & { page: Page }
