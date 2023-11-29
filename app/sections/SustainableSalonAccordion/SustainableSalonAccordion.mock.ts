import { SustainableSalonAccordionProps } from './SustainableSalonAccordion.types'

const button = {
  ctaType: 'primary',
  buttonText: 'Find your nearest salon',
  url: 'findyournearestsalon',
}

const items = [
  'Hairhouse Airport West',
  'Hairhouse Bendigo',
  'Hairhouse Chadstone',
  'Hairhouse Chirnside Park',
  'Hairhouse Cranbourne',
  'Hairhouse Doncaster',
  'Hairhouse Eastland',
  'Hairhouse Epping',
]
export const mock: SustainableSalonAccordionProps = {
  id: 'clj2n4efo2qkl0b1dsezdh1re',
  title: 'Participating stores',
  logo: {
    altText: 'Brand Logo',
    height: 56,
    width: 277,
    url: 'https://media.graphassets.com/Lt9jtD0USQa1ioc21WV6',
  },
  accordionItems: [
    {
      title: 'VIC participating stores',
      items,
      button,
    },
    {
      title: 'QLD participating stores',
      items,
      button,
    },
    {
      title: 'NSW participating stores',
      items,
      button,
    },
    {
      title: 'SA participating stores',
      items,
      button,
    },
    {
      title: 'WA participating stores',
      items,
      button,
    },
    {
      title: 'ACT participating stores',
      items,
      button,
    },
  ],
}
