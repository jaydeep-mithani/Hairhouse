import { SectionAccountSignupCtaFragment } from './CustomerLogin.fragment.generated'

export type CustomerLoginProps = {
  onClose: () => void
  data: {
    formTitle?: string
    formSubtitle?: string
    formSubmitBtn?: {
      buttonText: string
      ctaType: string
    }
    forgetPassWordLink?: {
      buttonText: string
      ctaType: string
      url?: string
    }
    isLoggedIn?: string | null
  } & SectionAccountSignupCtaFragment
}
