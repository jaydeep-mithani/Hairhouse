import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type PropositionFragment = { __typename?: 'Proposition', id: string, propositionName?: string | null, propositions: Array<{ __typename?: 'PropositionItem', id: string, loadInNewWindow?: boolean | null, propositionUrl?: string | null, propositiontext?: string | null }> };

export const PropositionFragmentDoc = gql`
    fragment Proposition on Proposition {
  id
  propositionName: name
  propositions {
    id
    loadInNewWindow
    propositionUrl
    propositiontext
  }
}
    `;