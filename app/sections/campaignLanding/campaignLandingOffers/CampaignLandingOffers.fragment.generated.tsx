import * as Types from '../../../../graphql/types';

import gql from 'graphql-tag';
export type SectionOfferFragment = { __typename?: 'SectionOffer', id: string, offerName?: string | null, offerBgColor?: { __typename?: 'Color', hex: any } | null, offerItems: Array<{ __typename?: 'OfferItem', heading?: string | null, buttonText?: string | null, url: string, topLeftBoxText?: string | null, description?: string | null, brandImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, image?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null }> };

export type OfferItemFragment = { __typename?: 'OfferItem', heading?: string | null, buttonText?: string | null, url: string, topLeftBoxText?: string | null, description?: string | null, brandImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, image?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null };

export const OfferItemFragmentDoc = gql`
    fragment OfferItem on OfferItem {
  heading
  buttonText
  url
  topLeftBoxText
  description
  brandImage {
    height
    width
    url
    altText
  }
  image {
    height
    width
    url
    altText
  }
}
    `;
export const SectionOfferFragmentDoc = gql`
    fragment SectionOffer on SectionOffer {
  id
  offerName: name
  offerBgColor: backgroundColor {
    hex
  }
  offerItems {
    ... on OfferItem {
      ...OfferItem
    }
  }
}
    ${OfferItemFragmentDoc}`;