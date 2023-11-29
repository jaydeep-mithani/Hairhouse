import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionSalonBookingFragment = { __typename?: 'SectionSalonBooking', adminTitle?: string | null, salonWelcomeImageHeading1?: string | null, salonWelcomeImageHeading2?: string | null, promoBannerText?: string | null, salonCreateAnAccountSubtext?: string | null, logo?: { __typename?: 'Asset', url: string } | null, salonWelcomeImage1?: { __typename?: 'Asset', id: string, url: string, altText?: string | null } | null, salonWelcomeImage2?: { __typename?: 'Asset', id: string, url: string, altText?: string | null } | null, promoBannerBackgroundColor?: { __typename?: 'Color', hex: any } | null, promoBannerCta?: { __typename?: 'Cta', buttonText?: string | null, url?: string | null, ctaType?: Types.CtaType | null } | null };

export const SectionSalonBookingFragmentDoc = gql`
    fragment SectionSalonBooking on SectionSalonBooking {
  adminTitle
  logo {
    url
  }
  salonWelcomeImageHeading1
  salonWelcomeImageHeading2
  salonWelcomeImage1 {
    id
    url
    altText
  }
  salonWelcomeImage2 {
    id
    url
    altText
  }
  promoBannerText
  promoBannerBackgroundColor {
    hex
  }
  promoBannerCta {
    buttonText
    url
    ctaType
  }
  salonCreateAnAccountSubtext
}
    `;