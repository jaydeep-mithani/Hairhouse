import { TextAndImageBlockSectionProps } from './TextAndImageBlockSection.types'

enum TextAlignment {
  Center = 'center',
}

export enum ImagePosition {
  Left = 'left',
}

export enum CtaType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export const textAndImageBlockSectionData: TextAndImageBlockSectionProps = {
  id: 'clj74hxzg2gq10c2vi09w30jy',
  imageAndTextBlocks: [
    {
      heading: 'Powered by Professionals',
      text: {
        html: '<p>In over 110 locations around Australia, our HairStudios &amp; PiercingStudios offer something for everyone.</p>',
        text: 'In over 110 locations around Australia, our HairStudios & PiercingStudios offer something for everyone.',
        __typename: 'RichText',
      },
      contentAlignment: TextAlignment.Center,
      imagePosition: ImagePosition.Left,
      imageWidth: '50%',
      id: 'clj74hxzg2gq20c2vgxew6335',
      image: { url: 'https://media.graphassets.com/mzPkiI0NSCm9cHPxpUcR', __typename: 'Asset' },
      buttons: [
        {
          buttonText: 'Book Appointment',
          ctaType: CtaType.Primary,
          id: 'clj74ohm82hbo0b19pcyrg9vw',
          url: 'book',
          __typename: 'Cta',
        },
        {
          buttonText: 'Find out more',
          ctaType: CtaType.Secondary,
          id: 'clj74ohm82hbn0b19darqh82y',
          url: 'find',
          __typename: 'Cta',
        },
      ],
      __typename: 'ModuleImageAndText',
    },
  ],
}
