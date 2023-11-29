import { Image } from '@overdose/components'
import { useLoaderData } from '@remix-run/react'
import clsx from 'clsx'
import React, { useState, useLayoutEffect } from 'react'

import { HeroBannerFragment } from './HeroBanner.fragment.generated'
import styles from './HeroBanner.module.css'
import { HeroBannerProps } from './HeroBanner.types'
import { HeroTextBlock } from './HeroTextBlock'

export const HeroBanner: React.FC<HeroBannerProps> = ({ ...rest }) => {
  const { page, menu, collections } = useLoaderData<typeof loader>()
  const [data, setData] = useState<HeroBannerFragment>(rest)

  useLayoutEffect(() => {
    setData(rest)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!data?.heading && !data?.mobileImage && !data?.desktopImage) {
    return null
  }

  const { subtext, heading, ctaButtons, desc, mobileImage, desktopImage, layout, logo, showBreadcrumbs } = data

  return (
    <div
      className={clsx(styles.root, {
        [styles[`layout_${layout}`]]: layout,
      })}>
      {mobileImage && (
        <Image
          className={styles.heroImageMobile}
          alt={mobileImage?.altText}
          src={mobileImage?.url}
          height={mobileImage?.height}
        />
      )}
      {desktopImage && (
        <Image
          className={styles.heroImageDesktop}
          alt={desktopImage?.altText}
          src={desktopImage?.url}
          height={desktopImage?.height}
          width="100%"
        />
      )}

      <HeroTextBlock
        subtext={subtext || ''}
        heading={heading || ''}
        ctaButtons={ctaButtons}
        description={desc || {}}
        logo={logo || {}}
        showBreadcrumbs={showBreadcrumbs || false}
        placement={page?.__typename === 'CollectionPage' ? 'collections' : ''}
        title={page?.__typename === 'CollectionPage' ? page?.collection?.title : page?.title}
        menu={page?.__typename === 'CollectionPage' ? menu : null}
        collections={page?.__typename === 'CollectionPage' ? collections : null}
      />
    </div>
  )
}
