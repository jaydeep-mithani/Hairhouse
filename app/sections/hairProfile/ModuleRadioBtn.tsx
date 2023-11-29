import { Typography, RadioGroup, Radio } from '@overdose/components'
import clsx from 'clsx'

import styles from './HairProfile.module.css'

export const ModuleRadioBtn = ({
  title,
  subTitle,
  arr,
  groupName,
}: {
  title: string
  subTitle?: string
  arr: string[]
  groupName: string
}) => {
  return (
    <div className="mb-10">
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
      <RadioGroup name={groupName || ''}>
        <div className="flex gap-5">
          {arr.map((item, index) => {
            return (
              <Radio
                name={item}
                value={item}
                key={index}
                theme={{ root: clsx('font-[350] w-[162px] md:w-[211px] gap-1', styles.radio) }}>
                {item}
              </Radio>
            )
          })}
        </div>
      </RadioGroup>
    </div>
  )
}
