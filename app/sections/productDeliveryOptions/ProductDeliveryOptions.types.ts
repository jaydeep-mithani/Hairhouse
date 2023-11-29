export enum ItemType {
  Basic = 'Basic',
  preOrder = 'preOrder',
  onlineExclusive = 'onlineExclusive',
}

export enum DeliveryType {
  Same_day_delivery = 'Same day delivery',
  Standard_delivery = 'Standard delivery',
  Express_delivery = 'Express delivery',
}
export enum DeliveryOptions {
  Delivery = 'Delivery',
  Click_nd_Collect = 'Click & Collect',
  InStore = 'In-Store',
}

export type DeliveryProps = {
  title?: DeliveryType
  subtext?: string | null
  charges?: number | null
}
export type ProductDeliveryOptionsProps = {
  itemType: ItemType
  location: string | null
  delivery: Array<DeliveryProps>
}
