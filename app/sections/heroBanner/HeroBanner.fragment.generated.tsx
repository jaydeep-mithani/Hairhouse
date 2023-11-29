import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type HeroBannerFragment = { __typename?: 'HeroBanner', id: string, heading?: string | null, showBreadcrumbs?: boolean | null, subtext?: string | null, layout?: Types.HeroLayout | null, textBlockLayout?: Types.HeroTextBlockLayout | null, logo?: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null, width?: number | null } | null, desc?: { __typename?: 'RichText', html: string } | null, contentColour?: { __typename?: 'Color', hex: any } | null, mobileImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string } | null, ctaButtons: Array<{ __typename?: 'Cta', id: string, buttonText?: string | null, openInNewWindow?: boolean | null, stage: Types.Stage, url?: string | null, ctaType?: Types.CtaType | null }>, desktopImage: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null } };

export const HeroBannerFragmentDoc = gql`
    fragment HeroBanner on HeroBanner {
  id
  heading
  showBreadcrumbs
  logo {
    altText
    url
    height
    width
  }
  subtext
  desc: description {
    html
  }
  layout
  contentColour {
    hex
  }
  showBreadcrumbs
  textBlockLayout
  mobileImage {
    altText
    height
    url
  }
  ctaButtons {
    id
    buttonText
    openInNewWindow
    stage
    url
    ctaType
  }
  desktopImage {
    altText
    url
    height
  }
}
    `;