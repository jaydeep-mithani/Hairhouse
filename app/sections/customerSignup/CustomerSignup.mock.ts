import { CustomerSignupProps } from './CustomerSignup.types'

const imgDim = 380
const imgurl = 'https://cdn.shopify.com/s/files/1/0706/9679/6473/files/signup-feature-image-1.png'

export const mock: CustomerSignupProps = {
  data: {
    backgroundColorRight: {
      hex: '#F9F5F0',
    },
    callToActionPreLoginText: 'Already a member?',
    description: {
      html: '<p>Get $10 off your first purchase when you create an account and join Style Society. You’ll get the star treatment, with exclusive rewards and offers. Earn points on every purchase in-store and online.</p>',
    },
    heading: 'Create an account',
    preheading: 'Welcome to Hairhouse',
    button: {
      buttonText: 'Sign up',
      displayButton: true,
    },
    carouselTitle: 'Style Society',
    carouselSubtitle: 'Loyalty Progam',
    featuresSlider: [
      {
        blockTitle: 'Get 10% off your first purchase',
        blockSubtitle: 'Shop earn, and receive ongoing discounts.',
        blockImage: {
          altText: 'signup feature image 1',
          height: imgDim,
          url: imgurl,
          width: imgDim,
        },
      },
      {
        blockTitle: 'Receive gifts on your birthday',
        blockSubtitle: 'Shop earn, and receive ongoing discounts..',
        blockImage: {
          altText: 'signup feature image 2',
          height: imgDim,
          url: imgurl,
          width: imgDim,
        },
      },
      {
        blockTitle: 'Get vouchers when you earn points',
        blockSubtitle: 'Shop, earn, and receive ongoing discounts.',
        blockImage: {
          altText: 'signup feature image 3',
          height: imgDim,
          url: imgurl,
          width: imgDim,
        },
      },
      {
        blockTitle: 'Enjoy the extra perks',
        blockSubtitle: 'Shop, earn, and receive ongoing discounts..',
        blockImage: {
          altText: 'signup feature image 4',
          height: imgDim,
          url: imgurl,
          width: imgDim,
        },
      },
    ],
  },
}
