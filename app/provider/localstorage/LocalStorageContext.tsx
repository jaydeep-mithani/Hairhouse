import { createContext, useContext } from 'react'

interface LocalStorageContextInterface {
  storeLocation: string
  setStoreLocation: (value: string) => void
}

export const LocalStorageContext = createContext<LocalStorageContextInterface>({ storeLocation: '' })

export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext)
  if (!context) {
    throw new Error(
      'LocalStorageContext compound components cannot be rendered outside the LocalStorageContext component',
    )
  }
  return context
}
