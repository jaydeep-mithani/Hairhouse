/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/first */
// ----- everything above this line needs to be refatctored -------

import type { ComponentType } from 'react'

// ----- everything above this line needs to be refatctored -------

import { BrandLogoGrid } from './brandLogoGrid'
import { PopularSearches as SectionSearchTermList } from './popularSearches'
import { PiercingGrid as SectionPiercingGrid } from './piercingGrid'

export { AnnouncementBarSection } from './announcementBarSection'
export { BrandTextSection } from './brandTextSection'
export { BuyingGuidesSectionTabs } from './buyingGuidesSectionTabs'
export { FaqAccordions } from './faqAccordions'
export { FullWidthImage } from './fullWidthImage'
export { HeroBanner } from './heroBanner'
export { ImageWithCard } from './imageWithCard'
export { AccountSidebar } from './accountSidebar'
export { ContentCards } from './contentCards'
export { SalonFaqAccordionSecion } from './salonFaqAccordionSection'
export { SectionImageWithText } from './sectionImageWithText'
export { StoreLandingBannerSection } from './storeLandingBannerSection'
export { TextBlockWithCTASection } from './textBlockWithCTASection'
export { ImageTextOverlaySection } from './imageTextOverlaySection'
export { UspIconsSection } from './uspIconsSection'
export { ProductHighlights } from './productHighlights'
export { ArticlePageTitleInfoSection } from './articlePageTitleInfoSection'
export { ArticlePageImageSection } from './articlePageImageSection'
export { ArticlePageTextSection } from './articlePageTextSection'
export { ArticlePageLinksSection } from './articlePageLinksSection'
export { ArticlePageVideoSection } from './articlePageVideoSection'
export { ArticlePageAccordionSection } from './articlePageAccordionSection'
export { ArticleProductCarousel } from './articleProductCarousel'
export { BlogPageTemplate } from './blogPageTemplate'
export { AccountLoyaltyBlock } from './accountLoyaltyBlock'
export { AccountRewards } from './accountRewards'
export { AccountOrders } from './accountOrders'
export { ArticleSourcesSection } from './articleSourcesSection'
export { AccountMembership } from './accountMembership'
export { AccountBarcode } from './accountBarcode'
export { AccountReward } from './accountReward'
export { AccountCommunication } from './accountCommunication'
export { AccountWishlists } from './accountWishlists'
export { AccountWishlist } from './accountWishlist'
export { FeaturedPosts } from './featuredPosts'
export { RelatedPosts } from './relatedPosts'
export { CustomerProfile } from './customerProfile'
export { SectionVideoCarousel } from './videoBlock'
export { AccountPassword, AccountFetcherPassword } from './accountPassword'
export { BlogCarousel } from './blogCarousel'
export { SectionBlogGrid } from './sectionBlogGrid'
export { ParticipatingSalonAccordion } from './participatingSalonAccordion'
export { SubcategoriesCarousel } from './subcategoriesCarousel'
export { HairProfile } from './hairProfile'
export { CollectionCarousel } from './collectionCarousel'
export { Proposition } from './proposition'
// ----- everything above this line needs to be refatctored -------

import { SalonPartners } from './salonPartners'
import { Proposition } from './proposition'
import { HeroBanner } from './heroBanner'
import { SectionProductMain } from './sectionProductMain'
import { ProductBenefitsGrid } from './productBenefitsGrid'
import { SectionCollectionMain } from './sectionCollectionMain'
import { SectionVideoCarousel } from './videoBlock'
import { IGFeed as SocialMediaCtaLarge } from './igFeed'
import { SectionPreezieProductFinder } from './sectionPreezieProductFinder'
import { TwoColumnText as SectionSeoText } from './twoColumnText'
import { MultiColumnContent as EditorialTile } from './multiColumnContent'
import { SalonServices as SectionSalon } from './salonServices'
import { ServiceDescriptionBlock as SectionServiceDescriptionBlock } from './serviceDescriptionBlock'
import { StyleSocietyBlock as JoinCTApanel } from './styleSocietyBlock'
import { SubcategoriesCarousel as SectionCollectionSubcategoryLink } from './subcategoriesCarousel'
import { FeatureProductCarouselTabbed } from './productRecommendation'
import { SectionsAccordion } from './offersScreen/SectionsAccordion'
import { CampaignLandingOffers as SectionOffer } from './campaignLanding/campaignLandingOffers/CampaignLandingOffers'
import { Page404 as Section404 } from './Page404'
import { BlogCarousel as SectionBlogCarousel } from './blogCarousel'
import { SalonMenu as SectionSalonMenu } from './salonMenu'
import { SectionProductReview } from './sectionProductReview'
import { TextAndImageBlockSection as SectionImageAndTextGrid } from './textAndImageBlockSection'
import { BrandTextSection as EditorialText } from './brandTextSection'
import { SectionCuratedBlog } from './sectionCuratedBlog'
import { SectionTestimonial } from './campaignLanding/sectionTestimonial'
import { SectionGiftFinder } from './campaignLanding/sectionGiftFinder/SectionGiftFinder'
import { SalonsMenuVideoSection as SectionFullWidthVideo } from './salonsMenuVideoSection'
import { SectionShopByGrid } from './campaignLanding/sectionShopByGrid/SectionShopByGrid'
import { UspIconsSection as UspSection } from './uspIconsSection'
import { SectionSustainableSalonLocation } from './sectionSustainableSalonLocation'
import { CollectionCarousel as SectionCategoryCarousel } from './collectionCarousel'
import { ProductHowTo } from './productHowTo'

import { ImageWithCard as SectionFullWidthImageAndCopy } from './imageWithCard'
import { TextBlockWithCTASection as SectionTextBlockWithCTAs } from './textBlockWithCTASection'
import { ServiceMenu as SectionSustainableServicesMenu } from './serviceMenu'
import { LandingHeroBanner as SectionHeroBannerWithLink } from './LandingHeroBanner'
import { HeaderSection as HeaderConfig } from './header'
import { SectionFullWidthImage } from './sectionFullWidthImage'
import { ContentCards as SectionContentCard } from './contentCards'
import { SectionCollectionDropDown } from './SectionCollectionDropDown'
import { ArticlePageTitleInfoSection as SectionArticleHeroBanner } from './articlePageTitleInfoSection'
import { CustomerSignup } from './customerSignup'
import { OfferTiles } from './offerTiles'
import { SustainableSalonAccordion as SectionAccordionWithList } from './SustainableSalonAccordion'
import { ParticipatingSalonAccordion as SectionAccordionWithStore } from './participatingSalonAccordion'
import { Roles as SectionFeaturedPositionsBlock } from './careersRoles'
import { ReviewSteps } from './reviewSteps'
import { SectionImageWithText } from './sectionImageWithText'
import { SectionProductCompare } from './sectionProductCompare'
import { CompetitionBanner as SectionCompetitionBanner } from './sectionCompetitionBanner'
import { EmployeeBenefits as SectionIconsWithText } from './employeeBenefits'
import { CareersCTA as SectionContentLinkBlock } from './careersCTA'
import { SectionBlogGrid } from './sectionBlogGrid'
import { SectionIFrameEmbed } from './sectionIFrameEmbed'
import { ThermalProtectionBlock } from './thermalProtectionBlock'

interface SectionsList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: ComponentType<any>
}

export const sectionComponents: SectionsList = {
  SalonPartners,
  Proposition,
  SectionSalonMenu,
  SectionProductMain,
  HeroBanner,
  ProductBenefitsGrid,
  SectionCollectionMain,
  SectionVideoCarousel,
  SocialMediaCtaLarge,
  SectionSearchTermList,
  SectionPreezieProductFinder,
  SectionSeoText,
  EditorialTile,
  SectionSalon,
  SectionServiceDescriptionBlock,
  SectionCompetitionBanner,
  JoinCTApanel,
  SectionCollectionSubcategoryLink,
  FeatureProductCarouselTabbed,
  BrandLogoGrid,
  SectionsAccordion,
  SectionOffer,
  SectionPiercingGrid,
  Section404,
  SectionBlogCarousel,
  SectionProductReview,
  SectionImageAndTextGrid,
  EditorialText,
  SectionCuratedBlog,
  SectionGiftFinder,
  SectionTestimonial,
  SectionFullWidthVideo,
  SectionShopByGrid,
  UspSection,
  SectionSustainableSalonLocation,
  SectionCategoryCarousel,
  ProductHowTo,
  SectionFullWidthImageAndCopy,
  SectionTextBlockWithCTAs,
  SectionSustainableServicesMenu,
  SectionHeroBannerWithLink,
  HeaderConfig,
  SectionFullWidthImage,
  SectionCollectionDropDown,
  SectionArticleHeroBanner,
  CustomerSignup,
  OfferTiles,
  SectionAccordionWithList,
  SectionAccordionWithStore,
  SectionFeaturedPositionsBlock,
  ReviewSteps,
  SectionImageWithText,
  SectionIconsWithText,
  SectionContentLinkBlock,
  SectionContentCard,
  SectionProductCompare,
  SectionBlogGrid,
  SectionIFrameEmbed,
  ThermalProtectionBlock,
}
