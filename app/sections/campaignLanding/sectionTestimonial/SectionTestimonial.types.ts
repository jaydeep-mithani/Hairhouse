export interface SectionTestimonialProps {
  __typename?: 'SectionTestimonial'
  heading?: string
  bgColor?: {
    __typename?: 'Color'
    hex?: string
  }
  testimonials?: SectionTestimonialItem[]
}

export interface SectionTestimonialItem {
  __typename?: 'BlogTile'
  id?: string
  name?: string
  description?: {
    __typename?: 'RichText'
    text?: string
  }
  expertName?: string
  topLeftBoxText?: string
  postedDate?: string
  image?: {
    url: string
    altText: string | null
  }

  button?: {
    __typename?: 'Cta'
    id?: string
    buttonText?: string
    url?: string
    buttonTheme?: string
  }
}
