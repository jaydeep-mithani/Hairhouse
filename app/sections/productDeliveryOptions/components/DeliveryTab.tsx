import { Typography } from '@overdose/components'
import { QuickShip } from '~/components'
import clsx from 'clsx'

import { DeliveryProps, DeliveryType } from '../ProductDeliveryOptions.types'

export const DeliveryTab = ({ title, subtext, charges }: DeliveryProps) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-center gap-1.5">
          {title === DeliveryType.Same_day_delivery && <QuickShip />}
          {title && (
            <Typography tag="span" variant="caption">
              {title}
            </Typography>
          )}
        </div>
        {subtext && (
          <Typography tag="span" variant="caption" theme={{ root: clsx('font-[350] text-[#4A4F53]') }}>
            {subtext}
          </Typography>
        )}
      </div>
      {charges && (
        <Typography tag="p" variant="caption" theme={{ root: clsx(' text-black') }}>
          ${charges}
        </Typography>
      )}
    </div>
  )
}
