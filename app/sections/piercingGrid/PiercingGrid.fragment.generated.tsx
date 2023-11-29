import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionPiercingGridFragment = { __typename?: 'SectionPiercingGrid', id: string, piercingGridTabs: Array<{ __typename?: 'PiercingGridTab', name?: string | null, piercingGridItems: Array<{ __typename?: 'PiercingGridItem', name?: string | null, description?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null }> }> };

export type PiercingGridTabFragment = { __typename?: 'PiercingGridTab', name?: string | null, piercingGridItems: Array<{ __typename?: 'PiercingGridItem', name?: string | null, description?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null }> };

export type PiercingGridItemFragment = { __typename?: 'PiercingGridItem', name?: string | null, description?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null };

export const PiercingGridItemFragmentDoc = gql`
    fragment PiercingGridItem on PiercingGridItem {
  name
  description
  image {
    altText
    url
  }
}
    `;
export const PiercingGridTabFragmentDoc = gql`
    fragment PiercingGridTab on PiercingGridTab {
  name
  piercingGridItems {
    ... on PiercingGridItem {
      ...PiercingGridItem
    }
  }
}
    ${PiercingGridItemFragmentDoc}`;
export const SectionPiercingGridFragmentDoc = gql`
    fragment SectionPiercingGrid on SectionPiercingGrid {
  id
  piercingGridTabs {
    ... on PiercingGridTab {
      ...PiercingGridTab
    }
  }
}
    ${PiercingGridTabFragmentDoc}`;