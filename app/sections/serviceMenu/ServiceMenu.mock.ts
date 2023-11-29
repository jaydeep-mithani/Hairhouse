import { CtaType } from 'graphql/types'

import { ServiceMenuProps } from './ServicesMenu.types'

const serviceMenuDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin euismod elementum. In hac habitasse platea dictumst.'
const serviceMenuTilesButtonText = 'Book Appointment'
const serviceMenuTilesButton = {
  buttonText: serviceMenuTilesButtonText,
  url: null,
  ctaType: CtaType.Primary,
  openInNewWindow: false,
}

export const serviceMenuMock: ServiceMenuProps = {
  title: 'Service Menu',
  salonserviceDescription:
    'All services may incur extra charges for longer/thicker hair or when additional appointment time is required.Prices are subject to the listed salons while other Hairhouse salons may have varying prices on these services.',
  policyLink: {
    linkText: 'Salon Booking Appointment Policy',
    url: 'policy',
    openInNewWindow: true,
    __typename: 'Link',
  },
  servicesMenu: [
    {
      title: 'Styling Service',
      description: serviceMenuDescription,
      tiles: [
        {
          name: 'Express Styling',
          description:
            'Want your hair to look amazing but are short on time? Our expert stylists can create event-ready looks in little time on clean, dry hair. Choose from six looks: The Pony, Space Buns, Half-Up, Express Smooth, Express Mermaid or Express Wave  this could be a tight url glamorous Hollywood wave or a beachy vibe with texture.',
          subHeading: '$30',
          fromText: 'STYLING',
          salonNote: null,
          button: serviceMenuTilesButton,
          __typename: 'SalonService',
        },
        {
          name: 'Blow Dry',
          description:
            'From an express Blow Dry during your lunch break, through to an indulgent full-bodied blow out or sleek, event-ready style, we have plenty of blow drying options to suit all hair needs and fit any time frame! Service includes a shampoo and condition tailored to your hair type.',
          subHeading: '$50',
          fromText: 'STYLING',
          salonNote: null,
          button: {
            buttonText: serviceMenuTilesButtonText,
            url: null,
            ctaType: null,
            openInNewWindow: false,
            __typename: 'Cta',
          },
          __typename: 'SalonService',
        },
      ],
      __typename: 'ServicesMenu',
    },
    {
      title: 'Cutting Services',
      description: serviceMenuDescription,
      tiles: [
        {
          name: 'Womens Cut & Finish',
          description:
            'Hairhouse Salons offer cutting services to achieve your desired style. Receive a comprehensive consultation to discuss the best style for you, finished with a dry off and at-home maintenance advice.',
          subHeading: '$55',
          fromText: 'Cutting',
          salonNote: null,
          button: serviceMenuTilesButton,
          __typename: 'SalonService',
        },
        {
          name: 'Womens Cut & Blow Dry',
          description:
            'Cut and blow dry for short-medium length hair. Service includes a shampoo and condition, as well as a blow dry or diffusion to finish.',
          subHeading: '$65',
          fromText: 'Cutting',
          salonNote: null,
          button: serviceMenuTilesButton,
          __typename: 'SalonService',
        },
        {
          name: 'Mens Cut & Style',
          description: "Cut and style for men - Hairhouse stylists are also experts in men's styling.",
          subHeading: '$40',
          fromText: 'cutting',
          salonNote: null,
          button: serviceMenuTilesButton,
          __typename: 'SalonService',
        },
        {
          name: 'Children Under 12 Cut',
          description: 'Haircut for children under 12 on Monday, Tuesday and Wednesdays only',
          subHeading: '$25',
          fromText: 'cutting',
          salonNote: null,
          button: serviceMenuTilesButton,
          __typename: 'SalonService',
        },
        {
          name: 'Teens Cut & Blow Dry',
          description: 'Haircut and blow dry available for under 18s',
          subHeading: '$55',
          fromText: 'cutting',
          salonNote: null,
          button: serviceMenuTilesButton,
          __typename: 'SalonService',
        },
      ],
      __typename: 'ServicesMenu',
    },
    {
      title: 'Colour Services',
      description: serviceMenuDescription,
      tiles: [
        {
          name: '¼ Highlights',
          description:
            'Package includes stunning, on-trend face-framing highlights and toning gloss - perfect for 1st time colour, in-between your regular ombre/balayage, blend those 1st greys, or to just brighten and lighten your look.',
          subHeading: '$99',
          fromText: 'COLOUR',
          salonNote: null,
          button: serviceMenuTilesButton,
          __typename: 'SalonService',
        },
        {
          name: 'All Over Colour',
          description:
            'Hairhouse Salons provide the latest in professional colour products, shades, and techniques. From root touch-ups to highlights, through to complete colour transformations, our Hairhouse Stylists will tailor a formulation and technique to give you the perfect colour.',
          subHeading: 'Short $80 | Medium $95 | Long $110',
          fromText: 'COLOUR',
          salonNote: null,
          button: serviceMenuTilesButton,
          __typename: 'SalonService',
        },
      ],
      __typename: 'ServicesMenu',
    },
  ],
}
