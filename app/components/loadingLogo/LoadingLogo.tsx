import React from 'react'

import { LoadingLogoProps } from './LoadingLogo.types'

export const LoadingLogo: React.FC<LoadingLogoProps> = ({ logo, loaderBackground }) => {
  return (
    <div
      className={` bg-[${loaderBackground}] fixed top-0 left-0 overflow-x-hidden flex justify-center items-center w-full h-screen opacity-80 z-[1002]`}>
      <img src={logo.url} alt={logo.altText} width="100px" />
    </div>
  )
}
