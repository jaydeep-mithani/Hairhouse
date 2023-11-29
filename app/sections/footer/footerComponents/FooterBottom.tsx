import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { Link } from '~/components'

import styles from '../Footer.module.css'
import { FooterBottomProps } from '../Footer.types'

export const FooterBottom = ({ paymentLogos, legalLinks }: FooterBottomProps) => {
  return (
    <div className={styles.footerBottom}>
      <nav className={styles.navBlock}>
        {!!legalLinks?.length &&
          legalLinks.map((legalLink) => {
            return (
              <Link
                key={legalLink.id}
                to={legalLink?.url || '#'}
                target={legalLink?.openInNewWindow ? '_blank' : '_self'}
                prefetch="intent"
                className={styles.navLink}>
                <Typography tag="p" variant="caption">
                  {legalLink?.linkText}
                </Typography>
              </Link>
            )
          })}
      </nav>
      <div className={styles.paymentIcons}>
        {!!paymentLogos?.length &&
          paymentLogos.map((paymentLogo) => {
            return (
              <Image
                key={paymentLogo.id}
                alt={paymentLogo?.altText}
                data={paymentLogo}
                className={styles.paymentIcon}
              />
            )
          })}
      </div>
    </div>
  )
}
