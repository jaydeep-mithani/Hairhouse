import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type RolesFragment = { __typename?: 'SectionFeaturedPositionsBlock', heading?: string | null, bkgColor: { __typename?: 'Color', hex: any }, positions: Array<{ __typename?: 'ModuleImageAndText', heading?: string | null, contentAlignment?: Types.TextAlignment | null, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } | null, text?: { __typename?: 'RichText', html: string } | null, button?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null } | null }> };

export const RolesFragmentDoc = gql`
    fragment Roles on SectionFeaturedPositionsBlock {
  heading
  bkgColor: backgroundColour {
    hex
  }
  positions {
    heading
    image {
      altText
      url
      width
      height
    }
    text {
      html
    }
    contentAlignment
    imagePosition
    imageWidth
    button {
      buttonText
      ctaType
      openInNewWindow
    }
  }
}
    `;