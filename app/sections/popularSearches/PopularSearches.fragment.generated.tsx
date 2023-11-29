import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionSearchTermListFragment = { __typename?: 'SectionSearchTermList', id: string, adminTitle?: string | null, headline?: string | null, searchTerms: Array<string> };

export const SectionSearchTermListFragmentDoc = gql`
    fragment SectionSearchTermList on SectionSearchTermList {
  id
  adminTitle
  headline
  searchTerms
}
    `;