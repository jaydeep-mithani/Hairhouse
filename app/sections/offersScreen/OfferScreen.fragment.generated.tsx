import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionsAccordionFragment = { __typename?: 'SectionsAccordion', id: string, headline?: string | null, accordionLayout?: Types.AccordionLayout | null, accordionSections: Array<{ __typename?: 'AccordionContent', title?: string | null, content?: { __typename?: 'RichText', html: string } | null }> };

export type AccordionContentFragment = { __typename?: 'AccordionContent', title?: string | null, content?: { __typename?: 'RichText', html: string } | null };

export type RichTextFragment = { __typename?: 'RichText', html: string };

export const RichTextFragmentDoc = gql`
    fragment RichText on RichText {
  html
}
    `;
export const AccordionContentFragmentDoc = gql`
    fragment AccordionContent on AccordionContent {
  title
  content {
    ... on RichText {
      ...RichText
    }
  }
}
    ${RichTextFragmentDoc}`;
export const SectionsAccordionFragmentDoc = gql`
    fragment SectionsAccordion on SectionsAccordion {
  id
  headline
  accordionLayout
  accordionSections {
    ... on AccordionContent {
      ...AccordionContent
    }
  }
}
    ${AccordionContentFragmentDoc}`;