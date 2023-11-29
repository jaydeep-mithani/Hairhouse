import { useLoaderData } from '@remix-run/react'
import { flattenConnection } from '@shopify/hydrogen'
import { json, type LoaderArgs } from '@shopify/remix-oxygen'
import { ComposeSections } from '~/components/composeSections'
import { transformedMetafields } from '~/lib/utils'
import { StoreLandingBannerSection } from '~/sections'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'
import { SectionServicesAndPricing } from '~/sections/sectionServicesAndPricing'
import { SectionServicesCtas } from '~/sections/sectionServicesCtas'
import { SectionServicingSuburbs } from '~/sections/sectionServicingSuburbs'
import { SectionStoreDetails } from '~/sections/sectionStoreDetails'
import { LocationType } from '~/sections/sectionStoreDetails/SectionStoreDetails.types'
import { useState } from 'react'
import invariant from 'tiny-invariant'
import { createClient } from 'urql'

import { CMsPagesDocument } from '../../../../graphql/cmsPage/CMSPage.generated'

const STORE_DETAIL_QUERY = `#graphql
query storeDetails($country: CountryCode, $language: LanguageCode)
@inContext(country: $country, language: $language) {
  locations(first: 100){
    nodes {
      ... on Location {
        id
        name
        metafields (identifiers: [
          {namespace: "custom", key: "custrecord_ef_st_s_urlcomponent"},
          {namespace: "custom", key: "custrecord_ef_st_s_phone"},
          {namespace: "custom", key: "custrecord_ef_st_s_address1"},
          {namespace: "custom", key: "custrecord_ef_st_s_address2"},
          {namespace: "custom", key: "custrecord_ef_st_s_city"},
          {namespace: "custom", key: "custrecord_ef_st_s_state"},
          {namespace: "custom", key: "custrecord_ef_st_s_zipcode"},
          {namespace: "custom", key: "custrecord_tradinghr_mon_s"},
          {namespace: "custom", key: "custrecord_tradinghr_mon_e"},
          {namespace: "custom", key: "custrecord_tradinghr_tue_s"},
          {namespace: "custom", key: "custrecord_tradinghr_tue_e"},
          {namespace: "custom", key: "custrecord_tradinghr_wed_s"},
          {namespace: "custom", key: "custrecord_tradinghr_wed_e"},
          {namespace: "custom", key: "custrecord_tradinghr_thu_s"},
          {namespace: "custom", key: "custrecord_tradinghr_thu_e"},
          {namespace: "custom", key: "custrecord_tradinghr_fri_s"},
          {namespace: "custom", key: "custrecord_tradinghr_fri_e"},
          {namespace: "custom", key: "custrecord_tradinghr_sat_s"},
          {namespace: "custom", key: "custrecord_tradinghr_sat_e"},
          {namespace: "custom", key: "custrecord_tradinghr_sun_s"},
          {namespace: "custom", key: "custrecord_tradinghr_sun_e"},
          {namespace: "custom", key: "custrecord_ef_st_s_latitude"},
          {namespace: "custom", key: "custrecord_ef_st_s_longitude"},
          {namespace: "custom", key: "custrecord_store_servicing_sub"},
          {namespace: "custom", key: "name"},
          {namespace: "custom", key: "custrecord_store_sustainable"},
          {namespace: "custom", key: "custrecord_store_message"},
          {namespace: "custom", key: "custrecord_enablerendr"},
          {namespace: "custom", key: "custrecord_ef_st_s_enablecandc"},

          # Salon services
          {namespace: "custom", key: "salon_bookable"},
          {namespace: "custom", key: "available_for_salon"},
          {namespace: "custom", key: "custrecord_store_preference_salon"},
          {namespace: "custom", key: "custrecord_sto_ser_cs_wcbd"},
          {namespace: "custom", key: "custrecord_sto_ser_cs_wcf"},
          {namespace: "custom", key: "custrecord_sto_ser_cs_mcs"},
          {namespace: "custom", key: "custrecord_sto_ser_c_b"},
          {namespace: "custom", key: "custrecord_sto_ser_s_b"},
          {namespace: "custom", key: "custrecord_sto_ser_s_bd"},
          {namespace: "custom", key: "custrecord_sto_ser_s_hu"},
          {namespace: "custom", key: "custrecord_sto_ser_c_ch"},
          {namespace: "custom", key: "custrecord_sto_ser_c_hhoh"},
          {namespace: "custom", key: "custrecord_sto_ser_c_fhoh"},
          {namespace: "custom", key: "custrecord_sto_ser_c_ct"},
          {namespace: "custom", key: "custrecord_sto_ser_c_ccfm"},
          {namespace: "custom", key: "custrecord_sto_ser_c_aoc"},
          {namespace: "custom", key: "custrecord_sto_ser_s_cws"},
          {namespace: "custom", key: "custrecord_sto_ser_ep_se"},

          # Piercing services
          {namespace: "custom", key: "piercing_bookable"},
          {namespace: "custom", key: "available_for_piercing"},
          {namespace: "custom", key: "custrecord_store_preference_piercing"},
          {namespace: "custom", key: "custrecord_sto_ser_ep_lcs"},
          {namespace: "custom", key: "custrecord_sto_ser_ep_lcd"},
          {namespace: "custom", key: "custrecord_sto_ser_ep_lns"},
          {namespace: "custom", key: "custrecord_sto_ser_ep_lnd"},
          {namespace: "custom", key: "custrecord_sto_ser_fnp_e"},
          {namespace: "custom", key: "custrecord_sto_ser_fnp_n"},
          {namespace: "custom", key: "custrecord_sto_ser_fnp_hn"},
          {namespace: "custom", key: "custrecord_sto_ser_fnp_s"},
          {namespace: "custom", key: "custrecord_sto_ser_op_l"},
          {namespace: "custom", key: "custrecord_sto_ser_op_la"},
          {namespace: "custom", key: "custrecord_sto_ser_op_t"},
          {namespace: "custom", key: "custrecord_sto_ser_op_m"},
          {namespace: "custom", key: "custrecord_sto_ser_op_j"},
          {namespace: "custom", key: "custrecord_sto_ser_bp_di"},
          {namespace: "custom", key: "custrecord_sto_ser_bp_nap"},
          {namespace: "custom", key: "custrecord_sto_ser_bp_nav"},
          {namespace: "custom", key: "custrecord_sto_ser_bp_nip"},
        ]){
          value
          key
        }
      }
    }
  }
}
`

export async function getStoresData(context: LoaderArgs['context'], storeUrl: string) {
  const { storefront, env } = context

  const client = createClient({
    url: env?.HYGRAPH_API_ENDPOINT,
    fetchOptions: () => {
      const token = context?.env?.PRIVATE_HYGRAPH_PERMANENT_AUTH_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })

  const { pages, websiteConfigs } = await client
    .query(CMsPagesDocument, { url: 'pages/store' })
    .toPromise()
    .then((result) => {
      return result.data || { pages: [], websiteConfigs: [] }
    })

  const [page, header, footer] = [pages?.[0], websiteConfigs?.[0]?.header, websiteConfigs?.[0]?.footer]

  const data = await storefront.query(STORE_DETAIL_QUERY, {
    variables: {
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  })

  invariant(data, 'No data returned from Shopify API')

  const location = flattenConnection(data.locations).find((item) => {
    const storeUrlField = item?.metafields?.find((field) => {
      return field?.key === 'custrecord_ef_st_s_urlcomponent'
    })
    return storeUrlField?.value === storeUrl
  })

  const getSuburbs = () => {
    const list = location?.metafields?.find((item) => {
      return item.key === 'custrecord_store_servicing_sub'
    })
    return list?.value?.split(',')
  }

  return {
    location,
    suburbs: getSuburbs(),
    header,
    footer,
    page,
  }
}

export async function loader({ context, params }: LoaderArgs) {
  const { storeHandle } = params
  const googleKey = context?.env?.GOOGLE_MAPS_KEY

  const storeData = await getStoresData(context, storeHandle || '')

  return json({ googleKey, ...storeData })
}

export enum PageSectionId {
  Services = 'services',
  Information = 'information',
}

export enum TabsId {
  Salon = 'salon',
  Piercing = 'piercing',
}

export default function StorePage() {
  const { location, suburbs, header, page, footer, googleKey } = useLoaderData<typeof loader>()
  const [activeTab, setActiveTab] = useState(TabsId.Salon)

  if (!location) {
    return null
  }

  const handleScrollTo = (sectionId: PageSectionId, tabName: TabsId | null) => {
    if (tabName) {
      setActiveTab(tabName)
    }

    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const availableMetafields = location?.metafields?.filter((field) => {
    return !!field
  })
  const metafields = location?.metafields && transformedMetafields(availableMetafields)

  return (
    <div>
      {header && <HeaderSection page={page} {...header} />}
      {location && (
        <>
          <StoreLandingBannerSection
            title={metafields?.name}
            subTitle={metafields?.custrecord_store_message}
            isSustainable={metafields?.custrecord_store_sustainable}
            hasClickAndCollect={metafields?.custrecord_ef_st_s_enablecandc}
            hasDelivery={metafields?.custrecord_enablerendr}
            availableSalon={metafields?.available_for_salon}
            availablePiercing={metafields?.available_for_piercing}
            banner={page?.bannerImage}
          />
          <SectionServicesCtas metafields={metafields} handleScrollTo={handleScrollTo} />
          <SectionStoreDetails
            googleKey={googleKey}
            id={PageSectionId.Information}
            location={location as unknown as LocationType}
          />
          <SectionServicesAndPricing
            id={PageSectionId.Services}
            metafields={metafields}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            storeName={metafields?.name}
          />
          <SectionServicingSuburbs suburbsList={suburbs} />
          {page && <ComposeSections sections={page?.sections} page={page} />}
        </>
      )}
      {footer && <Footer page={page} {...footer} />}
    </div>
  )
}
