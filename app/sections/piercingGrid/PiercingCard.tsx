import { Typography } from '@overdose/components'
import clsx from 'clsx'
import React from 'react'

import { PiercingCardProps } from './PiercingGrid.types'

export const PiercingCard: React.FC<PiercingCardProps> = ({ description, image, name }) => {
  return (
    <div className="flex flex-col gap-4 justify-self-center w-full h-full">
      <img
        src={image?.url}
        alt={image?.altText}
        width={image?.width}
        height={image?.height}
        className="md:max-h-[318px] sm:max-h-[400px] max-h-[318px] h-full w-full min-w-full"
      />
      <div className="flex flex-col gap-2">
        {name && (
          <Typography tag="h3" variant="bodyLarge" theme={{ root: clsx('leading-[19.2px] font-medium') }}>
            {name}
          </Typography>
        )}
        {description && (
          <Typography tag="p" variant="body" theme={{ root: clsx('font-[350] text-[#4A4F53]') }}>
            {description}
          </Typography>
        )}
      </div>
    </div>
  )
}
