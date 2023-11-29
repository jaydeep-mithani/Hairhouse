import { Page404Props } from './Page404.types'

export const mock: Page404Props = {
  title: '404',
  subtitle: '"PAGE NOT FOUND"',
  buttons: [
    {
      buttonText: 'HomePage',
      url: 'dev-6',
      openInNewWindow: false,
      ctaType: 'primary',
    },
    {
      buttonText: 'Brands',
      url: 'dev-6',
      openInNewWindow: false,
      ctaType: 'primary',
    },
    {
      buttonText: 'Help Centre',
      url: 'dev-6',
      openInNewWindow: false,
      ctaType: 'primary',
    },
  ],
}
