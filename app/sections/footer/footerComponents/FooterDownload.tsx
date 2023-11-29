import { Typography } from '@overdose/components'
import { IconAppStore, IconGooglePlay, Link } from '~/components'

import styles from '../Footer.module.css'
import { FooterDownloadProps } from '../Footer.types'

export const FooterDownload = ({ androidAppStoreUrl, iOsAppStoreUrl }: FooterDownloadProps) => {
  if (!androidAppStoreUrl && !iOsAppStoreUrl) {
    return null
  }

  return (
    <div className={styles.footerDownload}>
      <div className={styles.downloadTitle}>
        <Typography variant="body" tag="h3" weight="bold">
          DOWNLOAD THE APP
        </Typography>
      </div>
      <div className="flex">
        {iOsAppStoreUrl && (
          <Link to={iOsAppStoreUrl} className={styles.downloadLink} target="_blank">
            <IconAppStore />
          </Link>
        )}
        {androidAppStoreUrl && (
          <Link to={androidAppStoreUrl} className={styles.downloadLink} target="_blank">
            <IconGooglePlay />
          </Link>
        )}
      </div>
    </div>
  )
}
