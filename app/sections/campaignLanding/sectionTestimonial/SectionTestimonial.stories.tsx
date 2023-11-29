import { Meta, StoryFn } from '@storybook/react'

import { SectionTestimonial } from './SectionTestimonial'
import { campaignLandingTestimonialsData } from './SectionTestimonial.mock'
import { SectionTestimonialProps } from './SectionTestimonial.types'

export default {
  title: 'Sections/SectionTestimonial',
} as Meta

export const story: StoryFn<SectionTestimonialProps> = (args) => {
  return <SectionTestimonial {...args} />
}

story.storyName = 'Default'
story.args = campaignLandingTestimonialsData
