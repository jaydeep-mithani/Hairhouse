import { FeaturedPostsProps } from '~/sections/featuredPosts/FeaturedPosts.types'

export const mock: FeaturedPostsProps = {
  title: 'Featured Posts',
  itemsPerRowDesktop: 3,
  viewLinkText: 'Read now',
  articles: [
    {
      title: 'How to reduce oil',
      url: '/blog/how-to-reduce-oil',
      author: {
        authorName: 'Jade Vincent',
      },
      blog: {
        title: 'New Love',
      },
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum..',
      thumbnail: {
        width: 1372,
        url: 'https://media.graphassets.com/MCol4BrrShqds4lSzpeg',
        height: 1408,
      },
      publishedAt: '2023-05-16T12:35:48.891043+00:00',
    },
    {
      title: 'How to control your curls',
      url: '/blog/how-to-control-your-curls',
      author: {
        authorName: 'Jade Vincent',
      },
      blog: {
        title: 'New Love',
      },
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum..',
      thumbnail: {
        width: 1372,
        url: 'https://media.graphassets.com/bIQvPB6WQmtWElPkvpTB',
        height: 1408,
      },
      publishedAt: '2023-05-16T12:35:48.891043+00:00',
    },
    {
      title: 'How to manage frizz',
      url: '/blog/how-to-manage-frizz',
      author: {
        authorName: 'Jade Vincent',
      },
      blog: {
        title: 'New Love',
      },
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum..',
      thumbnail: {
        width: 1372,
        url: 'https://media.graphassets.com/usvHfITjQ6yYM8uFrVIF',
        height: 1408,
      },
      publishedAt: '2023-05-16T12:35:48.891043+00:00',
    },
  ],
}
