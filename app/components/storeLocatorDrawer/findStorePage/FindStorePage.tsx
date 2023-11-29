import { Input, Typography } from '@overdose/components'
import { Autocomplete } from '@react-google-maps/api'
import { useCallback } from 'react'
import Geocode from 'react-geocode'

import { Button } from '../../Button'
import { Container } from '../../container'
import { Location } from '../../Icon'
import { Gap } from '../../productSection/Gap'
import styles from '../StoreLocatorDrawer.module.css'
import { FindStorePageProps } from './FindStorePage.types'

export const FindStorePage = ({
  isLoaded,
  onLoad,
  onPlaceChanged,
  inputValue,
  handleInputChange: propHandleInputChange,
}: FindStorePageProps) => {
  const handleInputChange = useCallback(
    (...args) => {
      propHandleInputChange(...args)
    },
    [propHandleInputChange],
  )

  Geocode.setApiKey(window.ENV)
  Geocode.setLanguage('en')
  Geocode.setRegion('au')
  Geocode.setLocationType('ROOFTOP')

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          Geocode.fromLatLng(lat.toString(), lng.toString()).then(
            (response) => {
              const address = response.results[0].formatted_address
              handleInputChange(address)
              const location = {
                lat,
                lng,
                formattedAddress: address,
              }
              localStorage.setItem('selectedPlace', JSON.stringify(location))
              localStorage.setItem('storeLocatorPreference', JSON.stringify(address))
            },
            (error) => {
              console.error(error)
            },
          )
        },
        (error) => {
          console.error('Error retrieving location: ', error)
        },
      )
    }
  }

  return (
    <>
      <Typography tag="h1" variant="pageheading">
        Enter your suburb or postcode
      </Typography>
      <Gap gap="1rem" mobileGap="1rem" />
      <Typography theme={{ root: styles.subtitle }} tag="p" variant="body">
        Enter your postcode for your local store for accurate stock, pricing and delivery information.
      </Typography>
      <Gap gap="2rem" mobileGap="2rem" />
      {isLoaded && (
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <Input
            theme={{ root: styles.inputSearch }}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Postcode: e.g. 3000"
          />
        </Autocomplete>
      )}
      <Gap gap="8px" mobileGap="8px" />
      <Container gap="8px" alignItems="center">
        <Location />
        <Button className={styles.locationButton} variant="inline" onClick={handleLocationClick}>
          Use my current location
        </Button>
      </Container>
      <Gap gap="16px" mobileGap="16px" />
    </>
  )
}
