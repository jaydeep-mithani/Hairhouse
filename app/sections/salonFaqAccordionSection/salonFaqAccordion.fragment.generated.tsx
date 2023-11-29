import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type FaqAccordionElementsFragment = { __typename?: 'FaqAccordions', title?: string | null, accordions: Array<{ __typename?: 'ModuleAccordion', title?: string | null, description?: { __typename?: 'RichText', text: string } | null }> };

export const FaqAccordionElementsFragmentDoc = gql`
    fragment FaqAccordionElements on FaqAccordions {
  title
  accordions {
    ... on ModuleAccordion {
      title
      description {
        text
      }
    }
  }
}
    `;