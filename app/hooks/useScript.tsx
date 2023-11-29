import { useMatches } from '@remix-run/react'
import { useEffect } from 'react'

const useScript = (src: string): (() => void) | void => {
  const [match] = useMatches()
  useEffect(() => {
    let cleanup
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.head.appendChild(script)
      cleanup = () => {
        document.head.removeChild(script)
      }
    }
    return cleanup
  }, [src, match])
}

export default useScript
