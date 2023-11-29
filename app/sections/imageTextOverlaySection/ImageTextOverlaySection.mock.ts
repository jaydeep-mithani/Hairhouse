import { ImageTextOverlaySectionProps } from '~/sections/imageTextOverlaySection/ImageTextOverlaySection.types'

export const mock: ImageTextOverlaySectionProps = {
  data: {
    title: 'Orders & Returns',
    bannerDesktopHeight: 328,
    bannerMobileHeight: 168,
    overlay: true,
    imageDesktop: {
      altText: 'banner image for desktop',
      image: {
        url: 'https://media.graphassets.com/imvblIWBTKiipOdpdgvq',
        width: 1920,
        height: 437,
      },
    },
    imageMobile: {
      altText: 'banner image for mobile',
      image: {
        url: 'https://media.graphassets.com/KsLI984RTQGDrTQr0hGl',
        width: 1500,
        height: 668,
      },
    },
  },
}
