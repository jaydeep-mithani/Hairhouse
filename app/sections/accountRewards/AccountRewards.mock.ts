import { AccountRewardsProps } from './AccountRewards.types'

export const mock: AccountRewardsProps = {
  rewardsCards: [
    {
      id: 'clgnus17p330h0b2pd9z8f0p8',
      subTitle: 'Welcome Voucher',
      expireData: 'Offer Expires 28/06/24',
      backgroundColor: null,
      background: {
        image: { url: 'https://media.graphassets.com/toCmABkS0CTICgU0zdU2', __typename: 'Asset' },
        __typename: 'ModuleImage',
      },
      link: { url: '/account', linkText: '$10 Off', __typename: 'ModuleLink' },
      __typename: 'ModuleRewardsCard',
    },
    {
      id: 'clgnus17q330l0b2phtnxl4p9',
      subTitle: 'Special',
      expireData: 'Offer Expires 28/07/23',
      backgroundColor: { hex: '#9b615c', __typename: 'Color' },
      background: null,
      link: { url: '/account', linkText: 'Free Gift', __typename: 'ModuleLink' },
      __typename: 'ModuleRewardsCard',
    },
    {
      id: 'clgnus17r330o0b2p7cm25ytu',
      subTitle: 'Coco & Eve',
      expireData: 'Offer Expires 28/06/23',
      backgroundColor: null,
      background: {
        image: { url: 'https://media.graphassets.com/4vQ5sxuSTSRLYXzYQ0km', __typename: 'Asset' },
        __typename: 'ModuleImage',
      },
      link: { url: '/account', linkText: '$5 Off', __typename: 'ModuleLink' },
      __typename: 'ModuleRewardsCard',
    },
    {
      id: 'clgnus17r330s0b2pcwsa1pjw',
      subTitle: 'Summer Deal',
      expireData: 'Offer Expires 28/06/23',
      backgroundColor: { hex: '#db5b3b', __typename: 'Color' },
      background: null,
      link: { url: '/account', linkText: '10% Off', __typename: 'ModuleLink' },
      __typename: 'ModuleRewardsCard',
    },
  ],
}
