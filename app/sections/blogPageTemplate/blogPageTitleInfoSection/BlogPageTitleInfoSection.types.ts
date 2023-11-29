export type BlogPageTitleInfoSectionProps = {
  title?: string | null
  subtitle?: string | null
  url?: string | null
  blogs?: Array<{ __typename?: 'BlogPage'; title?: string | null; url?: string | null; position?: number | null }>
}
