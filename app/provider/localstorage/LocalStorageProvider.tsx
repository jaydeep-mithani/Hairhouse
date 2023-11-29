import React, { useState, useEffect } from 'react'

import { LocalStorageContext } from './localStorageContext'

export const LocalStorageProvider = ({ children }) => {
  const [storeLocation, setStoreLocation] = useState(localStorage.getItem('storeLocatorPreference') || '')

  useEffect(() => {
    // Subscribe to storage changes
    const handleStorageChange = () => {
      const storedLocation = localStorage.getItem('storeLocatorPreference')
      if (storedLocation && storedLocation !== '') {
        setStoreLocation(storedLocation)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Unsubscribe when component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <LocalStorageContext.Provider value={{ storeLocation, setStoreLocation }}>{children}</LocalStorageContext.Provider>
  )
}
