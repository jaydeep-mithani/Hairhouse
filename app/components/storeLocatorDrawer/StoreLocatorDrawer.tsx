import { Drawer as OverdoseDrawer, Button as OverdoseButton } from '@overdose/components'
import { useJsApiLoader } from '@react-google-maps/api'
import { useFetcher } from '@remix-run/react'
import { IconClose } from '~/components'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

import { Gap } from '../productSection/Gap'
import { FindStorePage } from './findStorePage/FindStorePage'
import { SelectStorePage } from './SelectStorePage'
import styles from './StoreLocatorDrawer.module.css'
import { StoreLocatorDrawerProps } from './StoreLocatorDrawer.types'

const libraries = ['places']

export const StoreLocatorDrawer: React.FC<StoreLocatorDrawerProps> = ({ isOpen, onClose }) => {
  const { load, data, state } = useFetcher()
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const observerRef = useRef(null)

  useEffect(() => {
    if (!inView || data || state === 'loading') {
      return
    }
    ref(observerRef.current)
  }, [ref, observerRef, inView, data, state])

  const australianPostalCodeRegex = /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/
  const findStoreSelector = 'find-store'
  const selectStoreSelector = 'select-store'
  const timeOut = 300

  const [inputValue, setInputValue] = useState('')
  const [typesValue, setTypesValue] = useState('')
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null)
  const [selectLocationValue, setSelectLocationValue] = useState<string | null>(null)
  const [selectedStore, setSelectedStore] = useState(null)
  const [currentPage, setCurrentPage] = useState(findStoreSelector)

  const queryInput = `input=${inputValue}&types=${typesValue}`

  useEffect(() => {
    const handler = setTimeout(() => {
      return load(`/api/autocomplete?${queryInput}`)
    }, timeOut)
    return () => {
      return clearTimeout(handler)
    }
  }, [load, inputValue, typesValue, queryInput])

  const handleInputChange = (event: string) => {
    const value = event
    if (selectedPlace && selectedPlace.formatted_address !== value) {
      setSelectedPlace(null)
    }
    setInputValue(value)
    setSelectLocationValue(value)
    if (australianPostalCodeRegex.test(value)) {
      setTypesValue('postal_code')
    } else {
      setTypesValue('political|locality')
    }
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: window.ENV,
    libraries,
  })

  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)

  const onLoad = useCallback((autocomplete: google.maps.places.Autocomplete) => {
    autocomplete.setComponentRestrictions({
      country: ['au'],
    })
    setAutocomplete(autocomplete)
  }, [])

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace()
      if (place.formatted_address && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat()
        const lng = place.geometry.location.lng()
        const formattedAddress = place.formatted_address
        const url = `https://maps.google.com/?q=${formattedAddress.replace(/ /g, '+')}`

        if (typeof window !== 'undefined') {
          localStorage.setItem('selectedPlace', JSON.stringify({ lat, lng, formattedAddress, url }))
        }

        setInputValue(formattedAddress)
        setSelectedPlace(place)
        setSelectLocationValue(formattedAddress)
      }
    }
  }

  const handleSave = () => {
    setCurrentPage(selectStoreSelector)
    localStorage.setItem('storeLocatorPreference', JSON.stringify(selectLocationValue))
  }

  const handleSelectDifferentStore = () => {
    setCurrentPage(findStoreSelector)
  }

  const handleSelectedStore = () => {
    if (selectedStore) {
      // Save the activeStore to local storage
      localStorage.setItem('selectedStore', JSON.stringify(selectedStore))
    }
    onClose()
  }

  return (
    <OverdoseDrawer
      onCancel={onClose}
      ref={observerRef}
      visible={isOpen}
      closable
      placement="right"
      closeIcon={<IconClose />}
      width={588}
      theme={{
        root: 'max-w-full [--drawer-close-button-right:13px] [--drawer-close-button-top:14px] px-[20px] md:px-[3rem] py-[80px] md:pt-[90px] md:pb-[30px]',
        content: 'p-0',
        header: `w-auto [--drawer-header-height:auto] border-0 p-0`,
      }}>
      {currentPage === findStoreSelector && (
        <FindStorePage
          isLoaded={isLoaded}
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
      )}
      {currentPage === selectStoreSelector && <SelectStorePage onStoreSelect={setSelectedStore} />}
      {currentPage === findStoreSelector && (
        <OverdoseButton onClick={handleSave} theme={{ root: styles.saveButton }} variant="solid">
          Save
        </OverdoseButton>
      )}
      <div className={styles.selectStoreButtonContainer}>
        {currentPage === selectStoreSelector && (
          <OverdoseButton onClick={handleSelectedStore} theme={{ root: styles.saveButton }} variant="solid">
            Continue Shopping
          </OverdoseButton>
        )}
        {currentPage === selectStoreSelector && (
          <>
            <Gap gap="16px" mobileGap="16px" />
            <OverdoseButton
              variant="link"
              status="secondary"
              onClick={handleSelectDifferentStore}
              theme={{ root: styles.continueShopping }}>
              Select a different store
            </OverdoseButton>
          </>
        )}
      </div>
    </OverdoseDrawer>
  )
}
