import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionTextBlockWithCtAsFragment = { __typename?: 'SectionTextBlockWithCTAs', adminTitle?: string | null, heading?: string | null, textAlignment?: Types.TextAlignment | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, textContent?: { __typename?: 'SectionTextBlockWithCTAsTextContentRichText', html: string, text: string, markdown: string, raw: any } | null, buttonCta: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null }> };

export const SectionTextBlockWithCtAsFragmentDoc = gql`
    fragment SectionTextBlockWithCTAs on SectionTextBlockWithCTAs {
  adminTitle
  heading
  backgroundColour {
    hex
  }
  textAlignment
  heading
  textContent {
    html
    text
    markdown
    raw
  }
  buttonCta {
    buttonText
    ctaType
    id
    url
    openInNewWindow
  }
}
    `;