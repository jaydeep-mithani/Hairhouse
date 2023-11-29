import { CtaType, HeroLayout } from 'graphql/types'

import { ImageWithCardProps } from './ImageWithCard.types'

export const leftCardMock: ImageWithCardProps = {
  subtitle: 'Quiz',
  title: 'Find your perfect haircare products',
  copy: "Not sure where to start? Take the product finder quiz below and we'll happily point you in the right direction.",
  layout: HeroLayout.TextBlockLeft,
  desktopImg: {
    altText: 'desktop',
    url: 'https://media.graphassets.com/JgkeVVTnQGXRgBHTVxgP',
    width: 1440,
    height: 465,
  },
  mobileImage: {
    altText: 'mobile',
    url: 'https://media.graphassets.com/v7fQSMnwTcWQDjuwAOPG',
    width: 375,
    height: 375,
  },
  ctaButton: [
    {
      buttonText: 'Take Quiz Now',
      url: 'www.google.com',
      ctaType: CtaType.Secondary,
      openInNewWindow: true,
    },
  ],
}

export const rightCardMock: ImageWithCardProps = {
  subtitle: 'Quiz',
  title: 'Find your perfect haircare products',
  copy: "Not sure where to start? Take the product finder quiz below and we'll happily point you in the right direction.",
  layout: HeroLayout.TextBlockRight,
  desktopImg: {
    altText: 'desktop',
    url: 'https://media.graphassets.com/ifjizYghTzyN7c6I458j',
    width: 1440,
    height: 465,
  },
  mobileImage: {
    altText: 'mobile',
    url: 'https://media.graphassets.com/v7fQSMnwTcWQDjuwAOPG',
    width: 375,
    height: 375,
  },
  ctaButton: [
    {
      buttonText: 'Take Quiz Now',
      url: '',
      ctaType: CtaType.Secondary,
      openInNewWindow: true,
    },
  ],
}

export const mock: ImageWithCardProps = {
  subtitle: 'COMMUNITY',
  title: 'Hairhouse Bondi Junction is a sustainable salon',
  copy: 'We rescue valuable salon resources from landfill and find repurposing solutions that benefit the environment and give back to the community!',
  layout: HeroLayout.TextBlockRight,
  desktopImg: {
    altText: 'store-landing',
    url: 'https://media.graphassets.com/wYBZAFcTQCuDmuS2pQYA',
    width: 1440,
    height: 465,
  },
  mobileImage: {
    altText: 'store-mob',
    url: 'https://media.graphassets.com/cC48TECsTVyYpJj1HK74',
    width: 375,
    height: 375,
  },
  ctaButton: [
    {
      buttonText: 'Find out more',
      url: '',
      ctaType: CtaType.Secondary,
      openInNewWindow: true,
    },
  ],
}
