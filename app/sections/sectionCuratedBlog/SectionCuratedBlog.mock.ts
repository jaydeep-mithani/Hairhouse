import { SectionCuratedBlogProps } from './SectionCuratedBlog.types'

export const mock: SectionCuratedBlogProps = {
  blogItem: [
    {
      id: '123',
      name: 'The Cut',
      description: {
        text: 'Read the latest from the blog from the comfort of your salon chair.',
      },
      button: { url: '/blog/how-to-manage-frizz', buttonText: 'Read More' },
      image: {
        altText: '',
        height: 378,
        url: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rIdrkHlT12lm1b1z63pg',
        width: 434,
      },
    },
    {
      id: '124',
      name: 'Sustainable Salons',
      description: {
        text: 'A $3 fee is added to services to support sustainable practices in-salon.',
      },
      button: { url: '/blog/how-to-control-your-curls', buttonText: 'Read More' },
      image: {
        altText: '',
        height: 378,
        url: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/5wImo3hhQZyf8mtaJAYS',
        width: 434,
      },
    },
    {
      id: '125',
      name: 'Join the Style Society',
      description: {
        text: 'What beautiful hair always? Sign up to our Style Society rewards program and get rewarded for taking care of your hair.',
      },
      button: { url: '/blog/how-to-curl-control', buttonText: 'Read More' },
      image: {
        altText: '',
        height: 378,
        url: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/mtxGcvNkRnSsNnVYDvUX',
        width: 434,
      },
    },
  ],
}
