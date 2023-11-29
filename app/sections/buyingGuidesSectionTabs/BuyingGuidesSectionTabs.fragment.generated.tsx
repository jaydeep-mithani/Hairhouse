import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type BuyingGuidesTabsElementsFragment = { __typename?: 'BuyingGuidesTabs', tabs: Array<{ __typename?: 'ModuleLink', url?: string | null, linkText?: string | null }> };

export const BuyingGuidesTabsElementsFragmentDoc = gql`
    fragment BuyingGuidesTabsElements on BuyingGuidesTabs {
  tabs {
    ... on ModuleLink {
      url
      linkText
    }
  }
}
    `;