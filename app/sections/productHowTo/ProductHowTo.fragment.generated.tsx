import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ProductHowToFragment = { __typename?: 'ProductHowTo', headline?: { __typename?: 'RichText', html: string } | null, content?: { __typename?: 'RichText', html: string } | null, howToAsset1?: { __typename?: 'Asset', width?: number | null, height?: number | null, size?: number | null, mimeType?: string | null, altText?: string | null, fileName: string, url: string } | null, howToAsset2?: { __typename?: 'Asset', width?: number | null, height?: number | null, size?: number | null, mimeType?: string | null, altText?: string | null, fileName: string, url: string } | null };

export const ProductHowToFragmentDoc = gql`
    fragment ProductHowTo on ProductHowTo {
  headline {
    html
  }
  content {
    html
  }
  howToAsset1 {
    width
    height
    size
    mimeType
    altText
    fileName
    url
  }
  howToAsset2 {
    width
    height
    size
    mimeType
    altText
    fileName
    url
  }
}
    `;