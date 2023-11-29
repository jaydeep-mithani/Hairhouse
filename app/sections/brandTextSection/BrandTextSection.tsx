import { Typography } from '@overdose/components'

import * as Types from '../../../graphql/types'
import styles from './BrandTextSection.module.css'
import { BrandTextSectionProps } from './BrandTextSection.types'

export const BrandTextSection: React.FC<BrandTextSectionProps> = (props) => {
  if (!props?.editorialContent) {
    return null
  }

  return (
    <div
      className={styles.root}
      style={{
        '--textAlignment': props?.textAlignment as Types.TextAlignment,
      }}>
      <Typography
        tag="p"
        variant="displayLarge"
        theme={{
          root: styles.descriptionText,
          underline: styles.underline, // Add the new style for underlining the words
        }}>
        <p
          dangerouslySetInnerHTML={{
            __html: props?.editorialContent?.html,
          }}
        />
      </Typography>
    </div>
  )
}
