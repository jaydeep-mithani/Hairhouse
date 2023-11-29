import { Typography } from '@overdose/components'

import styles from './ImageTextOverlaySection.module.css'
import { ImageTextOverlaySectionProps } from './ImageTextOverlaySection.types'

export const ImageTextOverlaySection: React.FC<ImageTextOverlaySectionProps> = ({ data }) => {
  if (!data) return null
  if (!data?.imageDesktop?.image?.url) return null

  const { title, bannerDesktopHeight, bannerMobileHeight, overlay, imageDesktop, imageMobile } = data
  const imgHeightDesktop = bannerDesktopHeight && bannerDesktopHeight > 0 ? bannerDesktopHeight : 328
  const imgHeightMobile = bannerMobileHeight && bannerMobileHeight > 0 ? bannerMobileHeight : 168
  const mobileImg = imageMobile?.image?.url ? imageMobile : imageDesktop
  return (
    <div className={styles.root}>
      {overlay && <div className={styles.overlay} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />}
      <div className={styles.imageWrapperDesktop} style={{ height: `${imgHeightDesktop}px` }}>
        <img src={imageDesktop.image?.url} alt={imageDesktop?.altText} />
      </div>
      <div className={styles.imageWrapperMobile} style={{ height: `${imgHeightMobile}px` }}>
        <img src={mobileImg.image?.url} alt={mobileImg?.altText} />
      </div>
      {title && (
        <div className={styles.textContent}>
          <Typography tag="h1" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      )}
    </div>
  )
}
