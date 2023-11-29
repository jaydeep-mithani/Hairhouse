import { Button, Typography, Input, Select, Option } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { IconCalendar } from '~/components'
import clsx from 'clsx'
import { useState, SyntheticEvent } from 'react'

import styles from './CustomerProfile.module.css'
import { CustomerProfileProps } from './CustomerProfile.types'

export const CustomerProfile = ({ customer }: CustomerProfileProps) => {
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [inputDateValue, setInputDateValue] = useState('')
  const fetcher = useFetcher()

  const handleInputDateChange = (e: SyntheticEvent) => {
    setInputDateValue((e.target as HTMLInputElement).value)
  }

  const handleEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValidEmail(emailRegex.test(email))
  }

  const handlePhone = (phone: string) => {
    const phoneRegex = /^\+\d{1,3}\d{9,15}$/
    setIsValidPhone(phoneRegex.test(phone))
  }

  if (!customer) {
    return null
  }
  return (
    <div className="mb-[64px]">
      <Typography tag="p" variant="displayLarge" theme={{ root: clsx('mb-5 md:mb-10 mt-8 lg:mt-0', styles.title) }}>
        Customer profile
      </Typography>
      <fetcher.Form method="post" action="/account/edit">
        <div className="flex flex-col gap-3 max-w-[678px]">
          <Input
            defaultValue={customer.email}
            label="Email"
            name="email"
            htmltype="email"
            withLabel
            theme={{ root: styles.input }}
            onChange={handleEmail}
          />
          {!isValidEmail && (
            <Typography tag="p" variant="caption" theme={{ root: clsx(styles.error, 'ml-3 mb-1') }}>
              Email is not valid.
            </Typography>
          )}
          <Input
            defaultValue={customer.firstName}
            label="First name"
            name="firstName"
            htmltype="text"
            withLabel
            theme={{ root: styles.input }}
          />
          <Input
            defaultValue={customer.lastName}
            label="Last name"
            name="lastName"
            htmltype="text"
            withLabel
            theme={{ root: styles.input }}
          />
          <Input
            defaultValue={customer.phone}
            label="Phone number"
            name="phone"
            htmltype="tel"
            withLabel
            theme={{ root: styles.input }}
            onChange={handlePhone}
          />
          {!isValidPhone && (
            <Typography tag="p" variant="caption" theme={{ root: clsx(styles.error, 'ml-3 mt-2 mb-3') }}>
              Phone is not valid.
            </Typography>
          )}
          <div className="relative">
            <label htmlFor="birthDate">
              <Typography variant="caption" tag="span" theme={{ root: clsx('absolute top-1 left-3', styles.label) }}>
                Date of birth
              </Typography>
              <input
                value={inputDateValue}
                id="birthDate"
                name="birthDate"
                type="date"
                className={styles.inputDate}
                placeholder=""
                onChange={handleInputDateChange}
              />
            </label>
            <div className="absolute right-3 top-[13px]">
              <IconCalendar />
            </div>
          </div>
          <Select name="gender" label="Gender" theme={{ root: styles.select }}>
            {['Female', 'Male', 'Non-binary', 'Prefer not to say'].map((choice, index) => (
              <Option key={index} value={choice} label={choice} />
            ))}
          </Select>
        </div>
        {fetcher?.data?.hasOwnProperty('formError') && (
          <Typography tag="p" variant="caption" theme={{ root: clsx(styles.error, 'ml-3 mt-2') }}>
            {fetcher.data.formError}
          </Typography>
        )}
        <Button
          htmlType="submit"
          status="primary"
          theme={{ root: 'w-full md:max-w-[250px] mt-6' }}
          disabled={fetcher.state === 'submitting' || !isValidEmail || !isValidPhone}>
          Save profile
        </Button>
      </fetcher.Form>
    </div>
  )
}
