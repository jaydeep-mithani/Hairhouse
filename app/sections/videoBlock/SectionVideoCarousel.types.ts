import { Page } from 'types/Page.types'

import { SectionVideoCarouselFragment } from './SectionVideoCarousel.fragment.generated'

export type SectionVideoCarouselProps = SectionVideoCarouselFragment & { page?: Page }

export type VideoComponentProps = Pick<VideoProps, 'videos' | 'headline'>

export type VideoProps = {
  children?: boolean
  headline?: string | null
  id: string
  sectionPosition: number
  videos: Array<{
    __typename?: 'ModuleVideo'
    id: string
    altText?: string | null
    name?: string | null
    time?: string | null
    video?: { __typename?: 'Asset'; id: string; url: string } | null
    thumbnail?: { __typename?: 'Asset'; id: string; url: string } | null
  }>
}
