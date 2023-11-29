import React, { ReactNode } from 'react'

import styles from './BuyNowPayLater.module.css'

interface BuyNowPayLaterProps {
  children: ReactNode
}

export const BuyNowPayLater: React.FC<BuyNowPayLaterProps> = ({ children }) => {
  const childArray = React.Children.toArray(children)

  return (
    <div className={styles.container}>
      {childArray.map((child, index) => {
        return (
          <React.Fragment key={childArray.length}>
            {child}
            {index < childArray.length - 1 && <div style={{ color: '#e2e2e2' }}>|</div>}
          </React.Fragment>
        )
      })}
    </div>
  )
}
