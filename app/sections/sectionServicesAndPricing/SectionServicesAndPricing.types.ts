import { TabsId } from '~/routes/($lang)/store/$storeHandle'

export type SectionServicesAndPricingProps = {
  metafields: { [key: string]: string }
  setActiveTab: (val: TabsId) => void
  activeTab: string
  id: string
  storeName: string
}

type ServiceItemType = {
  name: string
  priceKey: string
  qty?: string
  title?: string
}

export type ServiceType = {
  name: string
  desc?: string
  items: ServiceItemType[]
}

export type ServiceBlockProps = {
  metafields: { [key: string]: string }
  service: ServiceType
  showCta: boolean
}
