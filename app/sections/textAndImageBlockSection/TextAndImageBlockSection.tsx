import { Button, Typography, Image } from '@overdose/components'
import clsx from 'clsx'

import styles from './TextAndImageBlockSection.module.css'
import { TextAndImageBlockSectionProps } from './TextAndImageBlockSection.types'

export const TextAndImageBlockSection: React.FC<TextAndImageBlockSectionProps> = ({ imageAndTextBlocks }) => {
  if (!imageAndTextBlocks?.length) {
    return null
  }
  const blockData = imageAndTextBlocks[0]
  return (
    <div className={clsx(styles.root, { [styles.imageReverse]: blockData?.imagePosition === 'right' })}>
      {blockData?.image !== null && (
        <Image
          className={styles.textAndImageBlockImage}
          alt={blockData?.image?.altText}
          src={blockData?.image?.url}
          style={{ width: `${blockData?.imageWidth ?? '50'}%` }}
        />
      )}
      <div className={styles.textAndImageBlockText}>
        <div
          className={clsx(styles.textAndImageBlockTextContent, {
            [styles.textLeft]: blockData?.contentAlignment === 'left',
            [styles.textCenter]: blockData?.contentAlignment === 'center',
            [styles.textRight]: blockData?.contentAlignment === 'right',
          })}>
          {blockData?.heading && (
            <Typography tag="h1" variant="displayLarge" theme={{ root: clsx(styles.textAndImageBlockTitle) }}>
              {blockData?.heading}
            </Typography>
          )}
          {blockData?.text && (
            <Typography
              tag="p"
              variant="bodyLarge"
              theme={{ root: clsx(styles.textAndImageBlockDescription) }}
              dangerouslySetInnerHTML={{ __html: blockData?.text?.html }}
            />
          )}
          {!!blockData?.buttons.length &&
            blockData?.buttons.map((button) => {
              return (
                <Button
                  variant="solid"
                  key={button?.id}
                  status={button?.ctaType}
                  href={button?.url}
                  theme={{
                    root: clsx(styles.button, {
                      [styles.linkButton]: button?.ctaType === 'link',
                    }),
                  }}>
                  {button.buttonText}
                </Button>
              )
            })}
        </div>
      </div>
    </div>
  )
}
