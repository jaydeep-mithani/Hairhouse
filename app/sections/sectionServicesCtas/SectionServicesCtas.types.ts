import { PageSectionId, TabsId } from '~/routes/($lang)/store/$storeHandle'

export type SectionServicesCtasTypes = {
  metafields: { [key: string]: string }
  handleScrollTo: (val: PageSectionId, tabName: TabsId | null) => void
}
