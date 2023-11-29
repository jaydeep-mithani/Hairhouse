import { Typography, Button } from '@overdose/components'
import clsx from 'clsx'
import { SectionBrandsFragment } from 'graphql/HygraphModel.generated'
import React, { useCallback, useMemo } from 'react'
import Marquee from 'react-fast-marquee'

import { BrandCard } from './BrandCard'
import styles from './styles/BrandsCarousel.module.css'

export const BrandsCarousel = ({ data }: SectionBrandsFragment) => {
  const { title, subtitle, button, imageLink } = data

  const brands = useMemo(() => {
    return !!imageLink.length && imageLink.map((image, index) => <BrandCard data={image} key={index} />)
  }, [imageLink])

  const renderButton = useCallback(
    (breakpoint) => {
      return (
        button.displayButton && (
          <Button
            variant="link"
            href={button.buttonUrl}
            theme={{
              root: clsx(styles.button, styles[`button${breakpoint}`]),
            }}>
            {button.buttonText}
          </Button>
        )
      )
    },
    [button],
  )

  return (
    <div className={styles.root}>
      <Typography
        tag="p"
        variant="label"
        theme={{
          root: styles.subtitle,
        }}>
        {subtitle}
      </Typography>
      <Typography
        tag="p"
        variant="displayLarge"
        theme={{
          root: styles.title,
        }}>
        {title}
      </Typography>
      {renderButton('Desktop')}

      <div className={styles.mobileBrandsWrapper}> {brands}</div>
      <Marquee pauseOnHover className={styles.desktopBrandsWrapper} gradient={false} speed={40}>
        {brands}
      </Marquee>
      {renderButton('Mobile')}
    </div>
  )
}
