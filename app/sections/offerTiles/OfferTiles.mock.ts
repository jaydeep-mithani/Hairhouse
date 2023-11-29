import { CtaType } from 'graphql/types'

import { OfferTilesProps } from './OfferTiles.types'

export const mock: OfferTilesProps = {
  name: 'Home Page Offer Tiles',
  offerItems: [
    {
      heading: 'Up to 20% off GHD',
      description: 'T&Cs apply',
      image: {
        altText: null,
        url: 'https://media.graphassets.com/X7Xbeb11RpOAyWZ40r66',
        width: 370,
        height: 370,
      },
      buttonText: 'Shop now',
      url: 'shopnow',
      topLeftBoxText: 'Up to 20% off',
    },
    {
      heading: '30% off Elchim Dryers',
      description: 'T&Cs apply',
      image: {
        altText: null,
        url: 'https://media.graphassets.com/iPllbxtTQQuKnyhnFk12',
        width: 370,
        height: 370,
      },
      buttonText: 'Shop now',
      url: 'shopnow',
      topLeftBoxText: '30% off',
    },
    {
      heading: 'Up to 30% off Halo',
      description: 'T&Cs apply',
      image: {
        altText: null,
        url: 'https://media.graphassets.com/QOwihf5NQVCtdEFDx5sU',
        width: 370,
        height: 370,
      },
      buttonText: 'Shop now',
      url: 'shopnow',
      topLeftBoxText: '30% off',
    },
  ],
  cta: {
    buttonText: 'View All Promotions',
    ctaType: CtaType.Secondary,
    url: 'promotions',
    openInNewWindow: false,
  },
}
