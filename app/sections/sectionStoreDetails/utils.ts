import { LocationType, StoreLocationTypes } from './SectionStoreDetails.types'

enum Week {
  mon = 'Monday',
  tue = 'Thusday',
  wed = 'Wednesday',
  thu = 'Thursday',
  fri = 'Friday',
  sat = 'Saturday',
  sun = 'Sunday',
}

export const flattenLocationData = (data: LocationType): StoreLocationTypes => {
  const array = data.metafields.filter((item) => {
    return !!item
  })
  const metafields: Record<string, string> = array.reduce((result, item) => {
    return {
      ...result,
      [item.key]: item.value,
    }
  }, {})

  const tradingHours = Object.keys(Week).map((day) => {
    return {
      name: Week[day as keyof typeof Week],
      start: metafields[`custrecord_tradinghr_${day}_s`],
      end: metafields[`custrecord_tradinghr_${day}_e`],
    }
  })

  return {
    phone: metafields.custrecord_ef_st_s_phone,
    address1: metafields.custrecord_ef_st_s_address1,
    address2: metafields.custrecord_ef_st_s_address2,
    address3: `${metafields.custrecord_ef_st_s_city} ${metafields.custrecord_ef_st_s_state} ${metafields.custrecord_ef_st_s_zipcode}`,
    longitude: metafields.custrecord_ef_st_s_longitude,
    latitude: metafields.custrecord_ef_st_s_latitude,
    tradingHours,
  }
}
