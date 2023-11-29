import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ArticlePageTextSectionFragment = { __typename?: 'SectionTextBlockWithCTAs', id: string, heading?: string | null, textAlignment?: Types.TextAlignment | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, textContent?: { __typename?: 'SectionTextBlockWithCTAsTextContentRichText', html: string } | null, buttonCta: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null }> };

export const ArticlePageTextSectionFragmentDoc = gql`
    fragment ArticlePageTextSection on SectionTextBlockWithCTAs {
  id
  heading
  backgroundColour {
    hex
  }
  textAlignment
  textContent {
    html
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