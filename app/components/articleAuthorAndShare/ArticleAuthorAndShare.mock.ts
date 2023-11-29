import { ArticleAuthorAndShareProps } from './ArticleAuthorAndShare.types'

export const mock: ArticleAuthorAndShareProps = {
  author: {
    authorName: 'Jade Vincent',
    authorPosition: 'Editor & Copywriter at Hairhouse',
    authorImage: {
      altText: null,
      height: 400,
      url: 'https://media.graphassets.com/Rs9IrTbQIKSF3pVysu2P',
      width: 400,
    },
  },
  shareIcons: {
    enableShare: true,
    title: 'SHARE',
    options: ['Twitter', 'Facebook', 'Pinterest'],
    pageTitle: 'The at-home styling treatment you must try for smooth hair',
    pageUrl: 'blog/new-love/the-at-home-styling-treatment-you-must-try-for-smooth-hair',
    imageUrl: 'https://media.graphassets.com/bZLiOBd0Qo2hCMKBNLG7',
  },
}
