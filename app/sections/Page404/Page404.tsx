import { Button, Typography } from '@overdose/components'
import clsx from 'clsx'

import styles from './Page404.module.css'
import { Page404Props } from './Page404.types'

export const Page404: React.FC<Page404Props> = (props) => {
  const { title, subtitle, buttons } = props
  return (
    <div className={styles.root}>
      {title && (
        <Typography variant="displayExtraLarge" tag="h1" weigth="bold">
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="bodyLarge" weight="bold" tag="p">
          {subtitle}
        </Typography>
      )}
      <div className={styles.page404}>
        {buttons?.length > 0 &&
          buttons.map((btn, index) => (
            <Button
              variant="solid"
              status="primary"
              href={btn.url}
              key={index}
              theme={{
                root: clsx(styles.button),
              }}>
              {btn.buttonText}
            </Button>
          ))}
      </div>
    </div>
  )
}
