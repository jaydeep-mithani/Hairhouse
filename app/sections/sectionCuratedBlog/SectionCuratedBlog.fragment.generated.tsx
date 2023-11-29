import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionCuratedBlogFragment = { __typename?: 'SectionCuratedBlog', id: string, heading?: string | null, blogItem: Array<{ __typename?: 'BlogTile', id: string, name?: string | null, description?: { __typename?: 'RichText', text: string } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, button?: { __typename?: 'Cta', url?: string | null, buttonText?: string | null, id: string } | null }> };

export type CuratedBlogTileFragment = { __typename?: 'BlogTile', id: string, name?: string | null, description?: { __typename?: 'RichText', text: string } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, button?: { __typename?: 'Cta', url?: string | null, buttonText?: string | null, id: string } | null };

export const CuratedBlogTileFragmentDoc = gql`
    fragment CuratedBlogTile on BlogTile {
  id
  name
  description {
    text
  }
  image {
    altText
    height
    width
    url
  }
  button {
    url
    buttonText
    id
  }
}
    `;
export const SectionCuratedBlogFragmentDoc = gql`
    fragment SectionCuratedBlog on SectionCuratedBlog {
  id
  heading
  blogItem {
    ... on BlogTile {
      ...CuratedBlogTile
    }
  }
}
    ${CuratedBlogTileFragmentDoc}`;