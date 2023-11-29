import { Typography, Button } from '@overdose/components'

import styles from './MobileMenu.module.css'

export const JoinBlock = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.joinBlock}>
      <Typography variant="body" tag="div">
        Become a Style Society member and get 10% off your first purchase.
      </Typography>
      <div className={styles.joinBlock_btns}>
        <Button to="/login" variant="solid" status="primary" onClick={onClose}>
          Join us
        </Button>
        <Button to="/login" variant="solid" status="secondary" onClick={onClose}>
          Sign in
        </Button>
      </div>
    </div>
  )
}
