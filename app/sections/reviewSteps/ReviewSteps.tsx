import { Typography } from '@overdose/components'
import React from 'react'

import { ReviewStepsProps } from './ReviewSteps.types'

export const ReviewSteps = ({ heading, steps }: ReviewStepsProps) => {
  return (
    <div className="flex flex-col items-center px-4 py-[60px] gap-6 bg-white md:py-[100px] md:px-0">
      {heading && (
        <Typography tag="h3" variant="displayMedium" theme={{ root: 'text-2xl !leading-[28.8px]' }}>
          {heading}
        </Typography>
      )}
      <div className="flex flex-col items-start gap-10 md:flex-row">
        {!!steps?.length &&
          steps.map((step, index) => {
            return (
              <div className="flex flex-col text-center items-center gap-1 max-w-[281px] md:max-w-[250px]" key={index}>
                {step?.title && (
                  <Typography tag="h3" variant="displayExtraLarge">
                    {step?.title}
                  </Typography>
                )}
                {step?.content?.html && (
                  <Typography
                    tag="p"
                    variant="bodyLarge"
                    theme={{ root: 'text-[#4A4F53] font-[350]' }}
                    dangerouslySetInnerHTML={{ __html: step.content?.html }}
                  />
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
