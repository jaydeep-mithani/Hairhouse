import { Link, Typography } from '@overdose/components'
import { useState } from 'react'

import styles from './BuyingGuidesSectionTabs.module.css'
import { BuyingGuidesSectionTabsProps } from './buyingGuidesSectionTabs.types'

export const BuyingGuidesSectionTabs: React.FC<BuyingGuidesSectionTabsProps> = ({ data }) => {
  if (!data) return null

  const { tabs } = data
  const [active, setActive] = useState(tabs && tabs.length && tabs[0].linkText)
  const activeHandler = (tab: any) => {
    setActive(tab)
  }
  return (
    <div className={styles.root}>
      {tabs && tabs.length && (
        <div className={styles.tabsWrapper}>
          {tabs.map((item: any, index: number) => (
            <Link
              key={index}
              to={`#${item.url}`}
              className={active === item.linkText ? `${styles.tabLink} ${styles.activeTab}` : styles.tabLink}
              onClick={() => activeHandler(item.linkText)}>
              <Typography variant="subheading" weight="bold">
                {item.linkText}
              </Typography>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
