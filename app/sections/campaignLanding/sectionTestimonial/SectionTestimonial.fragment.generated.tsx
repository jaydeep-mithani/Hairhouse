import * as Types from '../../../../graphql/types';

import gql from 'graphql-tag';
export type SectionTestimonialFragment = { __typename?: 'SectionTestimonial', id: string, heading?: string | null, bgColor?: { __typename?: 'Color', hex: any } | null, testimonials: Array<{ __typename?: 'BlogTile', id: string, name?: string | null, expertName?: string | null, topLeftBoxText?: string | null, postedDate?: any | null, description?: { __typename?: 'RichText', text: string } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, button?: { __typename?: 'Cta', id: string, url?: string | null, buttonText?: string | null } | null }> };

export type TestimonialsFragment = { __typename?: 'BlogTile', id: string, name?: string | null, expertName?: string | null, topLeftBoxText?: string | null, postedDate?: any | null, description?: { __typename?: 'RichText', text: string } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, button?: { __typename?: 'Cta', id: string, url?: string | null, buttonText?: string | null } | null };

export const TestimonialsFragmentDoc = gql`
    fragment Testimonials on BlogTile {
  id
  name
  description {
    text
  }
  expertName
  topLeftBoxText
  postedDate
  image {
    altText
    height
    width
    url
  }
  button {
    id
    url
    buttonText
  }
}
    `;
export const SectionTestimonialFragmentDoc = gql`
    fragment SectionTestimonial on SectionTestimonial {
  id
  heading
  bgColor: backgroundColor {
    hex
  }
  testimonials {
    ... on BlogTile {
      ...Testimonials
    }
  }
}
    ${TestimonialsFragmentDoc}`;