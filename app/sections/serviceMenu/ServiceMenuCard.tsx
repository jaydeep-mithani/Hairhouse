import { Button, Typography } from '@overdose/components'

import styles from './styles/ServiceMenu.module.css'

export const ServiceMenuCard = ({
  fromText,
  title,
  price,
  button,
  description,
}: {
  fromText?: string | null
  title?: string | null
  price?: string | null
  button
  description?: string | null
}) => {
  return (
    <div className={styles.menuCard}>
      {fromText && (
        <Typography
          variant="label"
          tag="p"
          theme={{
            root: styles.cardLabel,
          }}>
          {fromText}
        </Typography>
      )}
      {title && (
        <Typography
          variant="displayMedium"
          tag="h3"
          theme={{
            root: styles.cardTitle,
          }}>
          {title}
        </Typography>
      )}
      {price && (
        <Typography
          variant="bodyLarge"
          weight="bold"
          tag="h5"
          theme={{
            root: styles.price,
          }}>
          {price}
        </Typography>
      )}
      {description && (
        <Typography
          variant="body"
          tag="p"
          theme={{
            root: styles.cardDescription,
          }}>
          {description}
        </Typography>
      )}
      {button?.buttonText && (
        <Button shape="square" status={button?.ctaType}>
          {button?.buttonText}
        </Button>
      )}
    </div>
  )
}
