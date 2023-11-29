import { ImagePosition } from 'graphql/types'

import { ServiceDescriptionBlockProps } from './ServiceDescriptionBlock.types'

export const mock: ServiceDescriptionBlockProps = {
  heading: 'Before Your Piercing',
  descriptionText:
    "Piercing doesn't need to be daunting. At Hairhouse, our piercers are highly trained and work within only the safest and most sterile environments. But it's also necessary to prioritize pre-piercing preparation before you step into the salon. Here's how you can best get ready for a successful piercing:",
  content: {
    html: `
    <ul>
      <li>The healthier you are, the better your body will heal, which means that eating well and avoiding alcohol and drugs before your appointment.</li>
      <li>Get some sleep. A relaxed, at ease demeanour will reduce any anxiety before, during, or after your piercing.</li>
      <li>Drink lots of water. Being hydrated helps with the healing process.</li>
      <li>Choose your piercer wisely. Hairhouse piercers strive to provide a professional, safe place, so your experience is enjoyable and successful.</li>
      <li>If you are unwell or overly stressed, postpone your appointment. Having a piercing when you not in a great state of mind may cloud the experience and affect the healing process.</li>
      <li>Avoid waxing, shaving, or laser hair removal at least three days before your piercing. All surface skin should be calm and free of irritation.</li>
      <li>Arrive clean and comfortable. We strongly suggest you shower before your piercing as the skin around the piercing should remain dry afterward. Also, ensure you are wearing clothing that is light and loose so that any body piercings remain unrestricted by fabric.</li>
      <li>Have a hand to hold! If you are under 16 years of age, a parent is allowed in the piercing room with you.</li>
    </ul>`,
  },
  button: {
    buttonText: 'Book Appointment',
    url: '',
  },
  imagePosition: ImagePosition.Left,
  mobileImg: {
    url: 'https://s3-alpha-sig.figma.com/img/a6d0/0980/692f7220bd48e0359be8d29b8f1d985b?Expires=1687132800&Signature=Laty7ar18h3R0wmIiAedbeNnJOFul2oVvT7iUEDaI77fEiWEIpOYy4cYqYjT-IsB2ihG1iNr2pUEFMu6-LovklLtJcae4Ozv3EenelnWwjn4OSWdb2pnI350Y3HhoeXvlaTU7AAoAGwZvx-6be1aj83Y8VzM~eGilBsoRZwye0zGRon0L7lAE9nFYoxGPE4-sFOyHFna8lrk8vXE3qm0sAoeZI9qP1d-ZX1g7Es15uuBuJXUl~txuX3PJ~6DJAE~y6-6kNGe~XotySNsLpoUn5MphUZMW8LeV1F7rstPNzWTcbNsxiUdQdZNemOoLXns1wra14UPr4v5iUuSVOyplg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    height: 268,
    width: 375,
  },
  tabletImg: {
    url: 'https://media.graphassets.com/mvyxkb9HQuKxa9VKQXZN',
    height: 1005,
    width: 697,
  },
  desktopImg: {
    url: 'https://media.graphassets.com/82Ca0BTSUmjKPXD3wmJ3',
    height: 1005,
    width: 697,
  },
}

export const rightImage: ServiceDescriptionBlockProps = {
  heading: 'During Your Piercing',
  descriptionText:
    'It’s your time to shine. Piercings are to be enjoyed, so ensure your surroundings are perfect for the process to be a relaxed and enjoyable one!',
  content: {
    html: `
    <ul>
      <li>Put your phone on silent or turn it off. This is a time you – and your piercer – do not want to be interrupted. If you have an essential call to take, ask your accompanying support friend to do so.</li>
      <li>Look around. The environment should be a clean, sterile space. All piercers should be using single-use needles that are disposed of in a bio-hazard container.</li>
      <li>Ask questions. If you have any queries about your piercings, don’t be shy. Now is the time to ensure you are truly comfortable with what is ahead. Nothing should feel daunting, so get all the answers you need so you are relaxed and confident with your procedure.</li>
      <li>Listen. Reputable piercers will take you through all the aspects of the piercing, from jewellery options through to healing expectations, without you having to ask. Cover topics, including cross-contamination, sterilization, anatomy, infection control, jewellery quality, metal properties, and aftercare.</li>
      <li>Be happy with your jewellery: Ensure the salon has a customisable range of jewellery to suit your needs and desires. With any fresh piercing, you want to have jewellery that is free of nickel and impurities that could cause irritation, allergic reactions, excess swelling, or an elongated length of time to heal.</li>
    </ul>
    `,
  },
  button: {
    buttonText: 'Book Appointment',
    url: '',
  },
  imagePosition: ImagePosition.Right,

  mobileImg: {
    url: 'https://media.graphassets.com/TlCC3DLdQd2JLaIbEHW6',
    height: 268,
    width: 375,
  },
  tabletImg: {
    url: 'https://media.graphassets.com/Stg5RCl9RTwxhhcveODW',
    height: 915,
    width: 697,
  },
  desktopImg: {
    url: 'https://media.graphassets.com/Stg5RCl9RTwxhhcveODW',
    height: 915,
    width: 697,
  },
}
