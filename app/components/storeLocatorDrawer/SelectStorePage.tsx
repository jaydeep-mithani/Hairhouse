import { Typography } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { Link, LoadingLogo } from '~/components'
import { useEffect, useState } from 'react'

import { Gap } from '../productSection/Gap'
import { StoreCardFlexible } from './storeCard'
import styles from './StoreLocator.module.css'

interface SelectStorePageProps {
  onStoreSelect: (store) => void
}

export const SelectStorePage = ({ onStoreSelect }: SelectStorePageProps) => {
  const { data, load } = useFetcher()
  const [storeList, setStoreList] = useState([])
  const [activeStore, setActiveStore] = useState(null)

  const storeLocatorPreference = typeof window !== 'undefined' ? localStorage.getItem('storeLocatorPreference') : null
  const addressPreference = storeLocatorPreference ? JSON.parse(storeLocatorPreference) : null

  useEffect(() => {
    const selectedPlace = typeof window !== 'undefined' ? localStorage.getItem('selectedPlace') : null
    const { lat: latitude, lng: longitude } = selectedPlace ? JSON.parse(selectedPlace) : { lat: null, lng: null }

    if (latitude && longitude) {
      const distance = 20000 // set your desired distance
      const top = 120 // set your desired top

      // Make the API call with the latitude and longitude
      load(`/api/storeList?latitude=${latitude}&longitude=${longitude}&distance=${distance}&top=${top}`)
    }
  }, [load])

  useEffect(() => {
    if (data) {
      localStorage.setItem('storesList', JSON.stringify(data))
      const storedData = localStorage.getItem('storesList')
      const storedStores = storedData ? JSON.parse(storedData) : []
      setStoreList(storedStores)
    }
  }, [data])

  const handleStoreCardClick = (store) => {
    setActiveStore(store)
    onStoreSelect(store)
  }

  const today = new Date().toLocaleDateString('en-US', { weekday: 'short' })

  const logo = {
    altText: 'logo',
    url: 'https://media.graphassets.com/trpHEeIbSkOq3ufqF3F7',
  }

  const loaderBackground = '#F9F5F0'

  return (
    <div className={styles.selectStoreContainer}>
      <Typography tag="h1" theme={{ root: styles.deliveryHeading }} variant="pageheading">
        Delivery Location
      </Typography>
      <Typography theme={{ root: styles.locationSubtitle }} tag="p" variant="body">
        {addressPreference || 'Not selected'}
      </Typography>
      <Gap gap="2rem" mobileGap="2rem" />
      <div className={styles.separator} />
      <Gap gap="2rem" mobileGap="2rem" />
      <Typography tag="h2" variant="heading">
        Select your nearest or preferred store:
      </Typography>

      {storeList?.length > 0 ? (
        storeList.map((store) => {
          return (
            <div key={store.zipCode}>
              <Gap gap="1rem" mobileGap="1rem" />
              <StoreCardFlexible
                key={store.zipCode}
                onClick={() => {
                  return handleStoreCardClick(store)
                }}
                isActive={activeStore === store}>
                <Typography variant="heading" theme={{ root: styles.storeName }} tag="p">
                  {store.name}
                </Typography>
                <Gap gap="8px" mobileGap="8px" />
                <Typography variant="body" theme={{ root: styles.operatingHours }} tag="p">
                  Open today{' '}
                  {store.operatingHours.find((hours) => {
                    return hours.day === today.toLowerCase()
                  })?.hours || 'N/A'}
                </Typography>
                <Gap gap="4px" mobileGap="4px" />
                <Typography variant="body" theme={{ root: styles.storeAdress }} tag="p">
                  {store.address1}, {store.address2}, {store.country_name}
                </Typography>
                <Gap gap="8px" mobileGap="8px" />
                <Link className={styles.storeLink} to={`/store/${store.url_component}`}>
                  Visit Store Page
                </Link>
              </StoreCardFlexible>
            </div>
          )
        })
      ) : (
        <LoadingLogo logo={logo} loaderBackground={loaderBackground} />
      )}
      <Gap gap="1rem" mobileGap="1rem" />
    </div>
  )
}
