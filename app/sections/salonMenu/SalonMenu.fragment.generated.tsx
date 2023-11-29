import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionSalonMenuFragment = { __typename?: 'SectionSalonMenu', id: string, menus: Array<{ __typename?: 'MenuType', name?: string | null, menuSublist: Array<{ __typename?: 'MenuSublist', sublistItems: Array<{ __typename?: 'MenuSublistItem', title?: string | null, items: Array<string> }> }> }> };

export type MenuTypeFragment = { __typename?: 'MenuType', name?: string | null, menuSublist: Array<{ __typename?: 'MenuSublist', sublistItems: Array<{ __typename?: 'MenuSublistItem', title?: string | null, items: Array<string> }> }> };

export type MenuSublistItemFragment = { __typename?: 'MenuSublistItem', title?: string | null, items: Array<string> };

export const MenuSublistItemFragmentDoc = gql`
    fragment MenuSublistItem on MenuSublistItem {
  title
  items
}
    `;
export const MenuTypeFragmentDoc = gql`
    fragment MenuType on MenuType {
  name
  menuSublist {
    sublistItems {
      ... on MenuSublistItem {
        ...MenuSublistItem
      }
    }
  }
}
    ${MenuSublistItemFragmentDoc}`;
export const SectionSalonMenuFragmentDoc = gql`
    fragment SectionSalonMenu on SectionSalonMenu {
  id
  menus {
    ... on MenuType {
      ...MenuType
    }
  }
}
    ${MenuTypeFragmentDoc}`;