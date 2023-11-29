import { Input, Typography, Button as OverdoseButton } from '@overdose/components'
import { Autocomplete, GoogleMap, Marker, useJsApiLoader, InfoBox } from '@react-google-maps/api'
import { useFetcher, useLoaderData } from '@remix-run/react'
import { LoaderArgs, defer } from '@shopify/remix-oxygen'
import { LoadingLogo, Location } from '~/components'
import { Button } from '~/components/Button'
import { Container } from '~/components/container'
import { Gap } from '~/components/productSection/Gap'
import { StoreCard } from '~/components/storeLocatorDrawer/storeCard'
import styles from '~/components/storeLocatorDrawer/StoreLocator.module.css'
import { useStores } from '~/hooks/useStores'
import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import Geocode from 'react-geocode'

const libraries = ['places']

export async function loader({ context }: LoaderArgs) {
  const googleKey = context?.env?.GOOGLE_MAPS_KEY

  return defer({
    googleKey,
  })
}

const StoreLocator: React.FC = () => {
  const { googleKey } = useLoaderData<typeof loader>()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleKey,
    libraries,
  })

  const ZOOM_NUMBER = 2

  const [activeStore, setActiveStore] = useState(null)
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: -180 })
  const [zoom, setZoom] = useState(ZOOM_NUMBER)
  const [showMap, setShowMap] = useState(false)
  const [selectedButton, setSelectedButton] = useState('List')
  const [isHandleOnSaveFired, setIsHandleOnSaveFired] = useState(false)

  let selectedPlace
  if (typeof window !== 'undefined') {
    selectedPlace = localStorage.getItem('selectedPlace')
  }
  const storeList = useStores(selectedPlace)
  const [storeListState, setStoreListState] = useState(storeList)

  const [inputValue, setInputValue] = useState('')
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)

  useEffect(() => {
    const storeLocatorPreference = localStorage.getItem('storeLocatorPreference')
    if (storeLocatorPreference) {
      setInputValue(JSON.parse(storeLocatorPreference))
    }
  }, [])

  Geocode.setApiKey(googleKey)
  Geocode.setLanguage('en')
  Geocode.setRegion('au')
  Geocode.setLocationType('ROOFTOP')

  const handleInputChange = (event: string) => {
    setInputValue(event)
  }

  const { load, data } = useFetcher()
  const { load: loadRetrieveAddress, data: dataRetrieveAddress } = useFetcher()
  const { load: loadStoreList, data: dataStoreList } = useFetcher()

  const australianPostalCodeRegex = /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/

  const [typesValue, setTypesValue] = useState('')
  const [selectedPlaceForm, setSelectedPlaceForm] = useState<google.maps.places.PlaceResult | null>(null)
  const [selectLocationValue, setSelectLocationValue] = useState<string | null>(null)

  const queryInput = `input=${inputValue}&types=${typesValue}`

  useEffect(() => {
    load(`/api/autocomplete?${queryInput}`)
  }, [load, inputValue, typesValue, queryInput])

  const handleOnSave = () => {
    const value = inputValue

    if (australianPostalCodeRegex.test(value)) {
      setTypesValue('postal_code')
    } else {
      setTypesValue('political|locality')
    }

    if (selectedPlaceForm && selectedPlaceForm.formatted_address !== value) {
      setSelectedPlaceForm(null)
    }
    setInputValue(value)
    setSelectLocationValue(value)

    localStorage.setItem('storeLocatorPreference', JSON.stringify(selectLocationValue))

    if (dataStoreList) {
      localStorage.setItem('storesList', JSON.stringify(dataStoreList))
      setStoreListState(dataStoreList)
    }
    setIsHandleOnSaveFired(true)
  }

  const placeID = data?.predictions[0]?.place_id

  useEffect(() => {
    loadRetrieveAddress(`/api/storeLatLng?place_id=${placeID}`)
  }, [loadRetrieveAddress, placeID])

  useEffect(() => {
    const latitude = dataRetrieveAddress?.lat
    const longitude = dataRetrieveAddress?.lng

    if (latitude && longitude) {
      const distance = 20000
      const top = 120

      loadStoreList(`/api/storeList?latitude=${latitude}&longitude=${longitude}&distance=${distance}&top=${top}`)
    }
  }, [loadStoreList, dataRetrieveAddress])

  const handleLocationClick = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      return
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      Geocode.fromLatLng(lat.toString(), lng.toString()).then((response) => {
        const address = response.results[0].formatted_address
        handleInputChange(address)
        const location = {
          lat,
          lng,
          formattedAddress: address,
        }

        if (typeof window !== 'undefined') {
          localStorage.setItem('selectedPlace', JSON.stringify(location))
          localStorage.setItem('storeLocatorPreference', JSON.stringify(address))
        }
      })
    })
  }

  const onLoad = useCallback((autocomplete: google.maps.places.Autocomplete) => {
    autocomplete.setComponentRestrictions({
      country: ['au'],
    })
    setAutocomplete(autocomplete)
  }, [])

  const mapContainerStyle = {
    height: '100%',
    width: '100%',
    position: 'relative',
  }
  const DEFAULT_ZOOM = 14
  const PixelOffsetX = -170
  const PixelOffsetY = -360

  const handleStoreCardClick = useCallback(
    (store) => {
      setActiveStore(store)
      setMapCenter({ lat: Number(store.latitude), lng: Number(store.longitude) })
      setZoom(DEFAULT_ZOOM)
    },
    [setActiveStore, setMapCenter, setZoom],
  ) //

  const logo = {
    altText: 'logo',
    url: 'https://media.graphassets.com/trpHEeIbSkOq3ufqF3F7',
  }

  const loaderBackground = '#F9F5F0'

  useEffect(() => {
    const selectedStoreFromLocalStorage = localStorage.getItem('selectedStore')

    if (selectedStoreFromLocalStorage) {
      const parsedSelectedStore = JSON.parse(selectedStoreFromLocalStorage)
      const foundStore = storeList?.find((store) => {
        return store.id === parsedSelectedStore.id
      })
      if (foundStore) {
        setActiveStore(foundStore)
        setMapCenter({ lat: Number(foundStore.latitude), lng: Number(foundStore.longitude) })
        setZoom(DEFAULT_ZOOM)
      }
    }
  }, [storeList])

  const storeCards = useMemo(() => {
    if (isHandleOnSaveFired) {
      if (!storeListState) {
        return null
      }

      return storeListState.map((store) => {
        return (
          <React.Fragment key={store.zip}>
            <StoreCard
              store={store}
              isActive={activeStore === store}
              onClick={() => {
                return handleStoreCardClick(store)
              }}
            />
            <Gap gap="1rem" mobileGap="0" />
          </React.Fragment>
        )
      })
    }
    if (!storeList) {
      return null
    }

    return storeList.map((store) => {
      return (
        <React.Fragment key={store.zip}>
          <StoreCard
            store={store}
            isActive={activeStore === store}
            onClick={() => {
              return handleStoreCardClick(store)
            }}
          />
          <Gap gap="1rem" mobileGap="0" />
        </React.Fragment>
      )
    })
  }, [storeList, storeListState, activeStore, handleStoreCardClick, isHandleOnSaveFired])

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace()
      if (place.formatted_address && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat()
        const lng = place.geometry.location.lng()
        const formattedAddress = place.formatted_address

        setInputValue(formattedAddress)
        localStorage.setItem('selectedPlace', JSON.stringify({ lat, lng, formattedAddress }))
        localStorage.setItem('storeLocatorPreference', JSON.stringify(formattedAddress))
      }
    }
  }

  return (
    <div className={styles.container}>
      <Suspense>
        <div className={styles.leftContainer}>
          <div className={styles.findAStoreContainer}>
            <Typography theme={{ root: styles.findAStoreTitle }} variant="displayLarge">
              Find a store
            </Typography>
            <Gap gap="24px" mobileGap="16px" />
            {isLoaded && (
              <Autocomplete className={styles.autocompleteStoreLocator} onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <Input
                  theme={{ root: styles.inputSearch }}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Postcode: e.g. 3000"
                />
              </Autocomplete>
            )}
            <Gap gap="12px" mobileGap="12px" />
            <OverdoseButton onClick={handleOnSave} theme={{ root: styles.saveButton }} variant="solid">
              Search
            </OverdoseButton>
            <Gap gap="12px" mobileGap="16px" />
            <Container gap="8px" alignItems="center">
              <Location />
              <Button className={styles.locationButtonStoreLocator} variant="inline" onClick={handleLocationClick}>
                Use my current location
              </Button>
            </Container>
            <Gap mobileGap="16px" gap="1rem" />
            <div className={styles.mobileButtonSelectorContainer}>
              <Button
                variant="inline"
                className={styles.buttonSelectorMap}
                onClick={() => {
                  setShowMap(true)
                  setSelectedButton('Map')
                }}
                style={{
                  borderBottom:
                    selectedButton === 'Map'
                      ? '1px solid var(--interactive-action-primary, #000)'
                      : '1px solid var(--text-accent-01, #BDBFC3)',
                }}>
                <Typography variant="body">Map</Typography>
              </Button>
              <Button
                variant="inline"
                className={styles.buttonSelectorList}
                onClick={() => {
                  setShowMap(false)
                  setSelectedButton('List')
                }}
                style={{
                  borderBottom:
                    selectedButton === 'List'
                      ? '1px solid var(--interactive-action-primary, #000)'
                      : '1px solid var(--text-accent-01, #BDBFC3)',
                }}>
                {' '}
                <Typography variant="body">List</Typography>
              </Button>
            </div>
          </div>

          {!showMap && (
            <div className={styles.storesContainer}>
              {storeCards?.length === 0 ? <LoadingLogo logo={logo} loaderBackground={loaderBackground} /> : storeCards}
            </div>
          )}
        </div>
        <div
          className={`${
            showMap ? 'block w-[100%] h-screen grayscale' : 'hidden lg:block w-[100%] h-screen grayscale'
          }`}>
          {isLoaded && (
            <GoogleMap id="google-maps" mapContainerStyle={mapContainerStyle} zoom={zoom} center={mapCenter}>
              {storeList?.map((store) => {
                return (
                  <Marker
                    key={store.zip}
                    position={{ lat: Number(store.latitude), lng: Number(store.longitude) }}
                    onClick={() => {
                      return setActiveStore(store)
                    }}>
                    {activeStore && activeStore.zip === store.zip && (
                      <InfoBox
                        options={{
                          closeBoxURL: '',
                          enableEventPropagation: true,
                          pixelOffset: new google.maps.Size(PixelOffsetX, PixelOffsetY),
                        }}
                        onCloseClick={() => {
                          return setActiveStore(null)
                        }}>
                        <div style={{ width: '343px', backgroundColor: 'white' }}>
                          <StoreCard
                            hideBorder
                            store={store}
                            isActive={activeStore === store}
                            onClick={() => {
                              return handleStoreCardClick(store)
                            }}
                          />
                        </div>
                      </InfoBox>
                    )}
                  </Marker>
                )
              })}
            </GoogleMap>
          )}
        </div>
      </Suspense>
    </div>
  )
}

export default StoreLocator
