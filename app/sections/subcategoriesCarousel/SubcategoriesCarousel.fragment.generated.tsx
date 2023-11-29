import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionCollectionSubcategoryLinkFragment = { __typename?: 'SectionCollectionSubcategoryLink', id: string, adminTitle?: string | null };

export const SectionCollectionSubcategoryLinkFragmentDoc = gql`
    fragment SectionCollectionSubcategoryLink on SectionCollectionSubcategoryLink {
  id
  adminTitle
}
    `;