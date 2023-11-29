import { CtaType, ImagePosition, TextAlignment } from 'graphql/types'
import { RolesProps } from './Roles.types'

export const mock: RolesProps = {
  heading: 'Find your place',
  bkgColor: {
    hex: '#f7f7f7',
  },
  positions: [
    {
      heading: 'Apprentice hairdresser',
      image: {
        altText: null,
        url: 'https://media.graphassets.com/wTREfPd6SPLXp7UsZWjr',
        width: 208,
        height: 236,
      },
      text: {
        html: '<p>Lorem ipsum dolor sit amet consectetur. Risus sit est a non euismod. </p>',
      },
      contentAlignment: TextAlignment.Left,
      imagePosition: ImagePosition.Right,
      imageWidth: '207',
      button: {
        buttonText: 'View position',
        ctaType: CtaType.Link,
        openInNewWindow: false,
      },
    },
    {
      heading: 'Hairdresser',
      image: {
        altText: null,
        url: 'https://media.graphassets.com/8k52ozY6SaipmvjzAZeN',
        width: 207,
        height: 236,
      },
      text: {
        html: '<p>Lorem ipsum dolor sit amet consectetur. Risus sit est a non euismod. </p>',
      },
      contentAlignment: TextAlignment.Left,
      imagePosition: ImagePosition.Right,
      imageWidth: '207',
      button: {
        buttonText: 'View position',
        ctaType: CtaType.Link,
        openInNewWindow: false,
      },
    },
    {
      heading: 'Assistance',
      image: {
        altText: null,
        url: 'https://media.graphassets.com/LnMorBznTTC6MkRhNvlL',
        width: 207,
        height: 236,
      },
      text: {
        html: '<p>Lorem ipsum dolor sit amet consectetur. Risus sit est a non euismod. </p>',
      },
      contentAlignment: TextAlignment.Left,
      imagePosition: ImagePosition.Right,
      imageWidth: '207',
      button: {
        buttonText: 'View position',
        ctaType: CtaType.Link,
        openInNewWindow: false,
      },
    },
    {
      heading: 'Manager',
      image: {
        altText: null,
        url: 'https://media.graphassets.com/E6wRgcXzSJCA3eBUcMwl',
        width: 208,
        height: 236,
      },
      text: {
        html: '<p>Lorem ipsum dolor sit amet consectetur. Risus sit est a non euismod. </p>',
      },
      contentAlignment: TextAlignment.Left,
      imagePosition: ImagePosition.Right,
      imageWidth: '207',
      button: {
        buttonText: 'View position',
        ctaType: CtaType.Link,
        openInNewWindow: false,
      },
    },
    {
      heading: 'Body Piercer',
      image: {
        altText: null,
        url: 'https://media.graphassets.com/MjUuDsX4TT6WCdZRGSWY',
        width: 207,
        height: 236,
      },
      text: {
        html: '<p>Lorem ipsum dolor sit amet consectetur. Risus sit est a non euismod. </p>',
      },
      contentAlignment: TextAlignment.Left,
      imagePosition: ImagePosition.Right,
      imageWidth: '207',
      button: {
        buttonText: 'View position',
        ctaType: CtaType.Link,
        openInNewWindow: false,
      },
    },
  ],
}
