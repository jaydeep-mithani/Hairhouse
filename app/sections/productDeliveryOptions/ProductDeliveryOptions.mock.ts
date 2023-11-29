import { DeliveryType, ItemType, ProductDeliveryOptionsProps } from './ProductDeliveryOptions.types'

export const mock: ProductDeliveryOptionsProps = {
  itemType: ItemType.Basic,
  location: 'Brisbane 4000',
  delivery: [
    {
      title: DeliveryType.Same_day_delivery,
      subtext: 'Order now and receive before 3pm',
      charges: 7.99,
    },
    {
      title: DeliveryType.Standard_delivery,
      subtext: '3-5 business days. Free on orders over $50.',
      charges: 9.95,
    },
    {
      title: DeliveryType.Express_delivery,
      subtext: '1-2 business days',
      charges: 14.95,
    },
  ],
}

export const preOrder: ProductDeliveryOptionsProps = {
  itemType: ItemType.preOrder,
  location: 'Brisbane 4000',
  delivery: [
    {
      title: DeliveryType.Standard_delivery,
      subtext: 'Mid February 2023. Free on orders over $50.',
      charges: 9.95,
    },
  ],
}

export const onlineExclusive: ProductDeliveryOptionsProps = {
  itemType: ItemType.onlineExclusive,
  location: 'Brisbane 4000',
  delivery: [
    {
      title: DeliveryType.Standard_delivery,
      subtext: '3-5 business days. Free on orders over $50.',
      charges: 9.95,
    },
    {
      title: DeliveryType.Express_delivery,
      subtext: '1-2 business days',
      charges: 14.95,
    },
  ],
}
