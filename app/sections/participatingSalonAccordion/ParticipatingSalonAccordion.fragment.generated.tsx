import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type StoreItemFragment = { __typename?: 'StoreItem', heading?: string | null, address?: string | null, logo?: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } | null, linkUrl: Array<{ __typename?: 'Link', linkText: string, url?: string | null, openInNewWindow?: boolean | null }>, button: Array<{ __typename?: 'Cta', ctaType?: Types.CtaType | null, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null }> };

export type AccordionContentWithLogoAndButtonFragment = { __typename?: 'AccordionContentWithLogoAndButton', title?: string | null, content: Array<{ __typename?: 'StoreItem', heading?: string | null, address?: string | null, logo?: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } | null, linkUrl: Array<{ __typename?: 'Link', linkText: string, url?: string | null, openInNewWindow?: boolean | null }>, button: Array<{ __typename?: 'Cta', ctaType?: Types.CtaType | null, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null }> }> };

export type SectionAccordionWithStoreFragment = { __typename?: 'SectionAccordionWithStore', heading?: string | null, accordionContent: Array<{ __typename?: 'AccordionContentWithLogoAndButton', title?: string | null, content: Array<{ __typename?: 'StoreItem', heading?: string | null, address?: string | null, logo?: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } | null, linkUrl: Array<{ __typename?: 'Link', linkText: string, url?: string | null, openInNewWindow?: boolean | null }>, button: Array<{ __typename?: 'Cta', ctaType?: Types.CtaType | null, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null }> }> }> };

export const StoreItemFragmentDoc = gql`
    fragment StoreItem on StoreItem {
  heading
  address
  logo {
    altText
    height
    size
    width
    url
  }
  linkUrl {
    linkText
    url
    openInNewWindow
  }
  button {
    ctaType
    buttonText
    url
    openInNewWindow
  }
}
    `;
export const AccordionContentWithLogoAndButtonFragmentDoc = gql`
    fragment AccordionContentWithLogoAndButton on AccordionContentWithLogoAndButton {
  title
  content {
    ... on StoreItem {
      ...StoreItem
    }
  }
}
    ${StoreItemFragmentDoc}`;
export const SectionAccordionWithStoreFragmentDoc = gql`
    fragment SectionAccordionWithStore on SectionAccordionWithStore {
  heading
  accordionContent {
    ... on AccordionContentWithLogoAndButton {
      ...AccordionContentWithLogoAndButton
    }
  }
}
    ${AccordionContentWithLogoAndButtonFragmentDoc}`;