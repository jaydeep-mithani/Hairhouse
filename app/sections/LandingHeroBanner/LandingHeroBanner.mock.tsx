import { LandingHeroBanner } from './LandingHeroBanner.types'

const imageURL = 'https://media.graphassets.com/Dxi9f11TKi6F4hkGG7Ww'
const logoURL = 'https://media.graphassets.com/yr7cM3mCRAi7zfw6jYpw'

export const mock: LandingHeroBanner = {
  id: 'clisium0y3pr70b2plin7rj48',
  title: 'Holiday House',
  bannerDesktopImage: {
    height: 555,
    width: 1300,
    url: imageURL,
    altText: null,
    __typename: 'Asset',
  },
  mobileImage: {
    height: 555,
    width: 1300,
    url: imageURL,
    altText: null,
    __typename: 'Asset',
  },
  tabletImage: {
    height: 555,
    width: 1300,
    url: imageURL,
    altText: null,
    __typename: 'Asset',
  },
  logoDesktopImage: {
    height: 38,
    width: 400,
    url: logoURL,
    altText: null,
    __typename: 'Asset',
  },
  logoMobileImage: {
    height: 38,
    width: 400,
    url: logoURL,
    altText: null,
    __typename: 'Asset',
  },
  logoTabletImage: {
    height: 38,
    width: 400,
    url: logoURL,
    altText: null,
    __typename: 'Asset',
  },
  menuBackground: 'black',
  links: [
    {
      buttonText: 'Gifts by price',
      url: 'dev-6',
      id: 'clisizpzw3qyg0b1luemhtliz',
      __typename: 'Cta',
    },
    {
      buttonText: 'Gifts by category',
      url: 'dev-6',
      id: 'clisizpzv3qye0b1lo15d0c8i',
      __typename: 'Cta',
    },
    {
      buttonText: 'Gifts by brands',
      url: 'dev-6',
      id: 'clisizpzv3qyc0b1l6o1fet25',
      __typename: 'Cta',
    },
    {
      buttonText: 'Gift cards',
      url: 'dev-6',
      id: 'clisizpzu3qya0b1lohyg3ijl',
      __typename: 'Cta',
    },
  ],
}
