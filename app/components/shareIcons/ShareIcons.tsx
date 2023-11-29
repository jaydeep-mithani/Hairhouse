import { Typography, Button } from '@overdose/components'
import { FacebookIcon, TwitterIcon, PinterestIcon } from '~/assets'

import styles from './ShareIcons.module.css'
import { ShareIconsProps } from './ShareIcons.types'

export const ShareIcons = ({ title, enableShare, options, pageUrl, pageTitle, imageUrl }: ShareIconsProps) => {
  if (!pageTitle || !pageUrl || !enableShare) return null

  const platforms = options?.length ? options : ['Facebook', 'Twitter', 'Pinterest']

  return (
    <div className={styles.shareIcons}>
      {title && (
        <Typography
          tag="p"
          variant="body"
          theme={{
            root: styles.shareTitle,
          }}>
          {title}
        </Typography>
      )}
      <div className={styles.platformOptions}>
        {platforms.map((platform, i) => {
          switch (platform.toLowerCase()) {
            case 'facebook':
              return (
                <Button
                  variant="link"
                  href={`https://www.facebook.com/sharer?u=${encodeURIComponent(pageUrl)}&amp;t=${pageTitle}`}
                  target="_blank"
                  icon={<FacebookIcon />}
                  key={`sikey${i + 1}`}
                />
              )
            case 'twitter':
              return (
                <Button
                  variant="link"
                  href={`http://twitter.com/intent/tweet?text=Currently reading ${pageTitle}&amp;url=${encodeURIComponent(
                    pageUrl,
                  )}`}
                  target="_blank"
                  icon={<TwitterIcon />}
                  key={`sikey${i + 1}`}
                />
              )
            case 'pinterest':
              return (
                imageUrl && (
                  <Button
                    variant="link"
                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      pageUrl,
                    )}&amp;media=${encodeURIComponent(imageUrl)}&amp;description=${pageTitle}`}
                    target="_blank"
                    icon={<PinterestIcon />}
                    key={`sikey${i + 1}`}
                  />
                )
              )
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
