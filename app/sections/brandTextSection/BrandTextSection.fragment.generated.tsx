import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type EditorialTextFragment = { __typename?: 'EditorialText', id: string, adminTitle?: string | null, textAlignment?: Types.TextAlignment | null, editorialContent?: { __typename?: 'RichText', html: string } | null };

export const EditorialTextFragmentDoc = gql`
    fragment EditorialText on EditorialText {
  id
  adminTitle
  editorialContent: copy {
    html
  }
  textAlignment
}
    `;