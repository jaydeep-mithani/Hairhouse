import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
export type ReviewStepsFragment = { __typename?: 'ReviewSteps', heading?: string | null, steps: Array<{ __typename?: 'AccordionContent', title?: string | null, content?: { __typename?: 'RichText', html: string } | null }> };

export const ReviewStepsFragmentDoc = gql`
    fragment ReviewSteps on ReviewSteps {
  heading
  steps {
    title
    content {
      html
    }
  }
}
    `;