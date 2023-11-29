import { Typography, Button } from '@overdose/components'
import { Image } from '@shopify/hydrogen'

import styles from './SectionCompetitionBanner.module.css'
import { SectionCompetitionBannerProps } from './SectionCompetitionBanner.types'

export const CompetitionBanner: React.FC<SectionCompetitionBannerProps> = ({
  id,
  subtext,
  heading,
  description,
  backgroundColour,
  image,
  button,
}) => {
  if (!id) {
    return null
  }

  return (
    <section className={styles.root} style={{ '--backgroundColour': backgroundColour?.hex }}>
      {heading && (
        <div className={styles.titleWrapper}>
          <Typography variant="label" tag="p" weight="regular">
            {subtext}
          </Typography>
          <Typography variant="displayLarge" tag="p" weight="regular" theme={{ root: styles.title }}>
            {heading}
          </Typography>
        </div>
      )}
      <div className={styles.descriptionWrapper}>
        <Typography variant="body" tag="p" weight="regular" theme={{ root: styles.descriptionText }}>
          {description}
        </Typography>
        <Button
          href={button?.url}
          variant="solid"
          status={button?.ctaType ? button?.ctaType : 'secondary'}
          theme={{ root: styles.button }}>
          {button?.buttonText}
        </Button>
      </div>
      {image && (
        <Image
          className={styles.image}
          data={image}
          alt={image?.altText || ''}
          height={image?.height}
          loaderOptions={{
            scale: 2,
            crop: 'center',
          }}
        />
      )}
    </section>
  )
}
