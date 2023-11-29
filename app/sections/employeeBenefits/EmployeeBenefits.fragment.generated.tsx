import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type EmployeeBenefitsFragment = { __typename?: 'SectionIconsWithText', adminTitle?: string | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, iconsAndText: Array<{ __typename?: 'ModuleIconAndText', adminTitle?: string | null, headingText?: string | null, icon?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } | null }> };

export const EmployeeBenefitsFragmentDoc = gql`
    fragment EmployeeBenefits on SectionIconsWithText {
  adminTitle
  backgroundColour {
    hex
  }
  iconsAndText {
    adminTitle
    icon {
      altText
      url
      width
      height
    }
    headingText
  }
}
    `;