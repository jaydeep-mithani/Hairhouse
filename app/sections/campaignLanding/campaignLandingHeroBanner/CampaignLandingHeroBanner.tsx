import styles from './CampaignLandingHeroBanner.module.css'
import { CampaignLandingHeroBannerProps } from './CampaignLandingHeroBanner.types'

export const CampaignLandingHeroBanner: React.FC<CampaignLandingHeroBannerProps> = (props) => {
  if (!props.data) return null

  const { image, logo } = props.data
  return (
    <div className={styles.root}>
      {logo && logo.image && logo.image.url && (
        <div
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image.image.url})`,
          }}
          className={styles.background}>
          <img src={logo.image.url} alt={logo.image.altText} className={styles.logo} />
        </div>
      )}
    </div>
  )
}
