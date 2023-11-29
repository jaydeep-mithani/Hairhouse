export interface CampaignLandingShopByGroupProps {
  __typename: string
  id?: string
  subtitle: string
  title: string
  shopByGroup: string
  images: Array<{
    label: string
    link: string
    image: {
      altText: any
      url: string
    }
  }>
}
