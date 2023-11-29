import { SectionTextBlockWithCtAsFragment } from './TextBlockWithCTASection.fragment.generated'

export type TextBlockWithCTASectionProps = SectionTextBlockWithCtAsFragment

export type RateProductsProps = {
  textContent: SectionTextBlockWithCtAsFragment['textContent']
  buttonCta: SectionTextBlockWithCtAsFragment['buttonCta']
  heading: SectionTextBlockWithCtAsFragment['heading']
}
