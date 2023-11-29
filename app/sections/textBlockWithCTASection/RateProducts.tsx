import { Typography, Button } from '@overdose/components'
import clsx from 'clsx'

import styles from './TextBlockWithCTASection.module.css'
import { RateProductsProps } from './TextBlockWithCTASection.types'

export const RateProducts = ({ textContent, buttonCta, heading }: RateProductsProps) => {
  return (
    <div className={clsx('my-0 mx-auto text-center py-[60px] md:py-[100px]', styles.rateProducts)}>
      {textContent?.text && (
        <Typography tag="p" variant="displayLarge">
          {textContent?.text}
        </Typography>
      )}
      {buttonCta?.[0]?.url && (
        <Button
          to={buttonCta?.[0]?.url}
          variant="solid"
          status={buttonCta?.[0]?.ctaType ? buttonCta?.[0]?.ctaType : 'primary'}
          theme={{ root: 'max-w-[343px] w-full mt-4 mb-6 md:max-w-[390px]' }}>
          {buttonCta?.[0]?.buttonText}
        </Button>
      )}
      {heading && (
        <Typography tag="p" variant="body" theme={{ root: styles.reviewText }}>
          {heading}
        </Typography>
      )}
      {buttonCta?.[1]?.url && (
        <Button
          to={buttonCta?.[1]?.url}
          variant="solid"
          status={buttonCta?.[1]?.ctaType ? buttonCta?.[1]?.ctaType : 'link'}
          theme={{ root: clsx(styles.buttonLinkReview, 'inline') }}>
          <Typography tag="span" variant="body" theme={{ root: styles.buttonLinkTextReview }}>
            {buttonCta?.[1]?.buttonText}
          </Typography>
        </Button>
      )}
    </div>
  )
}
