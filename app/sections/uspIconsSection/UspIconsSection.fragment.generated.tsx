import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type UspItemFragment = { __typename?: 'UspItem', id: string, title?: string | null, quantity?: string | null, icon?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null };

export type UspSectionFragment = { __typename?: 'UspSection', id: string, heading?: string | null, desc?: { __typename?: 'RichText', text: string } | null, bgColour?: { __typename?: 'Color', hex: any } | null, items: Array<{ __typename?: 'UspItem', id: string, title?: string | null, quantity?: string | null, icon?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null }> };

export const UspItemFragmentDoc = gql`
    fragment UspItem on UspItem {
  id
  title
  quantity
  icon {
    altText
    height
    width
    url
  }
}
    `;
export const UspSectionFragmentDoc = gql`
    fragment UspSection on UspSection {
  id
  heading
  desc: description {
    text
  }
  bgColour: backgroundColor {
    hex
  }
  items {
    ... on UspItem {
      ...UspItem
    }
  }
}
    ${UspItemFragmentDoc}`;