import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type TextAndImageBlockSectionFragment = { __typename?: 'SectionImageAndTextGrid', id: string, imageAndTextBlocks: Array<{ __typename?: 'ModuleImageAndText', heading?: string | null, contentAlignment?: Types.TextAlignment | null, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, id: string, text?: { __typename?: 'RichText', html: string } | null, image?: { __typename?: 'Asset', url: string, altText?: string | null } | null, buttons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null }> }> };

export const TextAndImageBlockSectionFragmentDoc = gql`
    fragment TextAndImageBlockSection on SectionImageAndTextGrid {
  id
  imageAndTextBlocks {
    heading
    text {
      html
    }
    contentAlignment
    imagePosition
    imageWidth
    id
    image {
      url
      altText
    }
    buttons {
      buttonText
      ctaType
      id
      url
    }
  }
}
    `;