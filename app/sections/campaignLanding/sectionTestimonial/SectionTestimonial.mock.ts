import { SectionTestimonialProps } from './SectionTestimonial.types'

const postedDate = 'Posted 11 hours ago'
const description = {
  text: 'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum...',
}
const expertName = 'Lily Brown'
const button = {
  buttonText: 'Read now',
  buttonTheme: 'primary',
  url: '/',
}
const url = 'https://media.graphassets.com/avEdPJYUR3KkS412MTFe'

export const campaignLandingTestimonialsData: SectionTestimonialProps = {
  __typename: 'SectionTestimonial',
  heading: 'The Cut',
  bgColor: { hex: '#2d2d2d' },
  testimonials: [
    {
      topLeftBoxText: 'Expert Advice',
      image: {
        url,
        altText: 'user 1',
      },
      name: 'Bond Builders: Everything You Need To Know',
      id: '1',
      postedDate,
      expertName,
      description,
      button,
    },
    {
      topLeftBoxText: 'Trending Now',
      image: {
        url,
        altText: 'user 2',
      },
      name: 'The Shower Series : Monique Riley',
      id: '2',
      postedDate,
      expertName,
      description,
      button,
    },
    {
      topLeftBoxText: 'Trending Now',
      image: {
        url,
        altText: 'user 3',
      },
      name: 'House Newness : Introducing Maria Nila',
      id: '3',
      postedDate,
      expertName,
      description,
      button,
    },
  ],
}
