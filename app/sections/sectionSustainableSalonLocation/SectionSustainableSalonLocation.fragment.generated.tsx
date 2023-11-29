import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionSustainableSalonLocationFragment = { __typename?: 'SectionSustainableSalonLocation', id: string, title?: string | null, subtitle?: string | null, locations: Array<string> };

export const SectionSustainableSalonLocationFragmentDoc = gql`
    fragment SectionSustainableSalonLocation on SectionSustainableSalonLocation {
  id
  title
  subtitle
  locations
}
    `;