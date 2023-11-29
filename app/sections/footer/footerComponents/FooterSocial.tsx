import { Typography } from '@overdose/components'
import { IconYouTube, IconInstagram, IconTikTok, IconFacebook, Link } from '~/components'

import styles from '../Footer.module.css'
import { FooterSocialProps } from '../Footer.types'

export const FooterSocial = ({
  socialLinksHeadingText,
  instagramUrl,
  facebookUrl,
  tiktokUrl,
  youtubeUrl,
}: FooterSocialProps) => {
  return (
    <div className={styles.footerSocial}>
      {socialLinksHeadingText && (
        <div className={styles.socialTitle}>
          <Typography variant="body" tag="h3" weight="bold">
            {socialLinksHeadingText}
          </Typography>
        </div>
      )}
      <div className={styles.socialIcons}>
        {facebookUrl && (
          <Link to={facebookUrl} className={styles.socialIcon}>
            <IconFacebook />
          </Link>
        )}
        {tiktokUrl && (
          <Link to={tiktokUrl} className={styles.socialIcon}>
            <IconTikTok />
          </Link>
        )}
        {instagramUrl && (
          <Link to={instagramUrl} className={styles.socialIcon}>
            <IconInstagram />
          </Link>
        )}
        {youtubeUrl && (
          <Link to={youtubeUrl} className={styles.socialIcon}>
            <IconYouTube />
          </Link>
        )}
      </div>
    </div>
  )
}
