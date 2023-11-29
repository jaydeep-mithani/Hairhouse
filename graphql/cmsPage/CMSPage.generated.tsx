import * as Types from '../types';

import gql from 'graphql-tag';
import { SalonServicesFragmentDoc } from '../../app/sections/salonServices/SalonServices.fragment.generated';
import { PropositionFragmentDoc } from '../../app/sections/proposition/Proposition.fragment.generated';
import { UspSectionFragmentDoc } from '../../app/sections/uspIconsSection/UspIconsSection.fragment.generated';
import { SectionTextBlockWithCtAsFragmentDoc } from '../../app/sections/textBlockWithCTASection/TextBlockWithCTASection.fragment.generated';
import { SectionSalonMenuFragmentDoc } from '../../app/sections/salonMenu/SalonMenu.fragment.generated';
import { HeroBannerFragmentDoc } from '../../app/sections/heroBanner/HeroBanner.fragment.generated';
import { TwoColumnTextFragmentDoc } from '../../app/sections/twoColumnText/TwoColumnText.fragment.generated';
import { SectionVideoCarouselFragmentDoc } from '../../app/sections/videoBlock/SectionVideoCarousel.fragment.generated';
import { SocialMediaCtaLargeFragmentDoc } from '../../app/sections/igFeed/IGFeed.fragment.generated';
import { EditorialTileFragmentDoc } from '../../app/sections/multiColumnContent/MultiColumnContent.fragment.generated';
import { SectionServiceDescriptionBlockFragmentDoc } from '../../app/sections/serviceDescriptionBlock/ServiceDescriptionBlock.fragment.generated';
import { SectionSearchTermListFragmentDoc } from '../../app/sections/popularSearches/PopularSearches.fragment.generated';
import { BrandLogoGridFragmentDoc } from '../../app/sections/brandLogoGrid/BrandLogoGrid.fragment.generated';
import { SectionPiercingGridFragmentDoc } from '../../app/sections/piercingGrid/PiercingGrid.fragment.generated';
import { SectionBlogCarouselFragmentDoc } from '../../app/sections/blogCarousel/BlogCarousel.fragment.generated';
import { TextAndImageBlockSectionFragmentDoc } from '../../app/sections/textAndImageBlockSection/TextAndImageBlockSection.fragment.generated';
import { EditorialTextFragmentDoc } from '../../app/sections/brandTextSection/BrandTextSection.fragment.generated';
import { SectionCuratedBlogFragmentDoc } from '../../app/sections/sectionCuratedBlog/SectionCuratedBlog.fragment.generated';
import { SectionTestimonialFragmentDoc } from '../../app/sections/campaignLanding/sectionTestimonial/SectionTestimonial.fragment.generated';
import { SectionFullWidthVideoFragmentDoc } from '../../app/sections/salonsMenuVideoSection/SalonsMenuVideoSection.fragment.generated';
import { SectionCategoryCarouselFragmentDoc } from '../../app/sections/collectionCarousel/CollectionCarousel.fragment.generated';
import { SectionGiftFinderFragmentDoc } from '../../app/sections/campaignLanding/sectionGiftFinder/SectionGiftFinder.fragment.generated';
import { SectionSalonBookingFragmentDoc } from '../../app/sections/salonBooking/SalonBooking.fragment.generated';
import { SectionShopByGridFragmentDoc } from '../../app/sections/campaignLanding/sectionShopByGrid/SectionShopByGrid.fragment.generated';
import { SectionSustainableSalonLocationFragmentDoc } from '../../app/sections/sectionSustainableSalonLocation/SectionSustainableSalonLocation.fragment.generated';
import { SectionFullWidthImageAndCopyFragmentDoc } from '../../app/sections/imageWithCard/ImageWithCard.fragment.generated';
import { SectionSustainableServicesMenuFragmentDoc } from '../../app/sections/serviceMenu/ServiceMenu.fragment.generated';
import { SectionFullWidthImageFragmentDoc } from '../../app/sections/sectionFullWidthImage/SectionFullWidthImage.fragment.generated';
import { SectionCollectionDropDownFragmentDoc } from '../../app/sections/SectionCollectionDropDown/SectionCollectionDropDown.fragment.generated';
import { SectionsAccordionFragmentDoc } from '../../app/sections/offersScreen/OfferScreen.fragment.generated';
import { SectionOfferFragmentDoc } from '../../app/sections/campaignLanding/campaignLandingOffers/CampaignLandingOffers.fragment.generated';
import { SectionHeroBannerWithLinkFragmentDoc } from '../../app/sections/LandingHeroBanner/LandingHeroBanner.fragment.generated';
import { OfferTilesFragmentDoc } from '../../app/sections/offerTiles/OfferTiles.fragment.generated';
import { SectionAccordionWithListFragmentDoc } from '../../app/sections/SustainableSalonAccordion/SustainableSalonAccordion.fragment.generated';
import { SectionAccordionWithStoreFragmentDoc } from '../../app/sections/participatingSalonAccordion/ParticipatingSalonAccordion.fragment.generated';
import { RolesFragmentDoc } from '../../app/sections/careersRoles/Roles.fragment.generated';
import { ReviewStepsFragmentDoc } from '../../app/sections/reviewSteps/ReviewSteps.fragment.generated';
import { FeatureProductCarouselTabbedFragmentDoc } from '../../app/sections/productRecommendation/FeatureProductCarouselTabbed.fragment.generated';
import { SectionImageWithTextFragmentDoc } from '../../app/sections/sectionImageWithText/SectionImageWithText.fragment.generated';
import { EmployeeBenefitsFragmentDoc } from '../../app/sections/employeeBenefits/EmployeeBenefits.fragment.generated';
import { CareersCtaFragmentFragmentDoc } from '../../app/sections/careersCTA/CareersCTA.fragment.generated';
import { SectionContentCardFragmentDoc } from '../../app/sections/contentCards/ContentCards.fragment.generated';
import { SectionCompetitionBannerFragmentDoc } from '../../app/sections/sectionCompetitionBanner/SectionCompetitionBanner.fragment.generated';
import { JoinCtApanelFragmentDoc } from '../../app/sections/styleSocietyBlock/StyleSocietyBlock.fragment.generated';
import { Section404FragmentDoc } from '../../app/sections/Page404/Page404.fragment.generated';
import { SectionProductCompareFragmentDoc } from '../../app/sections/sectionProductCompare/SectionProductCompare.fragment.generated';
import { SectionBlogGridFragmentDoc } from '../../app/sections/sectionBlogGrid/SectionBlogGrid.fragment.generated';
import { SectionIFrameEmbedFragmentDoc } from '../../app/sections/sectionIFrameEmbed/SectionIFrameEmbed.fragment.generated';
import { SectionFeatureGridFragmentDoc } from '../../app/sections/thermalProtectionBlock/ThermalProtectionBlock.fragrment.generated';
import { FooterFragmentDoc } from '../../app/sections/footer/Footer.fragment.generated';
import { HeaderFragmentDoc } from '../../app/sections/header/Header.fragment.generated';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CMsPagesQueryVariables = Types.Exact<{
  url?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CMsPagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'CMSPage', id: string, hideFromSitemap?: boolean | null, title: string, url?: string | null, bannerImage?: { __typename?: 'Asset', fileName: string, width?: number | null, height?: number | null, url: string } | null, sections: Array<{ __typename: 'BrandLogoGrid', id: string, subtext?: string | null, carousel?: boolean | null, hdText: string, brandsBrands: Array<{ __typename?: 'BrandsBrandLogo', brandName?: string | null, brandTags: Array<Types.BrandTags>, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', url: string } | null }>, cta?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null } | null } | { __typename: 'EditorialText', id: string, adminTitle?: string | null, textAlignment?: Types.TextAlignment | null, editorialContent?: { __typename?: 'RichText', html: string } | null } | { __typename: 'EditorialTile', id: string, name?: string | null, heading?: string | null, tiles: Array<{ __typename?: 'EditorialItem', description?: string | null, heading?: string | null, image: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } }>, cta?: { __typename?: 'Cta', buttonText?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null, url?: string | null } | null } | { __typename: 'FeatureProductCarouselTabbed', id: string, adminTitle?: string | null, stage: Types.Stage, navigationPostion?: Types.LinkPositions | null, tabbedContent: Array<{ __typename: 'ProductCarouselCollection', id: string, tabName: string, shopifyCollectionId: string } | { __typename: 'ProductCarouselCurated', id: string, tabName: string, products: Array<{ __typename?: 'ProductPage', id: string, shopifyId: string, adminTitle?: string | null, publishedAt?: any | null, product?: { __typename?: 'ShopifyStorefront_Product', title: string, vendor: string, handle: string, variants: { __typename: 'ShopifyStorefront_ProductVariantConnection', nodes: Array<{ __typename?: 'ShopifyStorefront_ProductVariant', id: string, image?: { __typename?: 'ShopifyStorefront_Image', url: any, altText?: string | null, width?: number | null, height?: number | null } | null, price: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode }, compareAtPrice?: { __typename?: 'ShopifyStorefront_MoneyV2', amount: any, currencyCode: Types.ShopifyStorefront_CurrencyCode } | null, product: { __typename?: 'ShopifyStorefront_Product', handle: string, title: string } }> } } | null }> } | { __typename: 'ProductCarouselUnbxd', id: string, tabName: string, stage: Types.Stage, unbxdSectionId?: string | null }>, header?: { __typename?: 'RichText', html: string } | null } | { __typename: 'HeroBanner', id: string, heading?: string | null, showBreadcrumbs?: boolean | null, subtext?: string | null, layout?: Types.HeroLayout | null, textBlockLayout?: Types.HeroTextBlockLayout | null, logo?: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null, width?: number | null } | null, desc?: { __typename?: 'RichText', html: string } | null, contentColour?: { __typename?: 'Color', hex: any } | null, mobileImage?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string } | null, ctaButtons: Array<{ __typename?: 'Cta', id: string, buttonText?: string | null, openInNewWindow?: boolean | null, stage: Types.Stage, url?: string | null, ctaType?: Types.CtaType | null }>, desktopImage: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null } } | { __typename: 'JoinCTApanel', id: string, textPositionLeft?: boolean | null, textBlockLayout?: Types.HeroTextBlockLayout | null, desktopImage: { __typename?: 'Asset', altText?: string | null, url: string, mimeType?: string | null }, mobileImage?: { __typename?: 'Asset', altText?: string | null, url: string, mimeType?: string | null } | null, textArea?: { __typename?: 'RichText', raw: any, html: string } | null, contentColour?: { __typename?: 'Color', hex: any } | null, ctAs: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null }> } | { __typename: 'OfferTiles', id: string, name?: string | null, offerItems: Array<{ __typename?: 'OfferItem', heading?: string | null, buttonText?: string | null, url: string, topLeftBoxText?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } | null }>, cta?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, url?: string | null, openInNewWindow?: boolean | null } | null } | { __typename: 'Proposition', id: string, propositionName?: string | null, propositions: Array<{ __typename?: 'PropositionItem', id: string, loadInNewWindow?: boolean | null, propositionUrl?: string | null, propositiontext?: string | null }> } | { __typename: 'ReviewSteps', id: string, heading?: string | null, steps: Array<{ __typename?: 'AccordionContent', title?: string | null, content?: { __typename?: 'RichText', html: string } | null }> } | { __typename: 'Section404', id: string, title?: string | null, subtitle?: string | null, buttons: Array<{ __typename?: 'Cta', url?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null, buttonText?: string | null }> } | { __typename: 'SectionAccordionWithList', id: string, title?: string | null, logo?: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } | null, accordionItems: Array<{ __typename?: 'AccordionContentWithButton', title?: string | null, items: Array<string>, button?: { __typename?: 'Cta', ctaType?: Types.CtaType | null, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null } | null }> } | { __typename: 'SectionAccordionWithStore', id: string, heading?: string | null, accordionContent: Array<{ __typename?: 'AccordionContentWithLogoAndButton', title?: string | null, content: Array<{ __typename?: 'StoreItem', heading?: string | null, address?: string | null, logo?: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } | null, linkUrl: Array<{ __typename?: 'Link', linkText: string, url?: string | null, openInNewWindow?: boolean | null }>, button: Array<{ __typename?: 'Cta', ctaType?: Types.CtaType | null, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null }> }> }> } | { __typename: 'SectionArticleHeroBanner', id: string, title?: string | null, heading?: string | null, subHeading?: string | null, authorName?: string | null, authorTitle?: string | null, heroImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, altText?: string | null, url: string } | null } | { __typename: 'SectionAssistance', id: string } | { __typename: 'SectionBlogCarousel', id: string, heading?: string | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, articles: Array<{ __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, publishedAt?: any | null, publishDate?: any | null, url?: string | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, width?: number | null, url: string, height?: number | null } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null }> } | { __typename: 'SectionBlogGrid', id: string, title?: string | null, buttonText?: string | null, enableDarkBackground?: boolean | null, itemsPerRowDesktop?: number | null, featuredArticles: Array<{ __typename?: 'ArticlePage', shortDescription?: string | null, title?: string | null, publishedAt?: any | null, publishDate?: any | null, url?: string | null, author?: { __typename?: 'BlogAuthor', authorName?: string | null } | null, thumbnail?: { __typename?: 'Asset', height?: number | null, altText?: string | null, width?: number | null, url: string } | null, blog?: { __typename?: 'BlogPage', title?: string | null, url?: string | null } | null }> } | { __typename: 'SectionBlogListing', id: string } | { __typename: 'SectionBoxedContent', id: string } | { __typename: 'SectionBuyGuideProduct', id: string } | { __typename: 'SectionCategoryCarousel', id: string, title?: string | null, tilesAlignment: Types.TilesAlignment, backgroundColour?: { __typename?: 'Color', hex: any } | null, categories: Array<{ __typename?: 'EditorialItem', heading?: string | null, url?: string | null, image: { __typename?: 'Asset', altText?: string | null, id: string, url: string } }> } | { __typename: 'SectionCollectionDropDown', id: string, adminTitle?: string | null, headline?: string | null, shopifyCollections: Array<{ __typename?: 'CollectionLink', title: string, id: string, collectionPage?: { __typename?: 'CollectionPage', collection?: { __typename?: 'ShopifyStorefront_Collection', handle: string, title: string } | null } | null }> } | { __typename: 'SectionCollectionFeatureLarge', id: string } | { __typename: 'SectionCollectionMain', id: string } | { __typename: 'SectionCompetitionBanner', id: string, adminTitle?: string | null, heading?: string | null, description?: string | null, subtext?: string | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, button?: { __typename?: 'Cta', id: string, buttonText?: string | null, url?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null } | null } | { __typename: 'SectionContentCard', id: string, headingText?: string | null, adminTitle?: string | null, cards: Array<{ __typename?: 'ModuleImageAndText', contentAlignment?: Types.TextAlignment | null, heading?: string | null, id: string, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, button?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, openInNewWindow?: boolean | null, url?: string | null } | null, buttons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null, id: string }>, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, url: string, width?: number | null } | null, text?: { __typename?: 'RichText', html: string } | null }> } | { __typename: 'SectionContentLinkBlock', id: string, adminTitle?: string | null, contentBlock: Array<{ __typename?: 'ModuleIconAndText', adminTitle?: string | null, headingText?: string | null, linkText?: string | null, linkUrl?: string | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, icon?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } | null }> } | { __typename: 'SectionCuratedBlog', id: string, heading?: string | null, blogItem: Array<{ __typename?: 'BlogTile', id: string, name?: string | null, description?: { __typename?: 'RichText', text: string } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, button?: { __typename?: 'Cta', url?: string | null, buttonText?: string | null, id: string } | null }> } | { __typename: 'SectionFeatureGrid', id: string, heading?: string | null, description?: string | null, url?: { __typename?: 'Link', linkText: string, url?: string | null } | null, products: Array<{ __typename?: 'ProductCarouselCurated', products: Array<{ __typename?: 'ProductPage', id: string, shopifyId: string }> }> } | { __typename: 'SectionFeaturedPositionsBlock', id: string, heading?: string | null, bkgColor: { __typename?: 'Color', hex: any }, positions: Array<{ __typename?: 'ModuleImageAndText', heading?: string | null, contentAlignment?: Types.TextAlignment | null, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } | null, text?: { __typename?: 'RichText', html: string } | null, button?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null } | null }> } | { __typename: 'SectionFullWidthImage', id: string, imageLayout?: Types.ImageLayout | null, images: Array<{ __typename?: 'Asset', altText?: string | null, url: string, size?: number | null, mimeType?: string | null }> } | { __typename: 'SectionFullWidthImageAndCopy', id: string, adminTitle?: string | null, layout?: Types.HeroLayout | null, title?: string | null, subtitle?: string | null, copy?: string | null, desktopImg?: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null, width?: number | null } | null, mobileImage?: { __typename?: 'Asset', altText?: string | null, url: string, height?: number | null, width?: number | null } | null, ctaButton: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> } | { __typename: 'SectionFullWidthVideo', id: string, adminTitle?: string | null, videoTitle?: string | null, salonsVideoDescription?: string | null, desktopLogoHeader?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, mobileLogoHeader?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, tabletLogoHeader?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, videoFile?: { __typename?: 'Asset', url: string, height?: number | null, width?: number | null } | null, thumbnail?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null } | { __typename: 'SectionGiftFinder', id: string, heading?: string | null, preezieGuideKey?: string | null, questionTitle?: string | null, backgroundColor?: { __typename?: 'Color', hex: any } | null, image?: { __typename?: 'Asset', altText?: string | null, width?: number | null, height?: number | null, url: string } | null, questions: Array<{ __typename?: 'GiftFinderQuestion', id: string, question?: string | null, options: Array<{ __typename?: 'ModuleIconAndText', id: string, adminTitle?: string | null, icon?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null }> }> } | { __typename: 'SectionHeroBannerWithLink', id: string, title?: string | null, menuBackground?: string | null, bannerDesktopImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, mobileImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, tabletImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, logoDesktopImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, logoMobileImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, logoTabletImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, links: Array<{ __typename?: 'Cta', buttonText?: string | null, url?: string | null, id: string }> } | { __typename: 'SectionIFrameEmbed', id: string, iFrameEmbed?: string | null } | { __typename: 'SectionIconsWithText', id: string, adminTitle?: string | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, iconsAndText: Array<{ __typename?: 'ModuleIconAndText', adminTitle?: string | null, headingText?: string | null, icon?: { __typename?: 'Asset', altText?: string | null, url: string, width?: number | null, height?: number | null } | null }> } | { __typename: 'SectionImageAndTextGrid', id: string, imageAndTextBlocks: Array<{ __typename?: 'ModuleImageAndText', heading?: string | null, contentAlignment?: Types.TextAlignment | null, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, id: string, text?: { __typename?: 'RichText', html: string } | null, image?: { __typename?: 'Asset', url: string, altText?: string | null } | null, buttons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null }> }> } | { __typename: 'SectionImageTextOverlay', id: string } | { __typename: 'SectionImageWithText', id: string, title?: string | null, imageWithText?: { __typename?: 'ModuleImageAndText', backgroundColour?: Types.SectionBackground | null, heading?: string | null, id: string, imagePosition?: Types.ImagePosition | null, imageWidth?: string | null, contentAlignment?: Types.TextAlignment | null, buttons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null }>, text?: { __typename?: 'RichText', html: string } | null, image?: { __typename?: 'Asset', altText?: string | null, fileName: string, url: string, height?: number | null, size?: number | null, width?: number | null } | null, button?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null } | null } | null } | { __typename: 'SectionOffer', id: string, offerName?: string | null, offerBgColor?: { __typename?: 'Color', hex: any } | null, offerItems: Array<{ __typename?: 'OfferItem', heading?: string | null, buttonText?: string | null, url: string, topLeftBoxText?: string | null, description?: string | null, brandImage?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null, image?: { __typename?: 'Asset', height?: number | null, width?: number | null, url: string, altText?: string | null } | null }> } | { __typename: 'SectionPageNavigation', id: string } | { __typename: 'SectionPiercingGrid', id: string, piercingGridTabs: Array<{ __typename?: 'PiercingGridTab', name?: string | null, piercingGridItems: Array<{ __typename?: 'PiercingGridItem', name?: string | null, description?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null }> }> } | { __typename: 'SectionProductCompare', id: string, title?: string | null, collections: Array<{ __typename?: 'ProductCompareTable', id: string, displayTitle?: string | null, collectionHandle?: string | null }>, tableRows: Array<{ __typename: 'MetafieldListItem', id: string, metafieldLabel?: string | null, metafieldReference?: string | null }> } | { __typename: 'SectionProductSpotlightGrid', id: string } | { __typename: 'SectionSalon', id: string, salonNotes?: string | null, name?: string | null, bg?: string | null, salonServices: Array<{ __typename?: 'SalonService', description?: string | null, fromText?: string | null, id: string, name?: string | null, salonNote?: string | null, subHeading?: string | null, button?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null } | null }>, policyLink?: { __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null } | null } | { __typename: 'SectionSalonBooking', id: string, adminTitle?: string | null, salonWelcomeImageHeading1?: string | null, salonWelcomeImageHeading2?: string | null, promoBannerText?: string | null, salonCreateAnAccountSubtext?: string | null, logo?: { __typename?: 'Asset', url: string } | null, salonWelcomeImage1?: { __typename?: 'Asset', id: string, url: string, altText?: string | null } | null, salonWelcomeImage2?: { __typename?: 'Asset', id: string, url: string, altText?: string | null } | null, promoBannerBackgroundColor?: { __typename?: 'Color', hex: any } | null, promoBannerCta?: { __typename?: 'Cta', buttonText?: string | null, url?: string | null, ctaType?: Types.CtaType | null } | null } | { __typename: 'SectionSalonMenu', id: string, menus: Array<{ __typename?: 'MenuType', name?: string | null, menuSublist: Array<{ __typename?: 'MenuSublist', sublistItems: Array<{ __typename?: 'MenuSublistItem', title?: string | null, items: Array<string> }> }> }> } | { __typename: 'SectionSearchTermList', id: string, adminTitle?: string | null, headline?: string | null, searchTerms: Array<string> } | { __typename: 'SectionSeoText', id: string, adminTitle?: string | null, textLayout?: Types.TextLayout | null, content?: { __typename?: 'RichText', html: string } | null, colun2Content?: { __typename?: 'RichText', html: string } | null } | { __typename: 'SectionServiceDescriptionBlock', id: string, imagePosition?: Types.ImagePosition | null, heading?: string | null, descriptionText?: string | null, button?: { __typename?: 'Cta', url?: string | null, buttonText?: string | null, openInNewWindow?: boolean | null, ctaType?: Types.CtaType | null } | null, content?: { __typename?: 'RichText', html: string } | null, desktopImg?: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null } | null, mobileImg?: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null } | null, tabletImg?: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null } | null } | { __typename: 'SectionShopByGrid', id: string, title?: string | null, description?: string | null, categoryTiles: Array<{ __typename?: 'EditorialItem', heading?: string | null, url?: string | null, description?: string | null, image: { __typename?: 'Asset', altText?: string | null, height?: number | null, size?: number | null, width?: number | null, url: string } }> } | { __typename: 'SectionSocialMediaCtaSmall', id: string } | { __typename: 'SectionSustainableSalonLocation', id: string, title?: string | null, subtitle?: string | null, locations: Array<string> } | { __typename: 'SectionSustainableServicesMenu', id: string, title?: string | null, salonserviceDescription?: string | null, policyLink?: { __typename?: 'Link', linkText: string, url?: string | null, openInNewWindow?: boolean | null } | null, servicesMenu: Array<{ __typename?: 'ServicesMenu', title?: string | null, description?: string | null, tiles: Array<{ __typename?: 'SalonService', name?: string | null, description?: string | null, subHeading?: string | null, fromText?: string | null, salonNote?: string | null, button?: { __typename?: 'Cta', buttonText?: string | null, url?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null } | null }> }> } | { __typename: 'SectionTestimonial', id: string, heading?: string | null, bgColor?: { __typename?: 'Color', hex: any } | null, testimonials: Array<{ __typename?: 'BlogTile', id: string, name?: string | null, expertName?: string | null, topLeftBoxText?: string | null, postedDate?: any | null, description?: { __typename?: 'RichText', text: string } | null, image?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null, button?: { __typename?: 'Cta', id: string, url?: string | null, buttonText?: string | null } | null }> } | { __typename: 'SectionTextBlock', id: string } | { __typename: 'SectionTextBlockWithCTAs', id: string, adminTitle?: string | null, heading?: string | null, textAlignment?: Types.TextAlignment | null, backgroundColour?: { __typename?: 'Color', hex: any } | null, textContent?: { __typename?: 'SectionTextBlockWithCTAsTextContentRichText', html: string, text: string, markdown: string, raw: any } | null, buttonCta: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, url?: string | null, openInNewWindow?: boolean | null }> } | { __typename: 'SectionTwoColumn', id: string } | { __typename: 'SectionVideoCarousel', id: string, headline?: string | null, videos: Array<{ __typename?: 'ModuleVideo', id: string, altText?: string | null, name?: string | null, time?: string | null, video?: { __typename?: 'Asset', id: string, url: string } | null, thumbnail?: { __typename?: 'Asset', id: string, url: string } | null }> } | { __typename: 'SectionsAccordion', id: string, headline?: string | null, accordionLayout?: Types.AccordionLayout | null, accordionSections: Array<{ __typename?: 'AccordionContent', title?: string | null, content?: { __typename?: 'RichText', html: string } | null }> } | { __typename: 'SocialMediaCtaLarge', id: string, adminTitle?: string | null, handle?: string | null, ctaText?: string | null, platformLinks: Array<{ __typename?: 'LinkIcon', linkUrl?: string | null, openInNewWindow?: boolean | null, iconFile?: { __typename?: 'Asset', url: string, fileName: string } | null }>, imageGrid: Array<{ __typename?: 'Asset', url: string, fileName: string, altText?: string | null }>, fullWidthTemplates: Array<{ __typename?: 'CMSPage', url?: string | null }> } | { __typename: 'StoreLocator', id: string } | { __typename: 'UspSection', id: string, heading?: string | null, desc?: { __typename?: 'RichText', text: string } | null, bgColour?: { __typename?: 'Color', hex: any } | null, items: Array<{ __typename?: 'UspItem', id: string, title?: string | null, quantity?: string | null, icon?: { __typename?: 'Asset', altText?: string | null, height?: number | null, width?: number | null, url: string } | null }> }>, pageMeta?: { __typename?: 'PageMeta', metaDescription?: string | null, metaTitle?: string | null } | null }>, websiteConfigs: Array<{ __typename?: 'WebsiteConfig', footer?: { __typename?: 'FooterConfig', androidAppStoreUrl?: string | null, iOsAppStoreUrl?: string | null, instagramUrl?: string | null, facebookUrl?: string | null, tiktokUrl?: string | null, youtubeUrl?: string | null, styleSocietyHeading?: string | null, styleSocietyContent?: string | null, socialLinksHeadingText?: string | null, acknowledgementTitle?: string | null, footerLogo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, paymentLogos: Array<{ __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string }>, styleSocietyCta?: { __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null } | null, legalLinks: Array<{ __typename?: 'Link', id: string, linkText: string, openInNewWindow?: boolean | null, url?: string | null }>, helpCentreBox?: { __typename?: 'RichText', html: string, text: string } | null, footerLinks: Array<{ __typename?: 'LinkCollection', id: string, links: Array<{ __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string }>, headingLink?: { __typename?: 'Link', url?: string | null, openInNewWindow?: boolean | null, linkText: string, id: string } | null }>, acknowledgementContent?: { __typename?: 'RichText', html: string, text: string } | null, assistanceCtAs: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, id: string, openInNewWindow?: boolean | null, url?: string | null }>, uniqueSellingPoints: Array<{ __typename?: 'FooterUsp', description?: string | null, headingText?: string | null, id: string, uspIcon: { __typename?: 'Asset', height?: number | null, url: string, width?: number | null, altText?: string | null, id: string } }> } | null, header?: { __typename?: 'HeaderConfig', id: string, promoBarExpiry?: any | null, logo: { __typename?: 'Asset', id: string, altText?: string | null, url: string, mimeType?: string | null }, megaMenu?: { __typename?: 'MegaMenu', navigationItems: Array<{ __typename?: 'TopNavigation', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn1: Array<{ __typename?: 'MenuColumn1', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menurow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null, menuColumn2?: { __typename?: 'MenuColumn2', id: string, name?: string | null, bottomLinkText?: string | null, shopAllUrl?: string | null, menuRow: Array<{ __typename?: 'MenuRow', id: string, headingText?: string | null, name?: string | null, url?: string | null }> } | null }> } | null }>, pageBlogArticles: Array<{ __typename?: 'ArticlePage', id: string, url?: string | null, title?: string | null, shortDescription?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, blog?: { __typename?: 'BlogPage', title?: string | null } | null }>, offerTiles: Array<{ __typename?: 'MenuTile', id: string, name?: string | null, image?: { __typename?: 'Asset', altText?: string | null, url: string } | null, link?: { __typename?: 'Link', linkText: string, url?: string | null } | null }> }> }> } | null, mobileMenuFooter: Array<{ __typename?: 'LinkPromoImage', id: string, adminTitle?: string | null, imageLink?: string | null, promoImage?: { __typename?: 'Asset', url: string } | null }>, brandsBrandsLogos: Array<{ __typename?: 'BrandsBrandLogo', id: string, brandName?: string | null, brandUrl?: string | null, brandLogo?: { __typename?: 'Asset', id: string, url: string } | null }>, promoBarContent?: { __typename?: 'RichText', text: string, html: string } | null, promoBarBackgroundColour?: { __typename?: 'Color', css: string, hex: any, rgba: { __typename?: 'RGBA', a: any, b: any, g: any, r: any } } | null, storeLocatorLinks?: { __typename?: 'Storelocatornav', id: string, name?: string | null, storeLocatorLinks: Array<{ __typename?: 'Link', id: string, linkText: string, url?: string | null, openInNewWindow?: boolean | null }> } | null, sectionAccountSignupCta?: { __typename?: 'SectionAccountSignupCta', benefits: Array<string>, id: string, headline?: { __typename?: 'RichText', html: string } | null, signupButtons: Array<{ __typename?: 'Cta', buttonText?: string | null, ctaType?: Types.CtaType | null, openInNewWindow?: boolean | null, url?: string | null }> } | null } | null }> };


export const CMsPagesDocument = gql`
    query cMSPages($url: String) {
  pages: cMSPages(where: {url: $url}, first: 1) {
    id
    hideFromSitemap
    title
    url
    bannerImage {
      fileName
      width
      height
      url
    }
    sections(first: 40) {
      __typename
      ... on Node {
        id
        __typename
      }
      ... on SectionSalon {
        ...SalonServices
      }
      ... on Proposition {
        ...Proposition
      }
      ... on UspSection {
        ...UspSection
      }
      ... on SectionTextBlockWithCTAs {
        ...SectionTextBlockWithCTAs
      }
      ... on SectionSalonMenu {
        ...SectionSalonMenu
      }
      ... on HeroBanner {
        ...HeroBanner
      }
      ... on SectionSeoText {
        ...TwoColumnText
      }
      ... on SectionVideoCarousel {
        ...SectionVideoCarousel
      }
      ... on SocialMediaCtaLarge {
        ...SocialMediaCtaLarge
      }
      ... on EditorialTile {
        ...EditorialTile
      }
      ... on SectionServiceDescriptionBlock {
        ...SectionServiceDescriptionBlock
      }
      ... on SectionSearchTermList {
        ...SectionSearchTermList
      }
      ... on BrandLogoGrid {
        ...BrandLogoGrid
      }
      ... on SectionPiercingGrid {
        ...SectionPiercingGrid
      }
      ... on SectionBlogCarousel {
        ...SectionBlogCarousel
      }
      ... on SectionImageAndTextGrid {
        ...TextAndImageBlockSection
      }
      ... on EditorialText {
        ...EditorialText
      }
      ... on SectionCuratedBlog {
        ...SectionCuratedBlog
      }
      ... on SectionTestimonial {
        ...SectionTestimonial
      }
      ... on SectionFullWidthVideo {
        ...SectionFullWidthVideo
      }
      ... on SectionCategoryCarousel {
        ...SectionCategoryCarousel
      }
      ... on SectionGiftFinder {
        ...SectionGiftFinder
      }
      ... on SectionSalonBooking {
        ...SectionSalonBooking
      }
      ... on SectionShopByGrid {
        ...SectionShopByGrid
      }
      ... on SectionSustainableSalonLocation {
        ...SectionSustainableSalonLocation
      }
      ... on SectionFullWidthImageAndCopy {
        ...SectionFullWidthImageAndCopy
      }
      ... on SectionSustainableServicesMenu {
        ...SectionSustainableServicesMenu
      }
      ... on SectionFullWidthImage {
        ...SectionFullWidthImage
      }
      ... on SectionCollectionDropDown {
        ...SectionCollectionDropDown
      }
      ... on SectionsAccordion {
        ...SectionsAccordion
      }
      ... on SectionOffer {
        ...SectionOffer
      }
      ... on SectionHeroBannerWithLink {
        ...SectionHeroBannerWithLink
      }
      ... on SectionArticleHeroBanner {
        id
        title
        heading
        subHeading
        authorName
        authorTitle
        heroImage {
          height
          width
          altText
          url
        }
      }
      ... on OfferTiles {
        ...OfferTiles
      }
      ... on SectionAccordionWithList {
        ...SectionAccordionWithList
      }
      ... on SectionAccordionWithStore {
        ...SectionAccordionWithStore
      }
      ... on SectionFeaturedPositionsBlock {
        ...Roles
      }
      ... on ReviewSteps {
        ...ReviewSteps
      }
      ... on FeatureProductCarouselTabbed {
        ...FeatureProductCarouselTabbed
      }
      ... on SectionImageWithText {
        ...SectionImageWithText
      }
      ... on SectionIconsWithText {
        ...EmployeeBenefits
      }
      ... on SectionContentLinkBlock {
        ...CareersCTAFragment
      }
      ... on SectionContentCard {
        ...SectionContentCard
      }
      ... on SectionCompetitionBanner {
        ...SectionCompetitionBanner
      }
      ... on JoinCTApanel {
        ...JoinCTApanel
      }
      ... on Section404 {
        ...Section404
      }
      ... on SectionProductCompare {
        ...SectionProductCompare
      }
      ... on SectionBlogGrid {
        ...SectionBlogGrid
      }
      ... on SectionIFrameEmbed {
        ...SectionIFrameEmbed
      }
      ... on SectionFeatureGrid {
        ...SectionFeatureGrid
      }
    }
    pageMeta {
      metaDescription
      metaTitle
    }
  }
  websiteConfigs(first: 1) {
    footer {
      ...Footer
    }
    header {
      ...Header
    }
  }
}
    ${SalonServicesFragmentDoc}
${PropositionFragmentDoc}
${UspSectionFragmentDoc}
${SectionTextBlockWithCtAsFragmentDoc}
${SectionSalonMenuFragmentDoc}
${HeroBannerFragmentDoc}
${TwoColumnTextFragmentDoc}
${SectionVideoCarouselFragmentDoc}
${SocialMediaCtaLargeFragmentDoc}
${EditorialTileFragmentDoc}
${SectionServiceDescriptionBlockFragmentDoc}
${SectionSearchTermListFragmentDoc}
${BrandLogoGridFragmentDoc}
${SectionPiercingGridFragmentDoc}
${SectionBlogCarouselFragmentDoc}
${TextAndImageBlockSectionFragmentDoc}
${EditorialTextFragmentDoc}
${SectionCuratedBlogFragmentDoc}
${SectionTestimonialFragmentDoc}
${SectionFullWidthVideoFragmentDoc}
${SectionCategoryCarouselFragmentDoc}
${SectionGiftFinderFragmentDoc}
${SectionSalonBookingFragmentDoc}
${SectionShopByGridFragmentDoc}
${SectionSustainableSalonLocationFragmentDoc}
${SectionFullWidthImageAndCopyFragmentDoc}
${SectionSustainableServicesMenuFragmentDoc}
${SectionFullWidthImageFragmentDoc}
${SectionCollectionDropDownFragmentDoc}
${SectionsAccordionFragmentDoc}
${SectionOfferFragmentDoc}
${SectionHeroBannerWithLinkFragmentDoc}
${OfferTilesFragmentDoc}
${SectionAccordionWithListFragmentDoc}
${SectionAccordionWithStoreFragmentDoc}
${RolesFragmentDoc}
${ReviewStepsFragmentDoc}
${FeatureProductCarouselTabbedFragmentDoc}
${SectionImageWithTextFragmentDoc}
${EmployeeBenefitsFragmentDoc}
${CareersCtaFragmentFragmentDoc}
${SectionContentCardFragmentDoc}
${SectionCompetitionBannerFragmentDoc}
${JoinCtApanelFragmentDoc}
${Section404FragmentDoc}
${SectionProductCompareFragmentDoc}
${SectionBlogGridFragmentDoc}
${SectionIFrameEmbedFragmentDoc}
${SectionFeatureGridFragmentDoc}
${FooterFragmentDoc}
${HeaderFragmentDoc}`;

export function useCMsPagesQuery(options?: Omit<Urql.UseQueryArgs<CMsPagesQueryVariables>, 'query'>) {
  return Urql.useQuery<CMsPagesQuery, CMsPagesQueryVariables>({ query: CMsPagesDocument, ...options });
};