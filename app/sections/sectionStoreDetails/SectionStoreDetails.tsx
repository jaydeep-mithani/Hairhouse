import { Button, Typography } from '@overdose/components'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { ClockIcon, MapPinIcon, PhoneIcon } from '~/components'
import { MapContainerStyle, MapOptions, MarkerIcon, ZOOM_NUMBER } from '~/lib/mapUtils'
import React from 'react'

import styles from './SectionStoreDetails.module.css'
import { SectionStoreDetailsTypes } from './SectionStoreDetails.types'
import { flattenLocationData } from './utils'

const TITLE = 'Store information'

const TextBody = ({ text }: { text: string }) => {
  return (
    <Typography variant="body" tag="div" theme={{ root: styles.text }}>
      {text}
    </Typography>
  )
}

export const SectionStoreDetails = ({ location, id, googleKey }: SectionStoreDetailsTypes) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleKey,
    libraries: ['places'],
  })

  if (!location?.metafields?.length) {
    return null
  }

  const { address1, address2, address3, phone, tradingHours, latitude, longitude } = flattenLocationData(location)

  return (
    <div id={id} className={styles.storeDetailWrap}>
      <div className={styles.mapWrap}>
        {isLoaded && latitude && longitude && (
          <GoogleMap
            id="google-maps"
            zoom={ZOOM_NUMBER}
            center={{ lat: Number(latitude), lng: Number(longitude) }}
            mapContainerStyle={MapContainerStyle as React.CSSProperties | undefined}
            options={MapOptions}>
            <Marker position={{ lat: Number(latitude), lng: Number(longitude) }} icon={{ url: MarkerIcon }} />
          </GoogleMap>
        )}
      </div>
      <div className={styles.infoBlock}>
        <Typography
          tag="p"
          variant="displayLarge"
          theme={{
            root: styles.title,
          }}>
          {TITLE}
        </Typography>
        <div className={styles.infoItem}>
          <PhoneIcon />
          <TextBody text={`Phone: ${phone}`} />
        </div>
        <div className={styles.infoItem}>
          <MapPinIcon />
          <div>
            <TextBody text={address1} />
            <TextBody text={address2} />
            <TextBody text={address3} />
            <Button
              variant="link"
              target="_blank"
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              theme={{ root: styles.link }}>
              Get Directions
            </Button>
          </div>
        </div>
        <div className={styles.infoItem}>
          <ClockIcon />
          <div>
            {!!tradingHours?.length &&
              tradingHours.map((item, index) => {
                return (
                  <div className={styles.tradingItemWrap} key={index}>
                    <TextBody text={item.name} />
                    <TextBody text={`${item.start} - ${item.end}`} />
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
