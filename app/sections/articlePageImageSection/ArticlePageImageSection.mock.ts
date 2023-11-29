import { ArticlePageImageSectionProps } from '~/sections/articlePageImageSection/ArticlePageImageSection.types'

export const mock: ArticlePageImageSectionProps = {
  data: {
    imageLayout: 'two_per_row',
    images: [
      {
        altText: null,
        height: 1936,
        url: 'https://media.graphassets.com/jPhg1FpxTZumZaIEu4fe',
        width: 1524,
      },
      {
        altText: null,
        height: 1936,
        url: 'https://media.graphassets.com/wTc6tdDRliCq6XpI019U',
        width: 1520,
      },
    ],
  },
}

export const mock2: ArticlePageImageSectionProps = {
  data: {
    imageLayout: 'one_per_row',
    images: [
      {
        altText: null,
        height: 1808,
        url: 'https://media.graphassets.com/0uec6vWoSYuc5fdx1twQ',
        width: 3136,
      },
    ],
  },
}
