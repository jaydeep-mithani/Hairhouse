import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type AccordionElementFragment = { __typename?: 'Accordion', title?: string | null, layout?: Types.TitleOrientation | null, accordions: Array<{ __typename?: 'ModuleAccordion', title?: string | null, description?: { __typename?: 'RichText', text: string } | null }> };

export const AccordionElementFragmentDoc = gql`
    fragment AccordionElement on Accordion {
  title
  layout
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