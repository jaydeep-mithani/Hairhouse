import { useSearchParams } from '@remix-run/react'
import React, { useEffect, useMemo } from 'react'
import { useSessionStorage } from 'react-use'

import { EmbeddedContext } from './EmbeddedContext'

export const EmbeddedProvider = ({ children }) => {
  const [isEmbedded, setIsEmbedded] = useSessionStorage<boolean>('is_app_embed')
  const [params] = useSearchParams()

  useEffect(() => {
    const isEmbeddedQueryParam = params.get('embedded')
    // isEmbeddedQueryParam will be a string representing the value of the embedded query parameter.
    // By comparing it to the string 'true', we can determine whether isEmbedded is set to true or false.
    if (isEmbeddedQueryParam) {
      setIsEmbedded(isEmbeddedQueryParam === 'true')
    }

    if (isEmbedded && typeof window !== 'undefined') {
      window.document.documentElement.classList.add('is-embedded')
    }
    // Cleanup function to be executed when the component is unmounted
    return () => {
      if (isEmbedded && typeof window !== 'undefined') {
        window.document.documentElement.classList.remove('is-embedded')
      }
    }
  }, [isEmbedded, params, setIsEmbedded])

  const embeddedContextValue = useMemo(() => {
    return { isEmbedded }
  }, [isEmbedded])

  return <EmbeddedContext.Provider value={embeddedContextValue}>{children}</EmbeddedContext.Provider>
}
