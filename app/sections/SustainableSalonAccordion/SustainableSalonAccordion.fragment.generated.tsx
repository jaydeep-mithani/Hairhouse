import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionAccordionWithListFragment = { __typename?: 'SectionAccordionWithList', title?: string | null, logo?: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } | null, accordionItems: Array<{ __typename?: 'AccordionContentWithButton', title?: string | null, items: Array<string>, button?: { __typename?: 'Cta', ctaType?: Types.CtaType | null, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null } | null }> };

export type AssetFragment = { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string };

export type AccordionContentWithButtonFragment = { __typename?: 'AccordionContentWithButton', title?: string | null, items: Array<string>, button?: { __typename?: 'Cta', ctaType?: Types.CtaType | null, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null } | null };

export type SustainableSalonAccordionCtaFragment = { __typename?: 'Cta', ctaType?: Types.CtaType | null, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null };

export const AssetFragmentDoc = gql`
    fragment Asset on Asset {
  altText
  height
  size
  width
  url
}
    `;
export const SustainableSalonAccordionCtaFragmentDoc = gql`
    fragment SustainableSalonAccordionCta on Cta {
  ctaType
  buttonText
  url
  openInNewWindow
}
    `;
export const AccordionContentWithButtonFragmentDoc = gql`
    fragment AccordionContentWithButton on AccordionContentWithButton {
  title
  items
  button {
    ... on Cta {
      ...SustainableSalonAccordionCta
    }
  }
}
    ${SustainableSalonAccordionCtaFragmentDoc}`;
export const SectionAccordionWithListFragmentDoc = gql`
    fragment SectionAccordionWithList on SectionAccordionWithList {
  title
  logo {
    ... on Asset {
      ...Asset
    }
  }
  accordionItems {
    ... on AccordionContentWithButton {
      ...AccordionContentWithButton
    }
  }
}
    ${AssetFragmentDoc}
${AccordionContentWithButtonFragmentDoc}`;