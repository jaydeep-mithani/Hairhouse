import { SectionOfferFragment } from '~/sections/campaignLanding/campaignLandingOffers/CampaignLandingOffers.fragment.generated'

export interface CampaignLandingOffersProps {
  __typename: string
  id: string
  offerName: SectionOfferFragment['offerName']
  backgroundColor: SectionOfferFragment['backgroundColor']
  offerItems: SectionOfferFragment['offerItems']
}
