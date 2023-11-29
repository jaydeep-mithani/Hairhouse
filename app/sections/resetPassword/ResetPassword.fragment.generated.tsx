import * as Types from '../../../graphql/types';
import gql from 'graphql-tag';

export type ResetPasswordElementFragment = { __typename?: 'ResetPassword', title?: string | null, subtitle?: { __typename?: 'RichText', text: string, html: string } | null };

export const ResetPasswordElementFragmentDoc = gql`
fragment ResetPasswordElement on ResetPassword {
  title
  subtitle {
    text
    html
  }
}`;