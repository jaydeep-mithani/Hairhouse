import { Typography } from '@overdose/components'
import { Money } from '@shopify/hydrogen'
import { Button } from '~/components'
import clsx from 'clsx'
import { Fragment } from 'react'

import styles from './SectionServicesAndPricing.module.css'
import { ServiceBlockProps } from './SectionServicesAndPricing.types'

export const ServiceBlock = ({ service, metafields, showCta }: ServiceBlockProps) => {
  return (
    <div className={styles.serviceBlock}>
      <div>
        <Typography tag="h3" variant="heading">
          {service.name}
        </Typography>
        <Typography tag="p" variant="body" theme={{ root: styles.serviceDesc }}>
          {service.desc}
        </Typography>
        <div className={styles.servicesList}>
          {!!service?.items?.length &&
            service.items.map((item, index) => {
              return (
                <Fragment key={index}>
                  {item?.title && (
                    <Typography tag="p" variant="body" theme={{ root: clsx(styles.textTitle, 'font-medium') }}>
                      {item.title}
                    </Typography>
                  )}
                  <div className={styles.listItem}>
                    <Typography tag="p" variant="body" theme={{ root: styles.text }}>
                      {item?.name}
                      {item?.qty && <span className={styles.additionalText}>({item.qty})</span>}
                    </Typography>
                    {metafields?.[item.priceKey] && (
                      <Typography tag="p" variant="body" theme={{ root: styles.text }}>
                        <span className={styles.additionalText}>from</span>
                        <Money
                          data={{
                            amount: `${metafields[item.priceKey]}`,
                            currencyCode: 'USD',
                          }}
                          as="span"
                        />
                      </Typography>
                    )}
                  </div>
                </Fragment>
              )
            })}
        </div>
      </div>
      {showCta && (
        <Button width="100%" variant="secondary" to="/" className={styles.serviceButton}>
          <Typography tag="span" variant="body">
            Book now
          </Typography>
        </Button>
      )}
    </div>
  )
}
