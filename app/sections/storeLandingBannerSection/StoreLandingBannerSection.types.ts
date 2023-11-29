export type StoreLandingBannerSectionProps = {
  title?: string
  subTitle?: string
  isSustainable: boolean
  hasClickAndCollect: boolean
  hasDelivery: boolean
  availableSalon: boolean
  availablePiercing: boolean
  banner?: {
    fileName: string
    height: number
    url: string
    width: number
  }
}
