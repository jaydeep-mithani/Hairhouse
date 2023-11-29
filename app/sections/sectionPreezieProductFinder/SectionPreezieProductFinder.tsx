import React, { useEffect } from 'react'

import styles from './SectionPreezieProductFinder.module.css'
import { SectionPreezieProductFinderProps } from './SectionPreezieProductFinder.types'

export const SectionPreezieProductFinder = ({ preezieGuideKey }: SectionPreezieProductFinderProps) => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script')
      script.src = 'https://preeziecdn.azureedge.net/production/preguide.min.js'
      document.body.appendChild(script)

      script.onload = () => {
        window.PREEZIE_GUIDE.render([
          {
            guideKey: preezieGuideKey,
            version: '1.0.0',
            renderTo: `preezie-widget-div-id-${preezieGuideKey}`,
          },
        ])
      }
    }

    if (typeof window !== 'undefined') {
      loadScript()
    }

    return () => {
      // Cleanup: Remove the dynamically added script when component unmounts
      if (typeof window !== 'undefined') {
        const script = document.querySelector(
          `script[src="https://preeziecdn.azureedge.net/production/preguide.min.js"]`,
        )
        if (script) {
          document.body.removeChild(script)
        }
      }
    }
  }, [preezieGuideKey])

  if (!preezieGuideKey) {
    return null
  }

  return <div id={`preezie-widget-div-id-${preezieGuideKey}`} className={styles.root} />
}
