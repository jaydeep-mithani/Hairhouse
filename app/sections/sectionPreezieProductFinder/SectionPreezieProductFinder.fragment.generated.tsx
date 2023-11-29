import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionPreezieProductFinderFragment = { __typename?: 'SectionPreezieProductFinder', id: string, preezieGuideKey?: string | null };

export const SectionPreezieProductFinderFragmentDoc = gql`
    fragment SectionPreezieProductFinder on SectionPreezieProductFinder {
  id
  preezieGuideKey
}
    `;