import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SalonPartnersFragment = { __typename?: 'BrandLogoGrid', carousel?: boolean | null, headingText: string, subtext?: string | null, brandsBrands: Array<{ __typename?: 'BrandsBrandLogo', brandName?: string | null, brandLogo?: { __typename?: 'Asset', altText?: string | null, id: string, url: string } | null }> };

export const SalonPartnersFragmentDoc = gql`
    fragment SalonPartners on BrandLogoGrid {
  carousel
  headingText
  subtext
  brandsBrands {
    brandName
    brandLogo {
      altText
      id
      url
    }
  }
}
    `;