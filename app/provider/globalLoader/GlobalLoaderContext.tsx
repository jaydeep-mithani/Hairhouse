import { createContext, useContext } from 'react'

interface GlobalLoaderContextInterface {
  isLoaderShown: boolean
  setIsLoaderShown: (value: boolean) => void
}

export const GlobalLoaderContext = createContext<GlobalLoaderContextInterface>({ isLoaderShown: false })

export const useGlobalLoaderContext = () => {
  const context = useContext(GlobalLoaderContext)
  if (!context) {
    throw new Error(
      'GlobalLoaderContext compound components cannot be rendered outside the GlobalLoaderContext component',
    )
  }
  return context
}
