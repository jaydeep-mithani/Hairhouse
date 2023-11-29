import { ReactNode } from 'react'

import styles from './StoreCard.module.css'

interface StoreCardFlexibleProps {
  children: ReactNode
  onClick?: () => void
  isActive?: boolean
  hideBorder?: boolean
}

export const StoreCardFlexible: React.FC<StoreCardFlexibleProps> = ({ children, onClick, isActive, hideBorder }) => {
  let borderColor
  if (hideBorder) {
    borderColor = 'none'
  } else if (isActive) {
    borderColor = 'var(--interactive-action-primary, #000)'
  } else {
    borderColor = 'var(--border-line-primary, #E2E2E2)'
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onClick) {
      onClick()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.container}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      style={{
        border: `1px solid ${borderColor}`,
      }}>
      {children}
    </div>
  )
}
