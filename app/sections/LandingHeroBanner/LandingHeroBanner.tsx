import { Image } from '@overdose/components'
import { Link } from '~/components'
import Marquee from 'react-fast-marquee'

import styles from './LandingHeroBanner.module.css'
import { LandingHeroBanner as LandingHeroProps } from './LandingHeroBanner.types'

export const LandingHeroBanner = ({
  bannerDesktopImage,
  mobileImage,
  logoDesktopImage,
  logoMobileImage,
  links,
}: LandingHeroProps) => {
  return (
    <div>
      {links?.length > 0 ? (
        <div className={styles.root}>
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerDesktopImage?.url})`,
            }}
            className={styles.background}>
            {logoDesktopImage?.url && (
              <Image src={logoDesktopImage?.url} alt={logoDesktopImage?.altText || ''} className={styles.logo} />
            )}
          </div>

          <div>
            <div className="sm:flex items-center justify-center gap-x-10 hidden bg-black">
              {!!links?.length &&
                links.map((item) => {
                  return (
                    <Link to={item?.url || ''} key={item?.id} className="text-white py-5">
                      {item?.buttonText}
                    </Link>
                  )
                })}
            </div>
            <div className="flex items-center justify-center sm:hidden bg-black">
              <Marquee gradient={false}>
                {!!links?.length &&
                  links.map((item) => {
                    return (
                      <Link to={item?.url || ''} key={item?.id} className="text-white py-[14px] mr-5">
                        {item.buttonText}
                      </Link>
                    )
                  })}
              </Marquee>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.root}>
          <div className={styles.overlay} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
          {bannerDesktopImage?.url && (
            <div className={` ${styles.desktopbg}`}>
              <Image src={bannerDesktopImage?.url} alt={bannerDesktopImage.altText} />
              {logoDesktopImage?.url && (
                <Image
                  src={logoDesktopImage?.url}
                  alt={logoDesktopImage?.altText || ''}
                  className={`${styles.logoWithoutLinks}`}
                />
              )}
            </div>
          )}

          {mobileImage?.url && (
            <div className={`${styles.mobilebg}`}>
              <Image src={mobileImage?.url} alt={mobileImage.altText} />
              {logoMobileImage?.url && (
                <Image
                  src={logoMobileImage?.url}
                  alt={logoMobileImage?.altText || ''}
                  className={`${styles.logoWithoutLinks}`}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
