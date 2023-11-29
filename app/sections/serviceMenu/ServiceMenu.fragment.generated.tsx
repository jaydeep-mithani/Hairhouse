import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SalonServiceFragment = { __typename?: 'SalonService', name?: string | null, description?: string | null, subHeading?: string | null, fromText?: string | null, salonNote?: string | null, button?: { __typename?: 'Cta', buttonText?: string | null, url?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null } | null };

export type ServicesMenuFragment = { __typename?: 'ServicesMenu', title?: string | null, description?: string | null, tiles: Array<{ __typename?: 'SalonService', name?: string | null, description?: string | null, subHeading?: string | null, fromText?: string | null, salonNote?: string | null, button?: { __typename?: 'Cta', buttonText?: string | null, url?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null } | null }> };

export type SectionSustainableServicesMenuFragment = { __typename?: 'SectionSustainableServicesMenu', title?: string | null, salonserviceDescription?: string | null, policyLink?: { __typename?: 'Link', linkText: string, url?: string | null, openInNewWindow?: boolean | null } | null, servicesMenu: Array<{ __typename?: 'ServicesMenu', title?: string | null, description?: string | null, tiles: Array<{ __typename?: 'SalonService', name?: string | null, description?: string | null, subHeading?: string | null, fromText?: string | null, salonNote?: string | null, button?: { __typename?: 'Cta', buttonText?: string | null, url?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null } | null }> }> };

export const SalonServiceFragmentDoc = gql`
    fragment SalonService on SalonService {
  name
  description
  subHeading
  fromText
  salonNote
  button {
    buttonText
    url
    ctaType
    openInNewWindow
  }
}
    `;
export const ServicesMenuFragmentDoc = gql`
    fragment ServicesMenu on ServicesMenu {
  title
  description
  tiles {
    ... on SalonService {
      ...SalonService
    }
  }
}
    ${SalonServiceFragmentDoc}`;
export const SectionSustainableServicesMenuFragmentDoc = gql`
    fragment SectionSustainableServicesMenu on SectionSustainableServicesMenu {
  title
  salonserviceDescription: description
  policyLink {
    linkText
    url
    openInNewWindow
  }
  servicesMenu {
    ... on ServicesMenu {
      ...ServicesMenu
    }
  }
}
    ${ServicesMenuFragmentDoc}`;