import { Page } from 'types/Page.types'

import { FooterFragment } from './Footer.fragment.generated'

export type FooterProps = FooterFragment & { page: Page }

export interface JoinBannerProps {
  styleSocietyHeading: FooterFragment['styleSocietyHeading']
  styleSocietyContent: FooterFragment['styleSocietyContent']
  styleSocietyCta: FooterFragment['styleSocietyCta']
}

export interface FooterSocialProps {
  socialLinksHeadingText: FooterFragment['socialLinksHeadingText']
  instagramUrl: FooterFragment['instagramUrl']
  facebookUrl: FooterFragment['facebookUrl']
  tiktokUrl: FooterFragment['tiktokUrl']
  youtubeUrl: FooterFragment['youtubeUrl']
}

export interface FooterInfoProps {
  acknowledgementTitle: FooterFragment['acknowledgementTitle']
  acknowledgementContent: FooterFragment['acknowledgementContent']
}

export interface FooterMenuProps {
  footerLinks: FooterFragment['footerLinks']
}

export interface FooterHelpBlockProps {
  helpCentreBox: FooterFragment['helpCentreBox']
  assistanceCtAs: FooterFragment['assistanceCtAs']
  isAccount: boolean | undefined
}

export interface FooterDownloadProps {
  androidAppStoreUrl: FooterFragment['androidAppStoreUrl']
  iOsAppStoreUrl: FooterFragment['iOsAppStoreUrl']
}

export interface FooterBottomProps {
  paymentLogos: FooterFragment['paymentLogos']
  legalLinks: FooterFragment['legalLinks']
}

export interface SectionUSPProps {
  uniqueSellingPoints: FooterFragment['uniqueSellingPoints']
}

export enum BusinessHours {
  StartHour = 9,
  EndHour = 17,
}
