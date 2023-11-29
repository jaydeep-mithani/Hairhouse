import { Typography } from '@overdose/components'
import { ScrollingTextFragment } from 'graphql/HygraphModel.generated'
import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'

import styles from './styles/USPTilesSection.module.css'

export const USPTilesSection = (props: { data: ScrollingTextFragment }) => {
  if (!props.data) return null

  const { messages, mobileTransitionSpeed } = props.data

  const tiles = useMemo(() => {
    return (
      !!messages?.length &&
      messages.map((tile, index) => (
        <div key={index} className={`${styles.flex} ${styles.tiles}`}>
          <Typography tag="p" variant="body" className={styles.message}>
            {tile}
          </Typography>
          <span>|</span>
        </div>
      ))
    )
  }, [messages])

  return (
    <div className={styles.root}>
      <div className={`${styles.flex} ${styles.desktopTilesWrapper} `}>{tiles}</div>
      <div id={styles.mobileTilesWrapper}>
        <Marquee pauseOnHover className={`${styles.flex} ${styles.tiles}`} gradient={false} speed={40}>
          {tiles}
        </Marquee>
      </div>
    </div>
  )
}
