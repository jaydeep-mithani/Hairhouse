import { SectionBlogGridProps } from './SectionBlogGrid.types'

export const mock: SectionBlogGridProps = {
  title: 'The Cut',
  enableDarkBackground: true,
  itemsPerRowDesktop: 3,
  buttonText: 'Read now',
  featuredArticles: [
    {
      author: {
        authorName: 'Jade Vincent',
      },
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum...',
      title: 'Bond Builders: Everything You Need To Know',
      publishedAt: '2023-07-14T12:56:42.676558+00:00',
      publishDate: '2023-07-14',
      url: 'blog/new-love/bond-builders-everything-you-need-to-know',
      thumbnail: {
        height: 1613,
        altText: null,
        width: 1513,
        url: 'https://media.graphassets.com/x0zAaMqrQn6bvhJp8Ulq',
      },
      blog: {
        title: 'New love',
        url: 'blog/new-love',
      },
    },
    {
      author: {
        authorName: 'Jade Vincent',
      },
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum...',
      title: 'The Shower Series : Monique Riley',
      publishedAt: '2023-07-14T12:56:42.676558+00:00',
      publishDate: '2023-07-14',
      url: 'blog/new-love/the-shower-series-monique-riley',
      thumbnail: {
        height: 1613,
        altText: null,
        width: 1513,
        url: 'https://media.graphassets.com/2j8TdKXEQzKqPEq2kch0',
      },
      blog: {
        title: 'New love',
        url: 'blog/new-love',
      },
    },
    {
      author: {
        authorName: 'Jade Vincent',
      },
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum...',
      title: 'House Newness : Introducing Maria Nila',
      publishedAt: '2023-07-14T12:56:42.676558+00:00',
      publishDate: '2023-07-14',
      url: 'blog/new-love/house-newness-introducing-maria-nila',
      thumbnail: {
        height: 1613,
        altText: null,
        width: 1513,
        url: 'https://media.graphassets.com/kSD3jcwPS56g9tcD03Rl',
      },
      blog: {
        title: 'New love',
        url: 'blog/new-love',
      },
    },
  ],
}
