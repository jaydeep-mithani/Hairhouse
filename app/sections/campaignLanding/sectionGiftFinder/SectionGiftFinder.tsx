import { Typography, Image } from '@overdose/components'
import { useEffect } from 'react'

import styles from './SectionGiftFinder.module.css'
import { SectionGiftFinderProps } from './SectionGiftFinder.types'

export const SectionGiftFinder: React.FC<SectionGiftFinderProps> = ({
  heading,
  backgroundColor,
  preezieGuideKey,
  image,
}) => {
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

  return (
    <div className={styles.root} style={{ backgroundColor: `${backgroundColor?.hex || '#004124'}` }}>
      {heading && (
        <Typography tag="h3" variant="displayMedium" weight="bold" align="center">
          {heading}
        </Typography>
      )}
      <div className={styles.container}>
        <div id={`preezie-widget-div-id-${preezieGuideKey}`} className={styles.question_template} />
        {image && image?.url && <Image src={image.url} alt={image.altText} className={styles.image_img} />}
      </div>
    </div>
  )
}
