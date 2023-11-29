import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionProductMainFragment = { __typename: 'SectionProductMain', id: string };

export const SectionProductMainFragmentDoc = gql`
    fragment SectionProductMain on SectionProductMain {
  id
  __typename
}
    `;