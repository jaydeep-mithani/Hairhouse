import { Typography } from '@overdose/components'

import styles from '../Footer.module.css'
import { FooterInfoProps } from '../Footer.types'

export const FooterInfo = ({ acknowledgementTitle, acknowledgementContent }: FooterInfoProps) => {
  if (!acknowledgementTitle && !acknowledgementContent) {
    return null
  }
  return (
    <div className={styles.footerInfo}>
      <div className={styles.infoTitle}>
        {acknowledgementTitle && (
          <Typography variant="body" tag="h3" weight="bold">
            {acknowledgementTitle}
          </Typography>
        )}
      </div>
      {acknowledgementContent && (
        <Typography
          variant="caption"
          tag="div"
          theme={{ root: styles.infoText }}
          dangerouslySetInnerHTML={{ __html: acknowledgementContent.html }}
        />
      )}
    </div>
  )
}
