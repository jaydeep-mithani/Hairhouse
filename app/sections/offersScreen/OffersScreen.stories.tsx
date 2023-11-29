import { Meta, StoryFn } from '@storybook/react'

import { CampaignLandingOffers } from '../campaignLanding/campaignLandingOffers/CampaignLandingOffers'
import { mock } from './OffersScreen.mock'
import { OffersScreenProps } from './OffersScreen.types'
import { SectionsAccordion } from './SectionsAccordion'

export default {
  title: 'Sections/Offers Screen',
} as Meta

export const story: StoryFn<OffersScreenProps> = (args) => {
  return (
    <div>
      {!!args?.data?.sections?.length &&
        args.data.sections.map((section) => {
          switch (section.__typename) {
            case 'Offers':
              return <CampaignLandingOffers {...section} key={section.__typename} />
            case 'OfferTermsAndCondition':
              return <SectionsAccordion {...section} key={section.__typename} />
            default:
              return null
          }
        })}
    </div>
  )
}

story.storyName = 'Default'
story.args = mock
