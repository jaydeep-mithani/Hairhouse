import { Typography, Textarea } from '@overdose/components'
import clsx from 'clsx'

import styles from './HairProfile.module.css'

export const ModuleTextarea = ({
  title,
  subTitle,
  placeholder,
  tag,
  name,
}: {
  title: string
  subTitle?: string
  placeholder: string
  tag: string
  name: string
}) => {
  return (
    <div className="mb-10 relative">
      {title && (
        <Typography
          tag="p"
          variant="bodyLarge"
          theme={{
            root: clsx('mb-0.5 font-medium', {
              'mb-3': !subTitle,
            }),
          }}>
          {title}
        </Typography>
      )}
      {subTitle && (
        <Typography tag="p" variant="caption" theme={{ root: clsx(styles.subTitleSm, 'mb-4 md:mb-3') }}>
          {subTitle}
        </Typography>
      )}
      <Textarea
        showWordLimit
        name={name}
        maxLength={250}
        placeholder={placeholder}
        wrapperStyle={{
          height: 99,
        }}
        theme={{ root: clsx('relative', styles.textArea) }}
      />
      {tag && (
        <div className="absolute right-3 bottom-3.5 z-100">
          <Typography tag="p" variant="caption" theme={{ root: styles.textareaTag }}>
            {tag}
          </Typography>
        </div>
      )}
    </div>
  )
}
