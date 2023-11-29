import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type SectionAccountSignupCtaFragment = { __typename?: 'SectionAccountSignupCta', benefits: Array<string>, id: string, headline?: { __typename?: 'RichText', html: string } | null, signupButtons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> };

export const SectionAccountSignupCtaFragmentDoc = gql`
    fragment SectionAccountSignupCta on SectionAccountSignupCta {
  headline {
    html
  }
  signupButtons {
    buttonText
    ctaType
    openInNewWindow
    url
  }
  benefits
  id
}
    `;