import React, { useState } from 'react'

import { GlobalLoaderContext } from './GlobalLoaderContext'

export const GlobalLoaderProvider = ({ children }) => {
  const [isLoaderShown, setIsLoaderShown] = useState(false)
  return (
    <GlobalLoaderContext.Provider value={{ isLoaderShown, setIsLoaderShown }}>{children}</GlobalLoaderContext.Provider>
  )
}
