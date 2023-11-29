import { Typography, Button } from '@overdose/components'

import styles from './SalonServices.module.css'
import { SalonServicesProps } from './SalonServices.types'

export const SalonServices: React.FC<SalonServicesProps> = ({ name, salonServices, salonNotes, bg, policyLink }) => {
  if (!(name && salonServices?.length)) {
    return null
  }

  return (
    <div className={styles.root}>
      <div>
        {name && (
          <Typography tag="h1" variant="displayExtraLarge" weight="bold" align="center">
            {name}
          </Typography>
        )}
      </div>
      <div className={styles.services_container} style={{ backgroundColor: bg || '#f9f5f0' }}>
        {!!salonServices?.length &&
          salonServices?.map((service, index) => {
            return (
              <div className={styles.service_box} key={index}>
                {service?.subHeading && (
                  <Typography tag="span" variant="label" weight="medium">
                    {service?.subHeading}
                  </Typography>
                )}
                {service?.name && (
                  <Typography tag="h3" variant="displayMedium" weight="bold">
                    {service.name}
                  </Typography>
                )}
                {service?.fromText && (
                  <Typography tag="h5" variant="subheading" weight="bold">
                    {service.fromText}
                  </Typography>
                )}
                {service?.description && (
                  <Typography
                    tag="p"
                    variant="body"
                    weight="medium"
                    theme={{
                      root: styles.description1,
                    }}>
                    {service.description}
                  </Typography>
                )}
                {service?.salonNote && (
                  <Typography
                    tag="p"
                    variant="body"
                    weight="medium"
                    theme={{
                      root: styles.description2,
                    }}>
                    {service.salonNote}
                  </Typography>
                )}
                {service?.button?.buttonText && (
                  <Button shape="square" status={service?.button?.ctaType}>
                    {service.button.buttonText}
                  </Button>
                )}
              </div>
            )
          })}
      </div>
      <div className={styles.disclaimer}>
        {salonNotes && (
          <Typography tag="p" variant="caption" weight="medium">
            {salonNotes}
          </Typography>
        )}
        {policyLink && policyLink.buttonText && (
          <Typography tag="h6" variant="caption" weight="medium">
            {policyLink.buttonText}
          </Typography>
        )}
      </div>
    </div>
  )
}
