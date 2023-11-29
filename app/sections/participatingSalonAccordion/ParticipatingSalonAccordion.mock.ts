import { CtaType } from 'graphql/types.generated'
import { ParticipatingSalonAccordionProps } from './ParticipatingSalonAccordion.types'

const ctaPrimary = CtaType.Primary
const ctaSecondary = CtaType.Secondary
const address = 'Shop 9 Myer City Centre Cnr Swift &, David St, Albury NSW 2640, Australia'
const contentURL = 'https://media.graphassets.com/JhIvyNvLRwGdwt5iKKaX'
const linkTextPrimary = '(02) 9389 6874'
const linkTextSecodary = 'Get Directions'
const buttonTextPrimary = 'Store Details'
const buttonTextSecondary = 'Book Appointment'
const heading = 'Bondi Junction'

export const mock: ParticipatingSalonAccordionProps = {
  heading: 'Participating Stores',
  accordionContent: [
    {
      title: 'NSW Stores',
      content: [
        {
          heading: 'Albury',
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: CtaType.Primary,
              buttonText: buttonTextPrimary,
              url: 'storedetails',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: CtaType.Secondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
        {
          heading,
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'directions',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: ctaPrimary,
              buttonText: buttonTextPrimary,
              url: 'storedetails',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: ctaSecondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
      ],
      __typename: 'AccordionContentWithLogoAndButton',
    },
    {
      title: 'QLD Stores',
      content: [
        {
          heading: 'Albury',
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: ctaPrimary,
              buttonText: buttonTextPrimary,
              url: 'store',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: ctaSecondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
        {
          heading,
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'directions',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: ctaPrimary,
              buttonText: buttonTextPrimary,
              url: 'storedetails',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: ctaSecondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
      ],
      __typename: 'AccordionContentWithLogoAndButton',
    },
    {
      title: 'SA Stores',
      content: [
        {
          heading: 'Albury',
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: ctaPrimary,
              buttonText: buttonTextPrimary,
              url: 'storedetails',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: ctaSecondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
        {
          heading,
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: ctaPrimary,
              buttonText: buttonTextPrimary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: ctaSecondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
      ],
      __typename: 'AccordionContentWithLogoAndButton',
    },
    {
      title: 'SA Stores1',
      content: [
        {
          heading: 'Albury',
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: ctaPrimary,
              buttonText: buttonTextPrimary,
              url: 'storedetails',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: ctaSecondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
        {
          heading,
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: ctaPrimary,
              buttonText: buttonTextPrimary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: ctaSecondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
      ],
      __typename: 'AccordionContentWithLogoAndButton',
    },
    {
      title: 'SA Stores2',
      content: [
        {
          heading: 'Albury',
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: ctaPrimary,
              buttonText: buttonTextPrimary,
              url: 'storedetails',
              openInNewWindow: false,
              __typename: 'Cta',
            },
            {
              ctaType: ctaSecondary,
              buttonText: buttonTextSecondary,
              url: 'book',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
        {
          heading,
          address,
          logo: {
            altText: null,
            height: 56,
            size: 3130,
            width: 277,
            url: contentURL,
            __typename: 'Asset',
          },
          linkUrl: [
            {
              linkText: linkTextPrimary,
              url: 'phone',
              openInNewWindow: false,
              __typename: 'Link',
            },
            {
              linkText: linkTextSecodary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Link',
            },
          ],
          button: [
            {
              ctaType: null,
              buttonText: buttonTextPrimary,
              url: 'direction',
              openInNewWindow: false,
              __typename: 'Cta',
            },
          ],
          __typename: 'StoreItem',
        },
      ],
      __typename: 'AccordionContentWithLogoAndButton',
    },
  ],
}
