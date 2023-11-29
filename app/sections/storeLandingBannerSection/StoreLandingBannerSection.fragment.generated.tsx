import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';

export type StoreLandingBannerSectionElementsFragment = { __typename?: 'StoreLanding', title?: string | null, subTitle?: string | null, textBlocks: Array<string>, images: Array<{ __typename?: 'ModuleImage', altText: string, image: { __typename?: 'Asset', width?: number | null, height?: number | null, url: string } }>, buttons: Array<{ __typename?: 'Button', buttonText: string, buttonUrl?: string | null, displayButton?: boolean | null, buttonTheme?: Types.Theme | null }>, textBlocksColor?: { __typename?: 'Color', hex: any } | null, features: Array<{ __typename?: 'StoreLandingFeaturesRichText', html: string }>, preTitleImage?: { __typename?: 'ModuleImage', altText: string, image: { __typename?: 'Asset', width?: number | null, height?: number | null, url: string } } | null };
export type StoreShortInfoElementsFragment = { __typename?: 'StoreLanding', title?: string | null, subTitle?: string | null, textBlocks: Array<string>, textBlocksColor?: { __typename?: 'Color', hex: any } | null, features: Array<{ __typename?: 'StoreLandingFeaturesRichText', html: string }>, preTitleImage?: { __typename?: 'ModuleImage', altText: string, image: { __typename?: 'Asset', width?: number | null, height?: number | null, url: string } } | null };


export const StoreShortInfoElementsFragmentDoc = gql`
    fragment StoreShortInfoElements on StoreLanding {
  title
  subTitle
  textBlocks
  textBlocksColor {
    hex
  }
  features {
    html
  }
  preTitleImage {
    image {
      width
      height
      url
    }
    altText
  }
}
    `;
export const StoreLandingBannerSectionElementsFragmentDoc = gql`
    fragment StoreLandingBannerSectionElements on StoreLanding {
  images {
    image {
      width
      height
      url
    }
    altText
  }
  buttons {
    buttonText
    buttonUrl
    displayButton
    buttonTheme
  }
  ...StoreShortInfoElements
}
    ${StoreShortInfoElementsFragmentDoc}`;