import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionServiceDescriptionBlockFragment = { __typename?: 'SectionServiceDescriptionBlock', id: string, imagePosition?: Types.ImagePosition | null, heading?: string | null, descriptionText?: string | null, button?: { __typename?: 'Cta', url?: string | null, buttonText?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null } | null, content?: { __typename?: 'RichText', html: string } | null, desktopImg?: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null } | null, mobileImg?: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null } | null, tabletImg?: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null } | null };

export const SectionServiceDescriptionBlockFragmentDoc = gql`
    fragment SectionServiceDescriptionBlock on SectionServiceDescriptionBlock {
  id
  button {
    url
    buttonText
    openInNewWindow
    ctaType
  }
  descriptionText: description
  imagePosition
  heading
  content {
    html
  }
  desktopImg: desktopImage {
    height
    url
    width
  }
  mobileImg: mobileImage {
    height
    url
    width
  }
  tabletImg: tabletImage {
    height
    url
    width
  }
}
    `;