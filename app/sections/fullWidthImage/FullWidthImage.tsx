import React from 'react'

import { FullWidthImageProps } from './FullWidthImage.types'

export const FullWidthImage: React.FC<FullWidthImageProps> = ({ data }) => {
  const { adminTitle, imageDesktop, imageMobile } = data

  if (!data) return null
  return (
    <div>
      {imageDesktop && (
        <img src={imageDesktop?.image.url} alt={imageDesktop?.altText} className="hidden md:block md:w-full" />
      )}
      {imageMobile && (
        <img
          src={imageMobile?.image.url}
          alt={imageMobile?.altText}
          className="block w-full h-[270px] object-cover md:hidden"
        />
      )}
    </div>
  )
}
