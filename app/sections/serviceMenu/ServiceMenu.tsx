import { Typography } from '@overdose/components'

import { ServiceMenuCard } from './ServiceMenuCard'
import { ServiceMenuProps } from './ServicesMenu.types'
import styles from './styles/ServiceMenu.module.css'

export const ServiceMenu = (props: ServiceMenuProps) => {
  if (!props) {
    return null
  }
  return (
    <div className={styles.root}>
      {!!props?.servicesMenu?.length &&
        props?.servicesMenu?.map((menu, index) => {
          return (
            <div key={index}>
              {menu?.title && (
                <Typography tag="h3" variant="displayLarge" weight="medium">
                  {menu?.title}
                </Typography>
              )}
              {menu?.description && (
                <Typography tag="h6" variant="bodyLarge" weight="meduim">
                  {menu?.description}
                </Typography>
              )}

              <div className={styles.cardContainer}>
                {!!menu?.tiles?.length &&
                  menu?.tiles?.map((tile, index) => {
                    return (
                      <ServiceMenuCard
                        key={index}
                        fromText={tile?.fromText}
                        title={tile?.name}
                        price={tile?.subHeading}
                        description={tile?.description}
                        button={tile?.button}
                      />
                    )
                  })}
              </div>
            </div>
          )
        })}

      <div className={styles.disclaimer}>
        {props?.salonserviceDescription && (
          <Typography tag="p" variant="caption" weight="medium">
            {props?.salonserviceDescription}
          </Typography>
        )}
        {props?.policyLink?.linkText && (
          <Typography tag="h6" variant="caption" weight="medium">
            {props?.policyLink?.linkText}
          </Typography>
        )}
      </div>
    </div>
  )
}
