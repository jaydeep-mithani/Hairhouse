import { SectionOfferFragment } from './CampaignLandingOffers.fragment.generated'

export interface CampaignLandingOffersProps {
  __typename: string
  id: string
  offerName: SectionOfferFragment['offerName']
  offerBgColor: SectionOfferFragment['offerBgColor']
  offerItems: SectionOfferFragment['offerItems']
}
