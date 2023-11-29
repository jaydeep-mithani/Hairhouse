import { CampaignLandingBrandsProps } from './campaignLandingBrands/CampaignLandingBrands.types'
import { CampaignLandingFeaturedProductsProps } from './campaignLandingeaturedProducts/featuredProducts.types'
import { CampaignLandingHeroBannerProps } from './campaignLandingHeroBanner/CampaignLandingHeroBanner.types'
import { CampaignLandingOffersProps } from './campaignLandingOffers/CampaignLandingOffers.types'
import { CampaignLandingShopByGroupProps } from './campaignLandingShopByGroup/CampaignLandingShopByGroup.types'
import { CampaignLandingTextBlockProps } from './campaignLandingTextBlock/CampaignLandingTextBlock.types'
import { SectionGiftFinderProps } from './sectionGiftFinder/SectionGiftFinder.types'
import { SectionTestimonialProps } from './sectionTestimonial/SectionTestimonial.types'

export interface CampaignLandingProps {
  data: {
    sections: [
      CampaignLandingTextBlockProps,
      CampaignLandingHeroBannerProps,
      CampaignLandingShopByGroupProps,
      CampaignLandingFeaturedProductsProps,
      CampaignLandingOffersProps,
      CampaignLandingBrandsProps,
      CampaignLandingShopByGroupProps,
      SectionGiftFinderProps,
      SectionTestimonialProps,
    ]
  }
}
