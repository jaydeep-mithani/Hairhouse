import { ArticleGridItemProps } from './ArticleGridItem.types'

export const mock: ArticleGridItemProps = {
  article: {
    author: {
      authorName: 'Jade Vincent',
    },
    thumbnail: {
      altText: null,
      width: 1372,
      url: 'https://media.graphassets.com/O6GkcMVZTRqNQSJNp7aP',
      height: 1408,
    },
    blog: {
      title: 'New love',
      url: 'blog/new-love',
    },
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum...',
    title: 'How to manage frizz',
    publishedAt: '2023-06-26T09:37:18.650431+00:00',
    publishDate: '2023-06-26',
    url: 'blog/new-love/how-to-manage-frizz',
  },
  buttonText: 'Read now',
}
