export type ArticleSourcesSectionProps = {
  data: {
    __typename?: 'ArticleSourcesSection'
    title?: string | null
    subtitle?: { __typename?: 'RichText'; html: string } | null
    subtitleBackground?: { __typename?: 'Color'; hex: any } | null
    sources: Array<{ __typename?: 'Citation'; id?: string; adminTitle?: string; text?: string }>
    showAfterSection?: string
  }
}
