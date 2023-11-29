import { Typography, Button } from '@overdose/components'
import clsx from 'clsx'

import styles from './ArticlePageTextSection.module.css'
import { ArticlePageTextSectionProps } from './ArticlePageTextSection.types'

export const ArticlePageTextSection: React.FC<ArticlePageTextSectionProps> = ({ data }) => {
  if (!data?.heading && !data?.textContent) {
    return null
  }

  const { heading, textAlignment, textContent, backgroundColour, buttonCta } = data

  const textAlignmentValue = textAlignment ?? 'left'

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.textContentWrapper, {
          [styles.hasBackground]: backgroundColour?.hex,
        })}
        style={{ backgroundColor: backgroundColour?.hex, textAlign: textAlignmentValue }}>
        {heading && <Typography tag="h3">{heading}</Typography>}
        {textContent?.html && (
          <div className={styles.textContent} dangerouslySetInnerHTML={{ __html: textContent.html }} />
        )}
        {!!buttonCta?.length && (
          <div className={styles.buttons}>
            {buttonCta.map((button) => {
              return (
                <div key={button.id}>
                  {button?.buttonText && button?.url && (
                    <div>
                      <Button status={button.ctaType} href={button.url}>
                        {button.buttonText}
                      </Button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
