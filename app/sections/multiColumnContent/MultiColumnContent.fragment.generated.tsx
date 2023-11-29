import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type EditorialTileFragment = { __typename?: 'EditorialTile', name?: string | null, heading?: string | null, tiles: Array<{ __typename?: 'EditorialItem', description?: string | null, heading?: string | null, image: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } }>, cta?: { __typename?: 'Cta', buttonText?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null, url?: string | null } | null };

export const EditorialTileFragmentDoc = gql`
    fragment EditorialTile on EditorialTile {
  name
  heading
  tiles {
    description
    heading
    image {
      altText
      url
      width
      height
    }
  }
  cta {
    buttonText
    openInNewWindow
    ctaType
    url
  }
}
    `;