import { Asset } from '../textAndImageBlockSection/TextAndImageBlockSection.types'

export type SustainableSalonAccordionProps = {
  __typename?: 'SectionAccordionWithList'
  id?: string
  title?: string
  logo?: Asset
  accordionItems?: AccordionProps[]
}

export type AccordionProps = {
  __typename?: 'AccordionContentWithButton'
  title?: string
  items?: string[]
  button?: {
    ctaType?: string
    buttonText?: string
    url?: string
    openInNewWindow?: boolean
    __typename?: 'Cta'
  }
}
