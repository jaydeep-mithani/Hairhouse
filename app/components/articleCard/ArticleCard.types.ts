interface Article {
  __typename?: 'BlogTile'
  postedDate?: any | null
  name?: string | null
  expertName?: string | null
  topLeftBoxText?: string | null
  image?: {
    __typename?: 'Asset'
    height?: number | null
    width?: number | null
    altText?: string | null
    url: string
  } | null
  description?: { __typename?: 'RichText'; text: string } | null
  button?: {
    __typename?: 'Cta'
    buttonText?: string | null
    url?: string | null
    openInNewWindow?: boolean | null
  } | null
}

export interface ArticleCardProps {
  article: Article
}
