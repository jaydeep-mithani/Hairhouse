import { useState } from 'react'

export const useGlobalLoader = () => {
  const [isLoaderShown, setIsLoaderShown] = useState<boolean>(false)

  return { isLoaderShown, setIsLoaderShown }
}
