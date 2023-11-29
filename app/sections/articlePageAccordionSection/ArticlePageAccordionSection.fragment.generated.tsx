import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ArticlePageAccordionSectionFragment = { __typename?: 'SectionsAccordion', id: string, accordionLayout?: Types.AccordionLayout | null, headline?: string | null, accordionSections: Array<{ __typename?: 'AccordionContent', title?: string | null, content?: { __typename?: 'RichText', text: string } | null }> };

export const ArticlePageAccordionSectionFragmentDoc = gql`
    fragment ArticlePageAccordionSection on SectionsAccordion {
  id
  accordionLayout
  accordionSections {
    title
    content {
      text
    }
  }
  headline
}
    `;