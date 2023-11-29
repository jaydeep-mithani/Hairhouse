import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionCompetitionBannerFragment = { __typename?: 'SectionCompetitionBanner', id: string, adminTitle?: string | null, heading?: string | null, description?: string | null, subtext?: string | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, button?: { __typename?: 'Cta', id: string, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null } | null };

export const SectionCompetitionBannerFragmentDoc = gql`
    fragment SectionCompetitionBanner on SectionCompetitionBanner {
  id
  adminTitle
  backgroundColour {
    hex
  }
  heading
  description
  image {
    altText
    height
    url
    width
  }
  subtext
  button: ctaButtons {
    id
    buttonText
    url
    openInNewWindow
    ctaType
  }
}
    `;