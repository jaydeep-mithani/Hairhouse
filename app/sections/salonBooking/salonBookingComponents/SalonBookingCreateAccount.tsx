import { Typography, Button, Input, InputPassword } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import clsx from 'clsx'
import { useState } from 'react'

import styles from '../SalonBooking.module.css'
import { SalonBookingCreateAccountProps, Tabs } from '../SalonBooking.types'
import { BookingTitle } from './BookingTitle'

export const SalonBookingCreateAccount = ({ setActiveStep }: SalonBookingCreateAccountProps) => {
  const fetcher = useFetcher()

  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [isValidFirstName, setIsValidFirstName] = useState(true)
  const [isValidLastName, setIsValidLastName] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [formError, setFormError] = useState<string | null>(null)
  const [fieldsIsFilled, setFieldsIsFilled] = useState({
    email: false,
    phone: false,
    firstName: false,
    lastName: false,
    password: false,
  })
  const [formData, setFormData] = useState({} as FormData)

  const isSalonBooking = true
  const validations = [isValidEmail, isValidFirstName, isValidLastName, isValidPassword, isValidPhone]
  const allValid = validations.some((validation) => {
    return validation === false
  })

  const handleEmail = (email: string) => {
    setFieldsIsFilled((prevFields) => {
      return {
        ...prevFields,
        email: email !== '',
      }
    })
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValidEmail(() => {
      return emailRegex.test(email)
    })

    if (emailRegex.test(email)) {
      setFormData((prevFormData) => {
        return { ...prevFormData, email, isSalonBooking }
      })
    }
  }

  const handlePhone = (phone: string) => {
    setFieldsIsFilled((prevFields) => {
      return {
        ...prevFields,
        phone: phone !== '',
      }
    })
    const phoneRegex = /^\+\d{1,3}\d{9,15}$/
    setIsValidPhone(phoneRegex.test(phone))

    if (phoneRegex.test(phone)) {
      setFormData((prevFormData) => {
        return { ...prevFormData, phone }
      })
    }
  }

  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s]+$/
    return nameRegex.test(name)
  }

  const handleFirstName = (firstName: string) => {
    setFieldsIsFilled((prevFields) => {
      return {
        ...prevFields,
        firstName: firstName !== '',
      }
    })
    const isValidName = validateName(firstName)
    setIsValidFirstName(isValidName)

    if (isValidName) {
      setFormData((prevFormData) => {
        return { ...prevFormData, firstName }
      })
    }
  }

  const handleLastName = (lastName: string) => {
    setFieldsIsFilled((prevFields) => {
      return {
        ...prevFields,
        lastName: lastName !== '',
      }
    })
    const isValidName = validateName(lastName)
    setIsValidLastName(isValidName)

    if (isValidName) {
      setFormData((prevFormData) => {
        return { ...prevFormData, lastName }
      })
    }
  }

  const handlePassword = (password: string) => {
    setFieldsIsFilled((prevFields) => {
      return {
        ...prevFields,
        password: password !== '',
      }
    })
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
    const isValidPassword = passwordRegex.test(password)

    setIsValidPassword(isValidPassword)

    if (isValidPassword) {
      setFormData((prevFormData) => {
        return { ...prevFormData, password }
      })
    }
  }

  const handleInputChange = (key: string, value: string) => {
    switch (key) {
      case 'email':
        return handleEmail(value)
      case 'phone':
        return handlePhone(value)
      case 'firstName':
        return handleFirstName(value)
      case 'lastName':
        return handleLastName(value)
      case 'password':
        return handlePassword(value)
      default:
        return undefined
    }
  }

  const handleCreateAccount = () => {
    if (!Object.keys(formData).length || !Object.values(fieldsIsFilled).every(Boolean)) {
      setFormError('You need to fill in all fields')
    } else {
      setFormError(null)
      fetcher.submit(
        {
          email: formData.email,
          phone: formData.phone,
          firstName: formData.firstName,
          lastName: formData.lastName,
          password: formData.password,
          isSalonBooking: formData.isSalonBooking,
        },
        { method: 'post', action: '/account/register' },
      )
      setActiveStep(Tabs.STEP1)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto px-4 md:px-12 my-5 md:my-20 max-w-[656px] w-full">
      <BookingTitle
        isAccount
        title="Create an account"
        subTitle="Get $10 off your first service when you create an account & join Style Society. You’ll get the star treatment,
            with exclusive rewards & offers. Earn points on every purchase in-store and online."
      />
      <div className={styles.loginWrapper}>
        <Typography
          tag="p"
          variant="body"
          theme={{
            root: styles.salonsubtitle,
          }}>
          Already a member?
        </Typography>
        <Button
          variant="link"
          status="primary"
          href="/account/login"
          theme={{
            root: styles.buttonLink,
          }}>
          Login
        </Button>
      </div>
      <div className={styles.formWrapper}>
        <Typography
          tag="p"
          variant="body"
          theme={{
            root: styles.formTitle,
          }}>
          Your details
        </Typography>
        <Input
          label="Email address*"
          name="email"
          htmltype="email"
          autoComplete="email"
          withLabel
          theme={{ box: styles.input }}
          onChange={(value: string) => {
            return handleInputChange('email', value)
          }}
        />
        {!isValidEmail && (
          <Typography tag="p" variant="caption" theme={{ root: styles.error }}>
            Email is not valid.
          </Typography>
        )}
        <div className={styles.nameFieldsWrapper}>
          <Input
            label="First name*"
            name="firstName"
            htmltype="text"
            withLabel
            theme={{ box: styles.input }}
            onChange={(value: string) => {
              return handleInputChange('firstName', value)
            }}
          />
          {!isValidFirstName && (
            <Typography tag="p" variant="caption" theme={{ root: styles.error }}>
              First name is required
            </Typography>
          )}
          <Input
            label="Last name*"
            name="lastName"
            htmltype="text"
            withLabel
            theme={{ box: styles.input }}
            onChange={(value: string) => {
              return handleInputChange('lastName', value)
            }}
          />
          {!isValidLastName && (
            <Typography tag="p" variant="caption" theme={{ root: styles.error }}>
              Last name is required
            </Typography>
          )}
        </div>
        <Input
          label="Mobile*"
          name="phone"
          htmltype="tel"
          withLabel
          theme={{ box: styles.input }}
          onChange={(value: string) => {
            return handleInputChange('phone', value)
          }}
        />
        {!isValidPhone && (
          <Typography tag="p" variant="caption" theme={{ root: styles.error }}>
            Phone is not valid. Make sure it starts with a + character, contains the country code and the correct number
            of digits.
          </Typography>
        )}
        <InputPassword
          label="Password*"
          name="password"
          htmltype="password"
          withLabel
          suffix={null}
          theme={{ box: styles.input }}
          onChange={(value: string) => {
            return handleInputChange('password', value)
          }}
        />
        {!isValidPassword && (
          <Typography tag="p" variant="caption" theme={{ root: styles.error }}>
            Password is not valid. Please make sure it contain minimum 8 characters, at least one lowercase letter, at
            least one uppercase letter, and at least one special symbol
          </Typography>
        )}
      </div>
      {formError && (
        <Typography tag="p" variant="caption" theme={{ root: clsx(styles.error, 'p-0 mb-3') }}>
          {formError}
        </Typography>
      )}
      <Button
        variant="solid"
        status="primary"
        onClick={handleCreateAccount}
        disabled={allValid}
        theme={{
          root: styles.createAccountButton,
        }}>
        Create account & Continue
      </Button>
    </div>
  )
}
