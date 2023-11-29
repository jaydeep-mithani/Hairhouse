import { useEffect, useState } from 'react'

import { SalonBookingSelectStoreProps } from '../SalonBooking.types'
import { SalonBookingChoiceStore } from './SalonBookingChoiceStore'
import { SalonBookingProgressBar } from './SalonBookingProgressBar'
import { SalonBookingSelectedStore } from './SalonBookingSelectedStore'

export const SalonBookingSelectStore = ({ googleKey, setActiveStep }: SalonBookingSelectStoreProps) => {
  const [isSelectedStore, setIsSelectedStore] = useState<boolean>(false)

  useEffect(() => {
    const isSelectedStore = localStorage.getItem('selectedStore') !== null
    setIsSelectedStore(isSelectedStore)
  }, [])

  return (
    <div className="mt-5 md:mt-20 mx-auto flex flex-col	items-center w-full px-4 md:px-12">
      <SalonBookingProgressBar currentStep={1} totalSteps={5} />
      {isSelectedStore ? (
        <SalonBookingSelectedStore
          setIsSelectedStore={setIsSelectedStore}
          googleKey={googleKey}
          setActiveStep={setActiveStep}
        />
      ) : (
        <SalonBookingChoiceStore setIsSelectedStore={setIsSelectedStore} />
      )}
    </div>
  )
}
