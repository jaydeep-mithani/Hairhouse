import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionImageWithTextFragment = { __typename?: 'SectionImageWithText', title?: string | null, imageWithText?: { __typename?: 'ModuleImageAndText', backgroundColour?: Types.SectionBackground | null, heading?: string | null, id: string, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, contentAlignment?: Types.TextAlignment | null, buttons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null }>, text?: { __typename?: 'RichText', html: string } | null, image?: { __typename?: 'Asset', altText?: string | null, fileName: string, url: string, height?: number | null, size?: number | null, width?: number | null } | null, button?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null } | null } | null };

export const SectionImageWithTextFragmentDoc = gql`
    fragment SectionImageWithText on SectionImageWithText {
  title
  imageWithText {
    backgroundColour
    buttons {
      buttonText
      ctaType
      id
      url
      openInNewWindow
    }
    heading
    id
    imagePosition
    imageWidth
    text {
      html
    }
    image {
      altText
      fileName
      url
      height
      size
      width
    }
    contentAlignment
    button {
      buttonText
      ctaType
      id
      url
      openInNewWindow
    }
  }
}
    `;