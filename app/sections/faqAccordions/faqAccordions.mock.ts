import { AccordionElementProps } from './faqAccordions.types'

export const mock: AccordionElementProps = {
  data: {
    title: 'Frequently Asked Questions',
    layout: 'vertical',
    accordions: [
      {
        title: 'What services do you offer?',
        description: {
          text: 'We are a full-service salon, offering cuts, colour and styling. We also do piercings, and our expert team members can help you find the best professional haircare products for you.',
        },
      },
    ],
  },
}
