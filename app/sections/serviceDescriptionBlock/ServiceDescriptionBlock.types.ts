import { ServiceDescriptionBlockFragment } from './ServiceDescriptionBlock.fragment.generated'

export type ServiceDescriptionBlockProps = {
  heading: ServiceDescriptionBlockFragment['heading']
  descriptionText: ServiceDescriptionBlockFragment['descriptionText']
  content: ServiceDescriptionBlockFragment['content']
  button: ServiceDescriptionBlockFragment['button']
  imagePosition: ServiceDescriptionBlockFragment['imagePosition']
  mobileImg?: ServiceDescriptionBlockFragment['mobileImg']
  tabletImg?: ServiceDescriptionBlockFragment['tabletImg']
  desktopImg?: ServiceDescriptionBlockFragment['desktopImg']
}
