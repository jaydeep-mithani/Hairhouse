import { SectionGiftFinderProps } from './SectionGiftFinder.types'

const firstAdminTitle = "I'm a pro, just looking for inspo"
const secondAdminTitle = 'Send help, gifting stresses me out'
const firstImageUrl =
  'https://s3-alpha-sig.figma.com/img/9a93/96f8/595714d4ea806c1fbe4adca4f8ceec18?Expires=1687737600&Signature=mCOd3l1CGRbHoLQbx5lnlYqPN9Vlq8YWuxLJUCyt87gVxLqL5B87WeQqRKiV~mnzMaV7r0VtLTk5ceUI8oXubgXISkJtuwgbYqXqVMB948IMlkMGo5SzvLNOLqUBqMZJKdNGYTiY23HBuQMDolflCNLvNytX-iCu0UamrnTiVjGO3M9eh~6F19N0lfgYjR9T98BEwbBNPH1yPFarI7C6K4fa4s2I9~jZyKltIQM4D1zuzRp1kFld5FV1bQgTY-ctXxpqhneZvtkXWhPMIaAaUrlZrd7kwP953UwgZHLjThj4dqwCObdmLZqcQHaf8hRnzL2c5xSotWR0UfIIEKz1Xw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
const secondImageUrl =
  'https://s3-alpha-sig.figma.com/img/d358/df3c/7947d111674bb72d303eaf6249c431b9?Expires=1687737600&Signature=J3lqw1BPXy1-MEKyzXOSkO3w9IQ~vqt2fVCTg5CRP36w1f1sw5ERNdAVo-WnNe6S1ORuxAzrJp6S10QxMtkehtscKUmHBWBCqzskEs0UIdv8ku05TE5i53lYThdH2KJRooZzIkET97-xuQCkWhJGN6evzJboQ0QNohwt1-obD4MoZwLar4hkRGbVGn8oy5PigYUxUTPX5Jf6zRSYIS4~hCatW11IUc1bbAxcOAcjWmsU4EXwaaGLKaHM7v4mZKn4JpGvfa-5lErolRBr4P8qe4ade4J9lxq8zeOBz4yeSBUE7g0334mPF~NdyRSngUmaaZH3JRrAVK3SJDJdskwGog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

const options = [
  {
    adminTitle: firstAdminTitle,
    icon: {
      url: firstImageUrl,
      altText: '',
    },
  },
  {
    adminTitle: secondAdminTitle,
    icon: {
      url: secondImageUrl,
      altText: '',
    },
  },
]

export const SectionGiftFinderData: SectionGiftFinderProps = {
  heading:
    "It's here! Be inspired with holiday hauls & wish-worthy gifting, our Christmas drop has officially arrived.",

  image: {
    url: 'https://s3-alpha-sig.figma.com/img/6aa8/9fec/849988522767ff4ac5e64d1b980472c2?Expires=1687737600&Signature=p97RkI1oBlKG4Lamo0GTA~P24ukmw~N2AG8rn31unsFlEDSD5kdHOk59KicRyhwkLEtfe0YaOAxrbse-9JVmEJg9njm7EA8eg3th3XOJpoFmG~X4qQ8kyLgBw-tPtKP0sDXvr4qGPNBuV0Z-OjH~JgA32mEhANarF2ORvqaobSH67Jh9qlsgzN~SbYLJJDz0ui5YbNoFQ0GsjAgeSfCEHsuQQvifDqOD2aeqNiLG8ggGvEUX8E5rGvOp6siZWAPXjChybPtohu5wQ9koHrG8rtWWE1mVQA73eRnA0z9fbI1KjKe0PQJfiCU3hYjZw1Ma1QWW4SFJbCgUv2sNzBmY4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    altText: 'cover image',
  },
  questionTitle: 'Gift Finder',
  backgroundColor: {
    hex: '#004124',
  },
  questions: [
    {
      question: "It's the season for wish-worthy gifts and holiday hauls. Are you ready to get gifting?",
      options,
    },
    {
      question: 'Looking for some great gifts?',
      options,
    },
    {
      question: 'Gifts that will bring joy to you and everyone that recieves them!',
      options,
    },
  ],
  buttons: [
    {
      button: {
        buttonText: 'Back',
        buttonTheme: 'secondary',
        buttonUrl: '/',
      },
    },
    {
      button: {
        buttonText: 'Next',
        buttonTheme: 'secondary',
        buttonUrl: '/',
      },
    },
  ],
}
