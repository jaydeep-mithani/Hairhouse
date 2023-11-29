import { CtaType } from 'graphql/types.generated'

import { BrandLogoGridProps } from './BrandCard.types'

export const mockData: BrandLogoGridProps = {
  subtext: 'Exclusive professional brands',
  hdText: 'Stocking over 260+ haircare brands',
  brandsBrands: [
    {
      brandName: 'Revlon',
      brandLogo: {
        url: 'https://media.graphassets.com/kHyzbPFqTJSPkkanyiBn',
      },
      brandUrl: 'dev-6',
    },
    {
      brandName: 'ghd',
      brandLogo: {
        url: 'https://media.graphassets.com/tByQ2uNzTjK0JX745Jwn',
      },
      brandUrl: 'ghd',
    },
    {
      brandName: 'kevin.murphy',
      brandLogo: {
        url: 'https://media.graphassets.com/wpNTHAs7TSyUCPujUlf1',
      },
      brandUrl: 'kevlin',
    },
    {
      brandName: 'Eleven Australia',
      brandLogo: {
        url: 'https://media.graphassets.com/6aRpKrdWQsyHQGbD1hBg',
      },
      brandUrl: 'eleven',
    },
  ],
  cta: {
    id: 'clik8ewl42eel0b2qtzo3v4ie',
    buttonText: 'Explore All',
    ctaType: CtaType.Secondary,
    url: 'hom',
  },
}
