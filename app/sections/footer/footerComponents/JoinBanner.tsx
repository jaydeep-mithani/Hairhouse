import { Typography, Button } from '@overdose/components'

import { JoinBannerProps } from '../Footer.types'
import styles from './JoinBanner.module.css'

export const JoinBanner = ({ styleSocietyHeading, styleSocietyContent, styleSocietyCta }: JoinBannerProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.text_field}>
        {styleSocietyHeading && (
          <div className={styles.title_wrapper}>
            <Typography variant="displayLarge" tag="p" weight="regular" theme={{ root: styles.title }}>
              {styleSocietyHeading}
            </Typography>
          </div>
        )}
        {styleSocietyContent && (
          <div className={styles.text_wrapper}>
            <Typography tag="div" variant="bodyLarge" theme={{ root: styles.text }}>
              {styleSocietyContent}
            </Typography>
          </div>
        )}
      </div>
      {styleSocietyCta && (
        <Button href={styleSocietyCta.url} variant="solid" status="secondary" theme={{ root: styles.btn }}>
          {styleSocietyCta.linkText}
        </Button>
      )}
    </section>
  )
}
