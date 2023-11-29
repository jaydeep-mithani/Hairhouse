import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type BrandLogoGridFragment = { __typename?: 'BrandLogoGrid', id: string, subtext?: string | null, carousel?: boolean | null, hdText: string, brandsBrands: Array<{ __typename?: 'BrandsBrandLogo', brandName?: string | null, brandTags: Array<Types.BrandTags>, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', url: string } | null }>, cta?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null } | null };

export type BrandsBrandLogoFragment = { __typename?: 'BrandsBrandLogo', brandName?: string | null, brandTags: Array<Types.BrandTags>, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', url: string } | null };

export const BrandsBrandLogoFragmentDoc = gql`
    fragment BrandsBrandLogo on BrandsBrandLogo {
  brandName
  brandTags
  brandLogo {
    url
  }
  brandUrl
}
    `;
export const BrandLogoGridFragmentDoc = gql`
    fragment BrandLogoGrid on BrandLogoGrid {
  id
  subtext
  hdText: headingText
  brandsBrands {
    ... on BrandsBrandLogo {
      ...BrandsBrandLogo
    }
  }
  carousel
  cta {
    buttonText
    ctaType
    id
    url
    openInNewWindow
  }
}
    ${BrandsBrandLogoFragmentDoc}`;