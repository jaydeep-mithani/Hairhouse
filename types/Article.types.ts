import { ShareIconsProps } from '~/components/shareIcons/ShareIcons.types'
import { DateTime } from 'schema-dts'

export type Article = {
  __typename?: 'Article'
  title: string
  subtitle?: string | null
  url?: string | null
  authorAndShare?: {
    __typename?: 'AuthorAndShare'
    authorName?: string | null
    authorSubtitle?: string | null
    authorImage?: {
      __typename?: 'ModuleImage'
      image: {
        __typename?: 'Asset'
        altText: string
        width?: number | null
        height?: number | null
        url: string
      }
    } | null
    shareIcons?: ShareIconsProps | null
  }
  blogs: Array<{
    __typename?: 'Blog'
    title: string
  }>
  excerpt?: {
    __typename?: 'RichText'
    html: string
  } | null
  thumbnail?: {
    __typename?: 'ModuleImage'
    image: {
      __typename?: 'Asset'
      altText?: string | null
      width?: number | null
      height?: number | null
      url: string
    }
  } | null
  publishedAt?: DateTime | string | null
}
