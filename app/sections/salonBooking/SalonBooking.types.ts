import { Customer } from '@shopify/hydrogen/storefront-api-types'

import { SectionSalonBookingFragment } from './SalonBooking.fragment.generated'

export enum bookingTypes {
  salon = 'salon',
  piercing = 'piercing',
}

export type SalonHeaderProps = {
  logo:
    | {
        url: string
      }
    | null
    | undefined
  activeStep: number
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export type SalonBookingProps = {
  section: SectionSalonBookingFragment
  isAuthenticated: boolean
  googleKey: string
  customer?: Customer
}

export type SalonBookingWelcomeProps = {
  salonBooking: SectionSalonBookingFragment
  bookingType: string
  setBookingType: React.Dispatch<React.SetStateAction<string>>
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
  isAuthenticated: boolean
}

export type SalonBookingCreateAccountProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export type SalonBookingPromoBannerProps = {
  promoBannerBackgroundColor: SectionSalonBookingFragment['promoBannerBackgroundColor']
  promoBannerCta: SectionSalonBookingFragment['promoBannerCta']
  promoBannerText: SectionSalonBookingFragment['promoBannerText']
}

export type SalonBookingHairLengthProps = {
  saloonbookingstep: number
  hairLength: string
  setHairLength: React.Dispatch<React.SetStateAction<string>>
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export type HairLengthDataProps = {
  icon_url: string
  id: string
  internalid: string
  sequence: string
  sub_title: string
  title: string
}

export type SalonBookingProgressBarProps = {
  currentStep: number
  totalSteps: number
  className?: string
}

export type BookingTitleProps = {
  title?: string
  subTitle?: string
  isAccount?: boolean
}

export type BookingCardProps = {
  title?: string
  subTitle?: string
  time?: string
  price?: number
  addons?: string | null
  isAddOns?: boolean
  id?: string
  setServiceId?: React.Dispatch<React.SetStateAction<string | null>>
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export type SalonBookingSelectStoreProps = {
  googleKey: string
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export type SalonBookingSelectServiceProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export type SalonBookingSelectedStoreProps = {
  setIsSelectedStore: React.Dispatch<React.SetStateAction<boolean>>
  googleKey: string
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export type SalonBookingChoiceStoreProps = {
  setIsSelectedStore: React.Dispatch<React.SetStateAction<boolean>>
}

export type SalonBookingSelectStylistProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export type StoreSearchResultsProps = {
  description: string
  place_id: string
}

export type LocationListingsProps = {
  id: number
  name: string
  address1: string
  address2: string
  city: string
  zip: string
  province: string
  country: string
  created_at: string
  updated_at: string
  country_code: string
  country_name: string
  province_code: string
  legacy: boolean
  active: boolean
  admin_graphql_api_id: string
  localized_country_name: string
  localized_province_name: string
  handle: null | string
  distance: number
  location_internal_id: number
  shortcuts_site_id: number
  style_society_participant: boolean
  latitude: string
  longitude: string
  store_features: {
    enable_click_collect: boolean
    enable_rendr_delivery: boolean
  }
  store_preference: {
    enable_piercing: boolean
    enable_salon: boolean
    enable_store_to_door: boolean
    enable_click_collect: boolean
  }
  bookable_service: {
    piercing_bookable: boolean
    salon_bookable: boolean
  }
  available_service: {
    available_for_piercing: boolean
    available_for_salon: boolean
  }
  featured_store: boolean
  salon_services_price: {
    cut_style_price: {
      store_men_cut_style_price: string
      store_women_cust_finish_price: string
      store_women_cust_blow_dry_price: string
    }
    styling_price: {
      store_branding_price: string
      store_hair_up_price: string
      store_blow_dry_price: string
    }
    colour_price: {
      store_balayage_price: string
      store_full_head_highlights_price: string
      store_half_head_highlights_price: string
      store_1_4_highlights_price: string
      store_colour_trans_price: string
      store_camo_colour_men_price: string
      store_all_over_colour_price: string
    }
  }
  piercing_services_price: {
    ear_piercing_price: {
      store_single_ear_price: string
      store_single_lobe_niddle_price: string
      store_double_lobe_niddle_price: string
      store_single_lobe_cartridge_price: string
      store_double_lobe_cartridge_price: string
    }
    face_nose_piercing_price: {
      store_septum_price: string
      store_high_nose_price: string
      store_nose_price: string
      store_eyebrow_price: string
    }
    oral_piercing_price: {
      store_lip_price: string
      store_tongue_price: string
      store_labert_price: string
      store_medusa_price: string
      store_jestrum_price: string
    }
    body_piercing_price: {
      store_nip_price: string
      store_nav_price: string
      store_nape_price: string
      store_dermal_implant_price: string
    }
  }
  operatingHours: { day: string; hours: string }[]
  phone?: string
}

export type HairServiceProps = {
  name: string
  sequence: string
  id: string
  services: {
    name: string
    display_name: string
    id: string
    sequence: string
    category: string
    finish_service: null
    shortcut_addons: string | null
    base_service: string
    time: string
    break_time: string
    netsuite_id: string
    href: string
    duration: number
    price: number
  }[]
}

export type HairServiceAddonsProps = {
  id: string
  name: string
  display_name: string
  description: string
  sequence: string
  shortcut_tier_level: string[]
  service_v_2: string[]
  duration: number
  price: number
  href: string
}

export type HairStylistProps = {
  employeeNumber: number
  displayName: string
  lastName: string
  href: string
  description: string
}

export type TimePeriod = 'morning' | 'afternoon' | 'evening'

export type AvaliableAddointmentProps = {
  duration: string
  scheduled_date: string
  services: {
    display_name: string
    duration: string
    start_time: string
  }[]
}

export type TimeCardProps = {
  availableAppointments: AvaliableAddointmentProps[]
  setSelectedAppoinment: React.Dispatch<React.SetStateAction<AvaliableAddointmentProps | null>>
}

export type TimeBlockProps = {
  availableAppointments: AvaliableAddointmentProps[]
  startTime: string
  endTime: string
  interval: number
  setSelectedAppoinment: React.Dispatch<React.SetStateAction<AvaliableAddointmentProps | null>>
}

export enum Tabs {
  WELCOME = 0,
  ACCOUNT = 1,
  STEP1 = 2,
  STEP2 = 3,
  STEP3 = 4,
  STEP4 = 5,
  STEP5 = 6,
  STEP6 = 7,
  STEP7 = 8,
}

export enum DayPeriod {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
  EVENING = 'evening',
}

export type SalonBookingSelectTimeProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<Tabs>>
}

export type FinishBlockItemProps = {
  title?: string
  subtitle?: string | null
  secondSubtitle?: string
  icon: JSX.Element
}

export type SalonBookingReviewBookingProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<Tabs>>
  customer?: Customer
}

export type ConfirmsStateProps = {
  phone: null | string
  confirm: boolean
  terms_and_conditions: boolean
  isValidPhone: null | boolean
}

export type BookingDataProps = {
  serviceId: null | string
  store: null | LocationListingsProps
  employee: null | { number: string | number; name: string }
  appoinment: null | AvaliableAddointmentProps
  specialRequest: null | string
}
