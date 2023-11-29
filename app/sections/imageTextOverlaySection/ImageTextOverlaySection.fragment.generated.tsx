import * as Types from '../../../graphql/types';
import { ImageModuleFragmentDoc } from 'graphql/shared-fragments/imageModule/ImageModule.fragment.generated';
import gql from 'graphql-tag';
export type ImageTextOverlaySectionElementsFragment = { __typename?: 'ImageTextOverlay', title?: string | null, bannerDesktopHeight?: number | null, bannerMobileHeight?: number | null, overlay?: boolean | null, imageDesktop?: { __typename?: 'ModuleImage', altText: string, image: { __typename?: 'Asset', width?: number | null, height?: number | null, url: string } } | null, imageMobile?: { __typename?: 'ModuleImage', altText: string, image: { __typename?: 'Asset', width?: number | null, height?: number | null, url: string } } | null };

export const ImageTextOverlaySectionElementsFragmentDoc = gql`
  fragment ImageTextOverlaySectionElements on ImageTextOverlay {
    title
    bannerDesktopHeight
    bannerMobileHeight
    overlay
    imageDesktop {
      ... on ModuleImage {
        ...ModuleImageElements
      }
    }
    imageMobile {
      ... on ModuleImage {
        ...ModuleImageElements
      }
    }
  }
    ${ImageModuleFragmentDoc}`;