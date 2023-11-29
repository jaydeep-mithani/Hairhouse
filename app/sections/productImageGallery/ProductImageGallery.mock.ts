import { ProductImageGalleryProps } from './ProductImageGallery.types'

const halo = 'https://cdn.shopify.com/s/files/1/0706/9679/6473/products/coverportrait.png?v=1681219733'

export const mock: ProductImageGalleryProps = {
  label: '',
  price: { amount: '28.95', currencyCode: 'AUD' },
  compareAtPrice: { amount: '31.95', currencyCode: 'AUD' },
  media: [
    {
      __typename: 'MediaImage',
      mediaContentType: 'IMAGE',
      alt: '',
      id: 'gid://shopify/MediaImage/33459296469305',
      image: {
        originalSrc: '',
        transformedSrc: '',
        src: '',
        height: 587,
        url: halo,
        width: 587,
      },
      previewImage: {
        originalSrc: '',
        transformedSrc: '',
        src: '',
        url: halo,
      },
    },
    {
      __typename: 'MediaImage',
      mediaContentType: 'IMAGE',
      alt: '',
      id: 'gid://shopify/MediaImage/33219024879929',
      image: {
        originalSrc: '',
        transformedSrc: '',
        src: '',
        height: 830,
        url: 'https://cdn.shopify.com/s/files/1/0706/9679/6473/products/media_7587512d-8130-4944-b829-3f41a32361fc.jpg?v=1679130226',
        width: 830,
      },
      previewImage: {
        originalSrc: '',
        transformedSrc: '',
        src: '',
        url: 'https://cdn.shopify.com/s/files/1/0706/9679/6473/products/media_7587512d-8130-4944-b829-3f41a32361fc.jpg?v=1679130226',
      },
    },
    {
      __typename: 'MediaImage',
      mediaContentType: 'IMAGE',
      alt: '',
      id: 'gid://shopify/MediaImage/33219024879929',
      image: {
        originalSrc: '',
        transformedSrc: '',
        src: '',
        height: 830,
        url: halo,
        width: 830,
      },
      previewImage: {
        originalSrc: '',
        transformedSrc: '',
        src: '',
        url: halo,
      },
    },
    {
      __typename: 'Video',
      mediaContentType: 'VIDEO',
      id: 'gid://shopify/Video/33803808211257',
      alt: '',
      previewImage: {
        originalSrc: '',
        transformedSrc: '',
        src: '',
        url: 'https://cdn.shopify.com/s/files/1/0706/9679/6473/files/preview_images/852f2b81e6e24e7993e3e2825722627c.thumbnail.0000000000.jpg?v=1684138105',
      },
      sources: [
        {
          mimeType: 'application/x-mpegURL',
          url: 'https://cdn.shopify.com/videos/c/vp/852f2b81e6e24e7993e3e2825722627c/852f2b81e6e24e7993e3e2825722627c.m3u8',
          format: '',
          height: 240,
          width: 450,
        },
        {
          mimeType: 'video/mp4',
          url: 'https://cdn.shopify.com/videos/c/vp/852f2b81e6e24e7993e3e2825722627c/852f2b81e6e24e7993e3e2825722627c.HD-720p-1.6Mbps-14625786.mp4',
          format: '',
          height: 240,
          width: 450,
        },
      ],
    },
  ],
}
