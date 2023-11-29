import { Button, Typography } from '@overdose/components'

import styles from './Description.module.css'

export const Description = ({ description, onReadMoreClick }: { description: string; onReadMoreClick: () => void }) => {
  return (
    <div className={styles.description}>
      <Typography
        tag="p"
        variant="body"
        theme={{ root: styles.descriptionText }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <span> </span>
      <Button variant="link" onClick={onReadMoreClick}>
        <Typography tag="span" variant="body" theme={{ root: styles.readLink }}>
          Read more
        </Typography>
      </Button>
    </div>
  )
}
