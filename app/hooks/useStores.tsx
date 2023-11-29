import { useFetcher } from '@remix-run/react'
import { useState, useEffect } from 'react'

export const useStores = (selectedPlace) => {
  const { data, load } = useFetcher()
  const [storeList, setStoreList] = useState([])

  useEffect(() => {
    const { lat: latitude, lng: longitude } = selectedPlace ? JSON.parse(selectedPlace) : { lat: null, lng: null }

    if (latitude && longitude) {
      const distance = 20000 // set your desired distance
      const top = 200 // set your desired top

      // Make the API call with the latitude and longitude
      load(`/api/storeList?latitude=${latitude}&longitude=${longitude}&distance=${distance}&top=${top}`)
    }
  }, [load, selectedPlace])

  useEffect(() => {
    if (data) {
      localStorage.setItem('storesList', JSON.stringify(data))
      const storedData = localStorage.getItem('storesList')
      const storedStores = storedData ? JSON.parse(storedData) : []
      setStoreList(storedStores)
    }
  }, [data])

  return storeList
}
