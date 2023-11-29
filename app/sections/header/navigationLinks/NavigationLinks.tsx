import { Button, Link, Typography } from '@overdose/components'
import { MapMarker, Sparkels, CalendarCheck } from '~/components'
import { Container } from '~/components/container'
import { Gap } from '~/components/productSection/Gap'
import { StoreLocatorDrawer } from '~/components/storeLocatorDrawer'
import { Storelocatornav } from 'graphql/types'
import React, { useEffect, useState } from 'react'

// import { useLocalStorageContext } from '~/provider/localstorage'
import styles from './NavigationLinks.module.css'

interface NavigationLinksProps {
  storeLocatorLinks: Storelocatornav['storeLocatorLinks']
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ storeLocatorLinks }) => {
  const [storeLocation, setStoreLocation] = useState('Select your store')
  const [isStoreDrawerOpen, setStoreDrawerOpen] = useState(false)

  useEffect(() => {
    const storedLocation = localStorage.getItem('storeLocatorPreference')
    if (storedLocation && storedLocation !== '') {
      const parsedLocation = JSON.parse(storedLocation)
      setStoreLocation(parsedLocation)
    }
  }, [])

  const handleOpenStoreDrawer = () => {
    setStoreDrawerOpen(true)
  }

  const handleCloseStoreDrawer = () => {
    setStoreDrawerOpen(false)
  }

  return (
    <div className={styles.container}>
      <Typography theme={{ root: styles.selectStoreRest }} variant="body">
        <div className={styles.desktopContainer}>
          <MapMarker />
          <Gap gap="4px" mobileGap="4px" />
          <Typography theme={{ root: styles.selectStoreRest }}>
            {storeLocation !== 'Select your store' ? (
              <Typography theme={{ root: styles.stockDelivery }}>
                Showing stock for delivery to{' '}
                <Button theme={{ root: styles.selectStoreDrawer }} variant="link" onClick={handleOpenStoreDrawer}>
                  {storeLocation}
                </Button>
              </Typography>
            ) : (
              <Container display="flex" flexDirection="row" alignItems="center">
                <Button theme={{ root: styles.selectStoreDrawer }} variant="link" onClick={handleOpenStoreDrawer}>
                  Select your store
                </Button>
                <Gap gap="4px" mobileGap="4px" />
                <Typography>for accurate stock and delivery info</Typography>
              </Container>
            )}
          </Typography>
        </div>
      </Typography>
      <div className={styles.mobileContainer}>
        <Typography theme={{ root: styles.mobileSelectStoreRest }}>
          <Container display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <MapMarker />
            <Gap gap="4px" mobileGap="4px" />
            <Button theme={{ root: styles.mobileSelectStoreDrawer }} variant="link" onClick={handleOpenStoreDrawer}>
              Select Store
            </Button>
          </Container>
        </Typography>
        <div className={styles.separator} />
        <Typography theme={{ root: styles.mobileSelectStoreRest }}>
          <Container
            className={styles.mobileRightContainer}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center">
            <CalendarCheck />
            <Gap gap="4px" mobileGap="4px" />
            <Link to="/pages/salon-booking" theme={{ root: styles.mobileSelectStoreDrawer }} variant="link">
              Book Appointment
            </Link>
          </Container>
        </Typography>
      </div>

      <div className={`${styles.links} ${styles.desktopContainer}`}>
        {!!storeLocatorLinks?.length &&
          storeLocatorLinks.map(({ id, linkText, url, openInNewWindow }, index) => {
            return (
              url && (
                <Link
                  theme={{ root: styles.navigationLinks }}
                  key={id}
                  to={url}
                  target={openInNewWindow ? '_blank' : '_self'}
                  rel="noopener noreferrer">
                  <Container display="flex" flexDirection="row" alignItems="center">
                    {index === 0 && <Sparkels />}
                    <Typography theme={{ root: styles.navigationLinks }} variant="body">
                      {linkText}
                    </Typography>
                  </Container>
                </Link>
              )
            )
          })}
      </div>

      {isStoreDrawerOpen && <StoreLocatorDrawer isOpen={isStoreDrawerOpen} onClose={handleCloseStoreDrawer} />}
    </div>
  )
}
