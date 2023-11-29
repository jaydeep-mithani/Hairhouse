import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type OfferTilesFragment = { __typename?: 'OfferTiles', name?: string | null, offerItems: Array<{ __typename?: 'OfferItem', heading?: string | null, buttonText?: string | null, url: string, topLeftBoxText?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } | null }>, cta?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, url?: string | null, openInNewWindow?: boolean | null } | null };

export const OfferTilesFragmentDoc = gql`
    fragment OfferTiles on OfferTiles {
  name
  offerItems {
    heading
    image {
      altText
      url
      width
      height
    }
    buttonText
    url
    topLeftBoxText
  }
  cta {
    buttonText
    ctaType
    url
    openInNewWindow
  }
}
    `;