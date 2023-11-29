import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type JoinCtApanelFragment = { __typename?: 'JoinCTApanel', id: string, textPositionLeft?: boolean | null, textBlockLayout?: Types.HeroTextBlockLayout | null, desktopImage: { __typename?: 'Asset', altText?: string | null, url: string, mimeType?: string | null }, mobileImage?: { __typename?: 'Asset', altText?: string | null, url: string, mimeType?: string | null } | null, textArea?: { __typename?: 'RichText', raw: any, html: string } | null, contentColour?: { __typename?: 'Color', hex: any } | null, ctAs: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null }> };

export type ColorFragment = { __typename?: 'Color', hex: any };

export type CtaFragment = { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null };

export const ColorFragmentDoc = gql`
    fragment Color on Color {
  hex
}
    `;
export const CtaFragmentDoc = gql`
    fragment Cta on Cta {
  buttonText
  ctaType
  id
  url
  openInNewWindow
}
    `;
export const JoinCtApanelFragmentDoc = gql`
    fragment JoinCTApanel on JoinCTApanel {
  id
  desktopImage {
    altText
    url
    mimeType
  }
  mobileImage {
    altText
    url
    mimeType
  }
  textArea {
    raw
    html
  }
  textPositionLeft
  textBlockLayout
  contentColour {
    ... on Color {
      ...Color
    }
  }
  ctAs {
    ... on Cta {
      ...Cta
    }
  }
}
    ${ColorFragmentDoc}
${CtaFragmentDoc}`;