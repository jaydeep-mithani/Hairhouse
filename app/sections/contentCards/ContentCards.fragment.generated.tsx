import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionContentCardFragment = { __typename?: 'SectionContentCard', headingText?: string | null, adminTitle?: string | null, cards: Array<{ __typename?: 'ModuleImageAndText', contentAlignment?: Types.TextAlignment | null, heading?: string | null, id: string, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, button?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, openInNewWindow?: boolean | null, url?: string | null } | null, buttons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null, id: string }>, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, text?: { __typename?: 'RichText', html: string } | null }> };

export const SectionContentCardFragmentDoc = gql`
    fragment SectionContentCard on SectionContentCard {
  headingText
  adminTitle
  cards {
    button {
      buttonText
      ctaType
      id
      openInNewWindow
      url
    }
    buttons {
      buttonText
      ctaType
      openInNewWindow
      url
      id
    }
    contentAlignment
    heading
    id
    image {
      altText
      height
      url
      width
    }
    imagePosition
    imageWidth
    text {
      html
    }
  }
}
    `;