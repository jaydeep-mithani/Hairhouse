import { Button, Typography, Image } from '@overdose/components'
import clsx from 'clsx'

import styles from './SectionCuratedBlog.module.css'
import { BlogItemProps } from './SectionCuratedBlog.types'

export const SectionCuratedBlogCard: React.FC<BlogItemProps> = ({ button, description, image, name }) => {
  return (
    <div>
      {image && (
        <div className="mb-5">
          <Image
            src={image?.url}
            alt={image?.altText}
            width={image?.width}
            height={image?.height}
            className="min-h-[345px] max-h-[345px] h-full lg:min-h-[434px] lg:max-h-[434px]"
          />
        </div>
      )}
      {name && (
        <Typography tag="p" variant="subheading" weight="bold" theme={{ root: clsx('mb-[6px]', styles.cardTitle) }}>
          {name}
        </Typography>
      )}
      {description?.text && (
        <Typography tag="p" variant="bodyLarge" theme={{ root: clsx('mb-5', styles.cardText) }}>
          {description?.text}
        </Typography>
      )}
      {button?.buttonText && (
        <Button status="primary" href={button?.url} theme={{ root: 'w-[200px]' }}>
          {button.buttonText}
        </Button>
      )}
    </div>
  )
}
