import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type TwoColumnTextFragment = { __typename?: 'SectionSeoText', adminTitle?: string | null, textLayout?: Types.TextLayout | null, content?: { __typename?: 'RichText', html: string } | null, colun2Content?: { __typename?: 'RichText', html: string } | null };

export const TwoColumnTextFragmentDoc = gql`
    fragment TwoColumnText on SectionSeoText {
  adminTitle
  content {
    html
  }
  colun2Content {
    html
  }
  textLayout
}
    `;