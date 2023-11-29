import { SalonMenuProps } from './SalonMenu.types'

export const mock: SalonMenuProps = {
  menus: [
    {
      name: 'Beverage Menu',
      menuSublist: [
        {
          sublistItems: [
            {
              title: 'Coffee',
              items: ['Latte', 'Cappuccino', 'Long Black', 'Short Black', 'Mocha', 'Flat White'],
            },
            {
              title: 'Tea',
              items: ['English Breakfast', 'Peppermint', 'Green Tea'],
            },
          ],
        },
        {
          sublistItems: [
            {
              title: 'Hot Chocolate',
              items: [],
            },
            {
              title: 'Milk',
              items: ['Full Cream', 'Skinny', 'Soy/Almond (Ask your stylist)'],
            },
          ],
        },
      ],
    },
    {
      name: 'Treatment Menu',
      menuSublist: [
        {
          sublistItems: [],
        },
      ],
    },
    {
      name: 'Salon Services',
      menuSublist: [],
    },
  ],
}
