import * as Types from '../../../../graphql/types';

import gql from 'graphql-tag';
export type SectionGiftFinderFragment = { __typename?: 'SectionGiftFinder', id: string, heading?: string | null, preezieGuideKey?: string | null, questionTitle?: string | null, backgroundColor?: { __typename?: 'Color', hex: any } | null, image?: { __typename?: 'Asset', altText?: string | null, width?: number | null, height?: number | null, url: string } | null, questions: Array<{ __typename?: 'GiftFinderQuestion', id: string, question?: string | null, options: Array<{ __typename?: 'ModuleIconAndText', id: string, adminTitle?: string | null, icon?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null }> }> };

export type GiftFinderQuestionFragment = { __typename?: 'GiftFinderQuestion', id: string, question?: string | null, options: Array<{ __typename?: 'ModuleIconAndText', id: string, adminTitle?: string | null, icon?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null }> };

export const GiftFinderQuestionFragmentDoc = gql`
    fragment GiftFinderQuestion on GiftFinderQuestion {
  id
  question
  options {
    id
    icon {
      altText
      height
      width
      url
    }
    adminTitle
  }
}
    `;
export const SectionGiftFinderFragmentDoc = gql`
    fragment SectionGiftFinder on SectionGiftFinder {
  id
  heading
  backgroundColor {
    hex
  }
  image {
    altText
    width
    height
    url
  }
  preezieGuideKey
  questionTitle
  questions {
    ... on GiftFinderQuestion {
      ...GiftFinderQuestion
    }
  }
}
    ${GiftFinderQuestionFragmentDoc}`;