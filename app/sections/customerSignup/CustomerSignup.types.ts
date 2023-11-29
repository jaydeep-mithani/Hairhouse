import { Theme } from 'graphql/types'

export type CustomerSignupProps = {
  data: {
    __typename?: 'CustomerSignUp'
    id?: string
    adminTitle?: string | null
    callToActionPreLoginText?: string | null
    heading?: string | null
    preheading?: string | null
    backgroundColorBlock?: { __typename?: 'Color'; hex: string } | null
    backgroundColorRight?: { __typename?: 'Color'; hex: string } | null
    description?: { __typename?: 'RichText'; html: string } | null
    button?: {
      __typename?: 'Button'
      id?: string
      buttonText: string
      buttonUrl?: string | null
      buttonTheme?: Theme | null
      displayButton?: boolean | null
    } | null
    carouselTitle?: string | null
    carouselSubtitle?: string | null
    featuresSlider?: Array<{
      __typename?: 'ModuleCustomerSignUpFeatures'
      id?: string
      blockTitle?: string | null
      blockSubtitle?: string | null
      blockImage?: {
        __typename?: 'Asset'
        altText?: string
        height?: number | null
        url: string
        width?: number | null
      } | null
    }>
  }
}

export type ActionData = {
  formError?: string
}
