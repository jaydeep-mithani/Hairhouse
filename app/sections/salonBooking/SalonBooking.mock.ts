export const configSalonBookingMock = {
  salonsubtitle: 'What type of appointment would you like to book today?',
  salonwelcometitle: 'Welcome, let’s book an appointment',
  salonWelcomeImageSalon: {
    altText: null,
    height: 350,
    url: 'https://media.graphassets.com/T2ShojCJTWCKpaIpdliy',
    width: 286,
  },
  salonWelcomeImageHeading2: 'Piercing',
  salonWelcomeImageHeading1: 'Salon',
  salonWelcomeImage2: {
    altText: null,
    height: 350,
    url: 'https://media.graphassets.com/ctZTywgNQ8OKXweM0i4g',
    width: 286,
  },
  saloonbookingstep: {
    salonBookingCompleteHeading: 'Booking complete',
    salonBookingCompleteSubText: 'An email notification with the details below will be sent to your inbox.',
    salonBookingStep1PreferredStoreHeading: 'Is this your preferred store location?',
    salonBookingStep1PreferredStoreSubtext: 'Your go-to Hairhouse is set to:',
    salonBookingStep2HairLengthHeading: 'Select your hair length',
    salonBookingStep2HairLengthImage1: {
      altText: null,
      height: 231,
      url: 'https://media.graphassets.com/9rN5HuOTFCunUVJixzpw',
      width: 187,
    },
    salonBookingStep2HairLengthImage1Heading: 'Short',
    salonBookingStep2HairLengthImage1SubText: 'Hair length up to jawline',
    salonBookingStep2HairLengthImage2: {
      altText: null,
      height: 231,
      url: 'https://media.graphassets.com/FtiAhclySP26e90qkOEc',
      width: 188,
    },
    salonBookingStep2HairLengthImage2Heading: 'Mid length',
    salonBookingStep2HairLengthImage2SubText: 'Hair length up to shoulders',
    salonBookingStep2HairLengthImage3: {
      altText: null,
      height: 231,
      url: 'https://media.graphassets.com/eA7QlGzLRVeViqyxNE3Y',
      width: 187,
    },
    salonBookingStep2HairLengthImage3Heading: 'Thicker / longer hair',
    salonBookingStep2HairLengthImage3SubText: 'Hair length below shoulders',
    salonBookingStep2HairLengthSubText:
      'Selecting your correct hair length will help us to provide accurate pricing and times.',
    salonBookingStep3ServiceHeading: 'Select your service',
    salonBookingStep3ServiceSubText: 'Choose from our selection of hair services.',
    salonBookingStep4BookingTimeHeading: 'Select your booking time',
    salonBookingStep4BookingTimeSubText: 'Select your preferred date and time below.',
    salonBookingStep5StylistHeading: 'Select your stylist',
    salonBookingStep5StylistSubText: 'All of our hair stylists are licensed professions, experts in the industry.',
    salonBookingStep6ReviewHeading: 'Review booking',
    salonBookingStep6ReviewSubText:
      'Please ensure your number is up-to-date, we’ll send important booking information and confirm any details if required.',
  },
  salonCreateAnAccountSubtext:
    'Get $10 off your first service when you create an account & join Style Society. You’ll get the star treatment, with exclusive rewards & offers. Earn points on every purchase in-store and online. ',
  promoBannerBackgroundColor: {
    hex: '#dfb7b7',
  },
  promoBannerCta: {
    url: 'sing-up',
    openInNewWindow: false,
    ctaType: 'primary',
    buttonText: ' Learn more',
  },
  promoBannerText: 'Receive $10 off your first appointment.',
}

const LABELS_TEXT_FILL = 'labels.text.fill'

export const mapStyles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: LABELS_TEXT_FILL,
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
]
