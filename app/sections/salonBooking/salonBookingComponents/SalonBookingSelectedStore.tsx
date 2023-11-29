import { Typography, Button } from '@overdose/components'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { IconAlertCircle } from '~/components'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { mapStyles } from '../SalonBooking.mock'
import styles from '../SalonBooking.module.css'
import { SalonBookingSelectedStoreProps, LocationListingsProps, Tabs } from '../SalonBooking.types'

const LIBRARIES = ['places']
const ZOOM_NUMBER = 14

export const SalonBookingSelectedStore: React.FC<SalonBookingSelectedStoreProps> = ({
  setIsSelectedStore,
  googleKey,
  setActiveStep,
}) => {
  const [store, setStore] = useState<LocationListingsProps | null>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: -180 })

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleKey,
    LIBRARIES,
  })

  useEffect(() => {
    const selectedStore = localStorage.getItem('selectedStore')
    if (selectedStore) {
      setStore(JSON.parse(selectedStore))
    }
    setMapCenter({ lat: Number(store?.latitude), lng: Number(store?.longitude) })
  }, [store?.latitude, store?.longitude])

  return (
    <div className="w-full">
      <div
        className={clsx('mb-8 md:mb-10 text-center flex flex-col justify-center', {
          'mb-5': !store?.bookable_service?.salon_bookable,
        })}>
        <Typography
          tag="p"
          variant="displayExtraLarge"
          theme={{
            root: 'mb-10',
          }}>
          Is this your preferred <br /> store location?
        </Typography>
        <Typography
          tag="p"
          variant="subheading"
          theme={{
            root: clsx('mb-2', styles.subHeading),
          }}>
          Your go-to Hairhouse is set to:
        </Typography>
        {store?.name && (
          <Typography
            tag="p"
            variant="pageheading"
            theme={{
              root: 'mb-1',
            }}>
            {store?.name}
          </Typography>
        )}
        <Button
          variant="solid"
          status="accent"
          theme={{ root: clsx('mb-10', styles.changeStoreLink) }}
          onClick={() => {
            return setIsSelectedStore(false)
          }}>
          <Typography
            tag="span"
            variant="body"
            theme={{
              root: styles.linkText,
            }}>
            Change store
          </Typography>
        </Button>
        {!store?.bookable_service?.salon_bookable && (
          <div
            className={clsx(
              styles.notAvaliableBlock,
              'mb-10 p-4 md:p-6 flex flex-col	items-center text-center w-full md:w-[656px]',
            )}>
            <IconAlertCircle />
            <Typography
              tag="p"
              variant="body"
              theme={{
                root: clsx(styles.bodyThin, 'my-2'),
              }}>
              This Hairhouse does not currently take online bookings. <br /> Good news is you can ring the store
              directly!
            </Typography>
            <Typography tag="p" variant="subheading" theme={{ root: styles.phoneNumber }}>
              (03) 9099 1188
            </Typography>
          </div>
        )}
        <Button
          variant="solid"
          status="primary"
          theme={{ root: 'w-full max-w-[350px] mx-auto' }}
          disabled={!store?.bookable_service?.salon_bookable}
          onClick={() => {
            return setActiveStep(Tabs.STEP2)
          }}>
          Continue
        </Button>
      </div>
      <div className="relative h-[330px] md:h-[500px]">
        <div className={clsx('h-[330px] md:h-[500px] absolute top-0 left-0 right-0', styles.mapWrapper)}>
          {isLoaded && store?.latitude && store?.longitude && (
            <GoogleMap
              id="google-maps"
              zoom={ZOOM_NUMBER}
              center={mapCenter}
              mapContainerStyle={{
                height: '100%',
                width: '100%',
                position: 'relative',
              }}
              options={{
                styles: mapStyles,
              }}>
              <Marker key={store?.zip} position={{ lat: Number(store?.latitude), lng: Number(store?.longitude) }} />
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  )
}
