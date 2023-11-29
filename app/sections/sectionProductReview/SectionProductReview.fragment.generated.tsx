import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionProductReviewFragment = { __typename: 'SectionProductReview', id: string, headline?: string | null };

export const SectionProductReviewFragmentDoc = gql`
    fragment SectionProductReview on SectionProductReview {
  id
  __typename
  headline
}
    `;