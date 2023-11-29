import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionCategoryCarouselFragment = { __typename?: 'SectionCategoryCarousel', title?: string | null, tilesAlignment: Types.TilesAlignment, backgroundColour?: { __typename?: 'Color', hex: any } | null, categories: Array<{ __typename?: 'EditorialItem', heading?: string | null, url?: string | null, image: { __typename?: 'Asset', altText?: string | null, id: string, url: string } }> };

export const SectionCategoryCarouselFragmentDoc = gql`
    fragment SectionCategoryCarousel on SectionCategoryCarousel {
  backgroundColour {
    hex
  }
  title
  tilesAlignment
  categories {
    heading
    url
    image {
      altText
      id
      url
    }
  }
}
    `;