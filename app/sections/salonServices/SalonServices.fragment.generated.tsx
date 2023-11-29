import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SalonServicesFragment = { __typename?: 'SectionSalon', id: string, salonNotes?: string | null, name?: string | null, bg?: string | null, salonServices: Array<{ __typename?: 'SalonService', description?: string | null, fromText?: string | null, id: string, name?: string | null, salonNote?: string | null, subHeading?: string | null, button?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null } | null }>, policyLink?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null } | null };

export const SalonServicesFragmentDoc = gql`
    fragment SalonServices on SectionSalon {
  bg: backgroundColor
  id
  salonNotes
  name
  salonServices {
    button {
      buttonText
      ctaType
      id
      url
    }
    description
    fromText
    id
    name
    salonNote
    subHeading
  }
  policyLink {
    buttonText
    ctaType
    id
    url
  }
}
    `;