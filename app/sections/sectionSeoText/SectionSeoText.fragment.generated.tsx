import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionSeoTextFragment = { __typename?: 'SectionSeoText', id: string, textLayout?: Types.TextLayout | null, content?: { __typename?: 'RichText', raw: any } | null };

export const SectionSeoTextFragmentDoc = gql`
    fragment SectionSeoText on SectionSeoText {
  id
  content {
    raw
  }
  textLayout
}
    `;