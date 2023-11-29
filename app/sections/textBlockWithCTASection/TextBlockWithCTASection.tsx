import { Button, Typography } from '@overdose/components'

import { RateProducts } from './RateProducts'
import styles from './TextBlockWithCTASection.module.css'
import { TextBlockWithCTASectionProps } from './TextBlockWithCTASection.types'

const IS_RAITINGS_AND_REVIEWS = 'Ratings & Reviews - Rate Products'

export const TextBlockWithCTASection: React.FC<TextBlockWithCTASectionProps> = ({
  textContent,
  buttonCta,
  heading,
  adminTitle,
}) => {
  return adminTitle && IS_RAITINGS_AND_REVIEWS === adminTitle ? (
    <RateProducts textContent={textContent} buttonCta={buttonCta} heading={heading} />
  ) : (
    <div className={styles.root}>
      {textContent?.html && (
        <Typography
          tag="p"
          variant="bodyLarge"
          theme={{ root: styles.description }}
          dangerouslySetInnerHTML={{ __html: textContent?.html }}
        />
      )}
      {buttonCta && (
        <div className={styles.buttons}>
          {!!buttonCta?.length &&
            buttonCta?.map((button) => {
              return (
                <div key={button.id} className={`${buttonCta?.length > 1 ? 'w-[11.25rem]' : 'w-[12.5rem]'}`}>
                  {button?.buttonText && button?.url && (
                    <Button status={button?.ctaType} href={button?.url} theme={{ root: 'w-full h-[45px]' }}>
                      {button.buttonText}
                    </Button>
                  )}
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}
