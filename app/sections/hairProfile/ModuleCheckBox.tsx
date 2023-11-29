import { Typography, Checkbox } from '@overdose/components'
import clsx from 'clsx'

import styles from './HairProfile.module.css'

export const ModuleCheckBox = ({ title, subTitle, arr }: { title: string; subTitle: string; arr: string[] }) => {
  return (
    <div className="mb-10">
      {title && (
        <Typography
          tag="p"
          variant="bodyLarge"
          theme={{
            root: 'mb-0.5 font-medium',
          }}>
          {title}
        </Typography>
      )}
      {subTitle && (
        <Typography tag="p" variant="caption" theme={{ root: clsx(styles.subTitleSm, 'mb-4 md:mb-3') }}>
          {subTitle}
        </Typography>
      )}
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-[21px] gap-y-4 md:gap-y-3">
        {arr.map((item, index) => {
          return (
            <Checkbox
              label={item}
              key={index}
              name={item}
              idSuffix={index}
              theme={{ root: clsx('font-[350] w-[162px] md:w-[211px]', styles.checkbox) }}
            />
          )
        })}
      </div>
    </div>
  )
}
