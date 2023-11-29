import { Asset } from '../textAndImageBlockSection/TextAndImageBlockSection.types'

export interface SectionCuratedBlogProps {
  __typename?: 'SectionCuratedBlog'
  id?: string
  heading?: string
  blogItem?: BlogItemProps[]
}

export interface BlogItemProps {
  id?: string
  name?: string
  description?: {
    text?: string
    __typename?: 'RichText'
  }
  image?: Asset
  button?: {
    url?: string
    buttonText?: string
    id?: string
    __typename?: 'Cta'
  }
  __typename?: 'BlogTile'
}
