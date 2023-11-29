import { Typography } from '@overdose/components'
import clsx from 'clsx'

import styles from '../SalonBooking.module.css'
import { FinishBlockItemProps } from '../SalonBooking.types'

export const FinishBlockItem = ({ icon, title, subtitle, secondSubtitle }: FinishBlockItemProps) => {
  return (
    <div className="flex gap-3">
      {icon}
      <div>
        {title && (
          <Typography
            tag="p"
            variant="subheading"
            weight="bold"
            theme={{
              root: clsx('mb-1 md:mb-2', styles.finishBlockTitle),
            }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            tag="p"
            variant="body"
            theme={{
              root: clsx(styles.bodyTitle, {
                'mb-1': secondSubtitle,
              }),
            }}>
            {subtitle}
          </Typography>
        )}
        {secondSubtitle && (
          <Typography
            tag="p"
            variant="body"
            theme={{
              root: styles.bodyTitle,
            }}>
            {secondSubtitle}
          </Typography>
        )}
      </div>
    </div>
  )
}
