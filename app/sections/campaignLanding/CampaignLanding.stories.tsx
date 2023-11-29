/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryFn } from '@storybook/react'
import { TextAndImageBlockSection } from '~/components'
import { withRouter } from 'storybook-addon-react-router-v6'
/* eslint-enable import/no-extraneous-dependencies */

import { BuyingGuideFeatureProductBlockSection } from '../buyingGuideFeatureProduct'
import { mock } from './CampaignLanding.mock'
import { CampaignLandingProps } from './CampaignLanding.types'
import { CampaignLandingBrands } from './campaignLandingBrands/CampaignLandingBrands'
import { CampaignLandingHeroBanner } from './campaignLandingHeroBanner/CampaignLandingHeroBanner'
import { CampaignLandingOffers } from './campaignLandingOffers/CampaignLandingOffers'
import { ShopByGroup } from './campaignLandingShopByGroup/CampaignLandingShopByGroup'
import { SectionGiftFinder } from './sectionGiftFinder/SectionGiftFinder'
import { SectionTestimonial } from './sectionTestimonial/SectionTestimonial'

export default {
  title: 'Sections/Campaign Landing',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '',
      routeParams: {},
    },
  },
} as Meta

export const story: StoryFn<CampaignLandingProps> = (args) => {
  return (
    <div>
      {args?.data &&
        args.data.sections &&
        args.data.sections.length &&
        args?.data?.sections.map((section, index) => {
          switch (section.__typename) {
            case 'TextAndImageBlock':
              return <TextAndImageBlockSection data={section} key={index} />
            case 'CampaignLandingHeroBanner':
              return <CampaignLandingHeroBanner data={section} key={index} />
            case 'FeaturedProducts':
              return <BuyingGuideFeatureProductBlockSection data={section} key={index} />
            case 'ShopByGroup':
              return <ShopByGroup data={section} key={index} />
            case 'CampaignOffers':
              return <CampaignLandingOffers data={section} key={index} />
            case 'CampaignBrands':
              return <CampaignLandingBrands data={section} key={index} />
            case 'GiftFinder':
              return <SectionGiftFinder data={section} key={index} />
            case 'Testimonials':
              return <SectionTestimonial data={section} key={index} />
            default:
              return null
          }
        })}
    </div>
  )
}

story.storyName = 'Default'
story.args = mock
