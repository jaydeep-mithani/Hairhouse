import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type Section404Fragment = { __typename?: 'Section404', title?: string | null, subtitle?: string | null, buttons: Array<{ __typename?: 'Cta', url?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null, buttonText?: string | null }> };

export const Section404FragmentDoc = gql`
    fragment Section404 on Section404 {
  title
  subtitle
  buttons {
    url
    openInNewWindow
    ctaType
    buttonText
  }
}
    `;