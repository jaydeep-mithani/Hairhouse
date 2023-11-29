import { CustomerProfileProps } from './CustomerProfile.types'

export const mock: CustomerProfileProps = {
  customer: {
    addresses: {
      edges: [],
      nodes: [],
      pageInfo: {
        endCursor: 'none',
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    defaultAddress: {
      id: 'gid://shopify/MailingAddress/9150255235385?model_n…NNJLUsOgypAgyZOIpShm2nont_Sr4sP31Qgv7xLQSkCp9-Pbs',
      formatted: ['123 Main St', '', 'Melbourne VIC 3000', 'Australia'],
      firstName: 'Lily',
      lastName: 'Brown',
      company: null,
      address1: '123 Main St',
      address2: '',
      city: 'Melbourne',
      province: 'Victoria',
      provinceCode: 'VIC',
      zip: '3000',
      country: 'Australia',
      countryCode: 'AU',
      phone: '+61400999222',
    },
    email: 'olena.biriukova123@overdose.digital',
    firstName: 'Lina',
    lastName: 'Brown',
    orders: {
      edges: [],
      nodes: [],
      pageInfo: {
        endCursor: 'none',
        hasNextPage: false,
        hasPreviousPage: false,
      },
      totalCount: 'string',
    },
    phone: '+61400999222',
    metafields: [],
    acceptsMarketing: true,
    createdAt: '21-11-05',
    displayName: '',
    id: '12345',
    numberOfOrders: '12',
    tags: [],
    updatedAt: '12-33-33',
  },
}
