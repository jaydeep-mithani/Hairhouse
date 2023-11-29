import { CustomerLoginProps } from './CustomerLogin.types'

export const mock: CustomerLoginProps = {
  data: {
    formTitle: 'Login',
    formSubtitle: 'Login to your Style Society account.',
    formSubmitBtn: {
      buttonText: 'Login',
      ctaType: 'primary',
    },
    forgetPassWordLink: {
      buttonText: 'Forgot password?',
      ctaType: 'primary',
      url: '#forgot-password',
    },
    headline: {
      html: '<h2>Create an account and join <u>Style Society</u></h2>',
    },
    signupButtons: [
      {
        buttonText: 'Sign Up Now',
        ctaType: 'primary',
        openInNewWindow: false,
        url: 'signup',
      },
      {
        buttonText: 'Find Out More',
        ctaType: 'secondary',
        openInNewWindow: false,
        url: 'find-out-more',
      },
    ],
    benefits: [
      '10% off your first order',
      'Member-only sales and offers',
      'Free shipping for orders over $50',
      'Earn points towards your next shop',
    ],
  },
}
