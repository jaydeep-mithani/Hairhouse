import { Await } from '@remix-run/react'
import { Image } from '@shopify/hydrogen'
import { Section } from '~/components'
import { useIsHomePath } from '~/lib/utils'
import clsx from 'clsx'
import React, { Suspense } from 'react'

import styles from './Footer.module.css'
import { FooterProps } from './Footer.types'
import { FooterBottom } from './footerComponents/FooterBottom'
import { FooterDownload } from './footerComponents/FooterDownload'
import { FooterHelpBlock } from './footerComponents/FooterHelpBlock'
import { FooterInfo } from './footerComponents/FooterInfo'
import { FooterMenu } from './footerComponents/FooterMenu'
import { FooterSocial } from './footerComponents/FooterSocial'
import { JoinBanner } from './footerComponents/JoinBanner'
import { SectionUSP } from './footerComponents/SectionUSP'

export const Footer: React.FC<FooterProps> = ({ ...rest }) => {
  const isHome = useIsHomePath()

  const data = null
  const {
    acknowledgementContent,
    acknowledgementTitle,
    paymentLogos,
    legalLinks,
    footerLogo,
    socialLinksHeadingText,
    instagramUrl,
    facebookUrl,
    tiktokUrl,
    youtubeUrl,
    styleSocietyHeading,
    styleSocietyContent,
    styleSocietyCta,
    footerLinks,
    androidAppStoreUrl,
    iOsAppStoreUrl,
    helpCentreBox,
    assistanceCtAs,
    uniqueSellingPoints,
  } = rest

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      className={clsx(styles.footer, 'embedded-hidden')}
      padding="none"
      display="block">
      <Suspense>
        <Await resolve={data}>
          <SectionUSP uniqueSellingPoints={uniqueSellingPoints} />
          <JoinBanner
            styleSocietyHeading={styleSocietyHeading}
            styleSocietyContent={styleSocietyContent}
            styleSocietyCta={styleSocietyCta}
          />
          <div className={styles.footerContent}>
            {footerLogo && <Image alt={footerLogo?.altText} data={footerLogo} className={styles.footerLogo} />}
            <FooterSocial
              socialLinksHeadingText={socialLinksHeadingText}
              instagramUrl={instagramUrl}
              facebookUrl={facebookUrl}
              tiktokUrl={tiktokUrl}
              youtubeUrl={youtubeUrl}
            />
            <FooterInfo acknowledgementContent={acknowledgementContent} acknowledgementTitle={acknowledgementTitle} />
            <div className={styles.footerMenu}>
              <FooterMenu footerLinks={footerLinks} />
            </div>
            <FooterHelpBlock helpCentreBox={helpCentreBox} assistanceCtAs={assistanceCtAs} />
            <FooterDownload iOsAppStoreUrl={iOsAppStoreUrl} androidAppStoreUrl={androidAppStoreUrl} />
          </div>
          <FooterBottom paymentLogos={paymentLogos} legalLinks={legalLinks} />
        </Await>
      </Suspense>
    </Section>
  )
}
