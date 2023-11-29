import { CampaignLandingOffersProps } from './Offers/Offers.types'
import { OffersTermsAndConditionProps } from './OffersTermsAndCondtion/OfferTermsAndCondition.types'

export interface OffersScreenProps {
  data: {
    sections: [CampaignLandingOffersProps, OffersTermsAndConditionProps]
  }
}
