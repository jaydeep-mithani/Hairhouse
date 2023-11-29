import { Typography } from '@overdose/components'
import clsx from 'clsx'

import styles from './SaleTag.module.css'
import { SaleTagProps } from './SaleTag.types'

export const SaleTag = ({ isOnSale, packValueAt }: SaleTagProps) => {
  return (
    <div className={styles.root}>
      {isOnSale && (
        <div className={clsx(styles.tag, styles.isOnSale)}>
          <Typography tag="span" variant="body" theme={{ root: styles.tag_text }}>
            Saved {isOnSale?.value}
          </Typography>
        </div>
      )}
      {packValueAt && (
        <div className={clsx(styles.tag, styles.packValueAt)}>
          <Typography tag="span" variant="body" theme={{ root: styles.tag_text }}>
            Valued at {packValueAt?.value}
          </Typography>
        </div>
      )}
    </div>
  )
}
