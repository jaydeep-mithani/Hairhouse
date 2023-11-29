import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ArticlePageLinksFragment = { __typename?: 'ArticlePage', linksSection?: { __typename?: 'ArticlePageLinksSection', title?: string | null, links: Array<{ __typename?: 'LinkPageSectionOrUrl', link?: string | null, linkText?: string | null }> } | null };

export const ArticlePageLinksFragmentDoc = gql`
    fragment ArticlePageLinks on ArticlePage {
  linksSection {
    links {
      link
      linkText
    }
    title
  }
}
    `;