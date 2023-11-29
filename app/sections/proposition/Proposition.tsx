import { Typography } from '@overdose/components'
import React from 'react'
import Marquee from 'react-fast-marquee'

import { PropositionProps } from './Proposition.types'
import styles from './styles/Proposistion.module.css'

export const Proposition: React.FC<PropositionProps> = ({ propositions }) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Marquee className={`${styles.parent}`} pauseOnHover gradient={false} speed={40}>
          {!!propositions?.length &&
            propositions?.map((tile, index: number) => {
              return (
                <div key={index} className={`${styles.flex} ${styles.tiles}`}>
                  <Typography tag="p" variant="body" theme={{ root: styles.data }}>
                    {tile.propositiontext}
                  </Typography>
                  <span className={`${styles.line}`}>|</span>
                </div>
              )
            })}
        </Marquee>
      </div>

      <div className={`${styles.desktop}`}>
        {!!propositions?.length &&
          propositions?.map((tile, index: number) => {
            return (
              <div key={index} className={`${styles.flex} ${styles.tiles}`}>
                <Typography tag="p" variant="body" theme={{ root: styles.data }}>
                  {tile.propositiontext}
                </Typography>
                <span className={`${styles.line}`}>|</span>
              </div>
            )
          })}
      </div>
    </>
  )
}
