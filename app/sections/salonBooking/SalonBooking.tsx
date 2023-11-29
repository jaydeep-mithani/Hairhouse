import { useState } from 'react'

import styles from './SalonBooking.module.css'
import { SalonBookingProps, bookingTypes, Tabs } from './SalonBooking.types'
import { SalonBookingCreateAccount } from './salonBookingComponents/SalonBookingCreateAccount'
import { SalonBookingHairLength } from './salonBookingComponents/SalonBookingHairLength'
import { SalonBookingPromoBanner } from './salonBookingComponents/SalonBookingPromoBanner'
import { SalonBookingReviewBooking } from './salonBookingComponents/SalonBookingReviewBooking'
import { SalonBookingSelectService } from './salonBookingComponents/SalonBookingSelectService'
import { SalonBookingSelectStore } from './salonBookingComponents/SalonBookingSelectStore'
import { SalonBookingSelectStylist } from './salonBookingComponents/SalonBookingSelectStylist'
import { SalonBookingSelectTime } from './salonBookingComponents/SalonBookingSelectTime'
import { SalonBookingWelcome } from './salonBookingComponents/SalonBookingWelcome'
import { SalonHeader } from './salonBookingComponents/SalonHeader'

export const SalonBooking: React.FC<SalonBookingProps> = ({ section, googleKey, customer, isAuthenticated }) => {
  const [bookingType, setBookingType] = useState('')
  const [hairLength, setHairLength] = useState('')
  const [activeStep, setActiveStep] = useState(Tabs.WELCOME)
  const { promoBannerBackgroundColor, promoBannerCta, promoBannerText, logo } = section

  return (
    <div className={styles.root}>
      <SalonHeader logo={logo} activeStep={activeStep} setActiveStep={setActiveStep} />

      <SalonBookingPromoBanner
        promoBannerBackgroundColor={promoBannerBackgroundColor}
        promoBannerCta={promoBannerCta}
        promoBannerText={promoBannerText}
      />
      {activeStep === Tabs.WELCOME && (
        <SalonBookingWelcome
          salonBooking={section}
          bookingType={bookingType}
          setBookingType={setBookingType}
          setActiveStep={setActiveStep}
          isAuthenticated={isAuthenticated}
        />
      )}
      {!isAuthenticated && activeStep === Tabs.ACCOUNT && <SalonBookingCreateAccount setActiveStep={setActiveStep} />}
      {bookingType === bookingTypes.salon && activeStep === Tabs.STEP1 && (
        <SalonBookingSelectStore googleKey={googleKey} setActiveStep={setActiveStep} />
      )}
      {activeStep === Tabs.STEP2 && (
        <SalonBookingHairLength
          saloonbookingstep={Tabs.STEP2}
          hairLength={hairLength}
          setHairLength={setHairLength}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === Tabs.STEP3 && <SalonBookingSelectService setActiveStep={setActiveStep} />}
      {activeStep === Tabs.STEP4 && <SalonBookingSelectStylist setActiveStep={setActiveStep} />}
      {activeStep === Tabs.STEP5 && <SalonBookingSelectTime setActiveStep={setActiveStep} />}
      {activeStep === Tabs.STEP6 && <SalonBookingReviewBooking setActiveStep={setActiveStep} customer={customer} />}
    </div>
  )
}
