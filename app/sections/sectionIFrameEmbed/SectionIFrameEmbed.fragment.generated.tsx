import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionIFrameEmbedFragment = { __typename?: 'SectionIFrameEmbed', iFrameEmbed?: string | null };

export const SectionIFrameEmbedFragmentDoc = gql`
    fragment SectionIFrameEmbed on SectionIFrameEmbed {
  iFrameEmbed
}
    `;