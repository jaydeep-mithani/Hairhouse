import { Image, Typography } from '@overdose/components'
import React from 'react'

import { UspIconsSectionProps } from './UspIconsSection.types'

export const UspIconsSection: React.FC<UspIconsSectionProps> = ({ items, heading, desc, bgColour }) => {
  return (
    <div
      className="flex flex-col items-center gap-8 px-4 py-[3.75rem] md:py-[6.25rem] md:px-0 md:gap-12"
      style={{ backgroundColor: bgColour?.hex }}>
      <Typography tag="h3" variant="displayLarge" theme={{ root: 'font-medium' }}>
        {heading}
      </Typography>
      <div
        className={` grid ${
          items.length > 3 ? 'grid-cols-2' : 'grid-cols-1'
        } md:grid-cols-3 md:min-w-[641px] md:h-[20rem] gap-10 md:${
          items.length > 3 ? 'gap-x-32' : 'gap-x-[100px]'
        } md:${items.length > 3 ? 'gap-y-16' : 'gap-y-8'}`}>
        {items?.length > 0 &&
          items?.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center gap-4" key={item.id}>
                {item?.icon?.url && (
                  <Image src={item?.icon?.url} alt="usp" className="w-[49px] h-[3.125rem] md:h-[3.75rem] md:w-[59px]" />
                )}
                <div className="flex flex-col items-center gap-1">
                  {item?.quantity && (
                    <Typography tag="h3" variant="displayMedium" theme={{ root: 'font-medium' }}>
                      {item.quantity}
                    </Typography>
                  )}
                  {item?.title && (
                    <Typography tag="p" variant="subheading" theme={{ root: 'font-[350] text-center' }}>
                      {item.title}
                    </Typography>
                  )}
                </div>
              </div>
            )
          })}
      </div>
      {desc?.text && (
        <div className="max-w-[37.5rem] text-center text-[var(--color-text-secondary)]">
          <Typography tag="p" variant="body" theme={{ root: 'font-[350]' }}>
            {desc?.text}
          </Typography>
        </div>
      )}
    </div>
  )
}
