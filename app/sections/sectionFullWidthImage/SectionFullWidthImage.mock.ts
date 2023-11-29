import { SectionFullWidthImageProps } from './SectionFullWidthImage.types'

const imageMimeType = 'image/jpeg'
const imageUrl = 'https://media.graphassets.com/7Z8S2Ci2SKWQlwKhRQmk'

export const mock: SectionFullWidthImageProps = {
  imageLayout: 'two_in_row',
  images: [
    {
      altText: null,
      url: imageUrl,
      size: 79828,
      mimeType: imageMimeType,
    },
    {
      altText: null,
      url: 'http://www.w3schools.com/html/mov_bbb.mp4',
      size: 1604429,
      mimeType: 'video/x-ms-wmv',
    },
  ],
}
