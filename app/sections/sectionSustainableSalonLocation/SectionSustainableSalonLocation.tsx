import { Typography } from '@overdose/components'
import { Location } from '~/assets'

import styles from './SectionSustainableSalonLocation.module.css'
import { SectionSustainableSalonLocationProps } from './SectionSustainableSalonLocation.types'

export const SectionSustainableSalonLocation: React.FC<SectionSustainableSalonLocationProps> = ({
  subtitle,
  title,
  locations,
}) => {
  return (
    <div className={styles.root}>
      {title && (
        <Typography variant="label" tag="h6">
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="displayLarge" tag="h1" weight="bold">
          {subtitle}
        </Typography>
      )}
      <div className={styles.locationsWraper}>
        {locations && locations?.length > 0
          ? locations?.map((location, index) => {
              return (
                <div key={index}>
                  <Location />
                  <Typography variant="body" theme={{ root: 'ml-0.5' }}>
                    {location}
                  </Typography>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}
