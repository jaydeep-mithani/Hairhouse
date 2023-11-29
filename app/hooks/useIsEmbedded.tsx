import { EmbeddedContext } from '~/provider/embeddedContext'
import { useContext } from 'react'

export const useIsEmbedded = () => {
  const { isEmbedded } = useContext(EmbeddedContext)
  return isEmbedded
}
