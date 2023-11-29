import { Typography } from '@overdose/components'
import { Form, useActionData } from '@remix-run/react'
import { Link } from '~/components'
import { getInputStyleClasses } from '~/lib/utils'
import { useState } from 'react'

import { CustomerRegisterFeatures } from './customerRegisterFeatures/CustomerRegisterFeatures'
import styles from './CustomerSignup.module.css'
import { CustomerSignupProps, ActionData } from './CustomerSignup.types'

export const CustomerSignup = ({ data }: CustomerSignupProps) => {
  const actionData = useActionData<ActionData>()
  const [nativeEmailError, setNativeEmailError] = useState<null | string>(null)
  const [nativePasswordError, setNativePasswordError] = useState<null | string>(null)
  const [nativeNameError, setNativeNameError] = useState<null | string>(null)
  const [nativeSurnameError, setSurnameError] = useState<null | string>(null)
  const [nativePhoneError, setNativePhoneError] = useState<null | string>(null)

  if (!data) {
    return null
  }

  const { callToActionPreLoginText, description, heading, preheading, button } = data

  const onSubmit = (e: React.SyntheticEvent) => {
    const errorArray = [nativeEmailError, nativePasswordError, nativeNameError, nativeSurnameError, nativePhoneError]
    const hasError = errorArray.some((error) => {
      return error
    })
    if (hasError) {
      e.preventDefault()
    }
  }

  return (
    <div className={styles.root}>
      <div
        className={`${styles.leftSide} sticky md:-mb-nav md:top-nav md:-translate-y-nav lg:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll`}>
        <div className={styles.leftSideHeadings}>
          <div className={styles.preheadingAndHeading}>
            {preheading && (
              <Typography
                tag="p"
                variant="displayMedium"
                dangerouslySetInnerHTML={{ __html: preheading }}
                theme={{
                  root: styles.preheading,
                }}
              />
            )}
            {heading && (
              <Typography
                tag="h1"
                variant="displayExtraLarge"
                dangerouslySetInnerHTML={{ __html: heading }}
                theme={{
                  root: styles.heading,
                }}
              />
            )}
          </div>
          {description?.html && (
            <Typography
              tag="p"
              variant="body"
              dangerouslySetInnerHTML={{ __html: description?.html }}
              theme={{
                root: styles.description,
              }}
            />
          )}
          <div className={styles.callToActionContainer}>
            {callToActionPreLoginText && (
              <Typography
                tag="p"
                variant="button"
                dangerouslySetInnerHTML={{ __html: callToActionPreLoginText }}
                theme={{
                  root: styles.callToActionPreLoginText,
                }}
              />
            )}
            <Link className="inline underline" to="/account/login">
              <Typography
                tag="p"
                variant="button"
                dangerouslySetInnerHTML={{ __html: 'Login' }}
                theme={{
                  root: styles.callToActionPreLoginTextLogin,
                }}
              />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Form method="post" noValidate className="md:pb-8 md:mb-4 space-y-3" onSubmit={onSubmit}>
            {actionData?.formError && (
              <div className="flex items-center justify-center mb-6 bg-zinc-500">
                <p className="m-4 text-s text-contrast">{actionData.formError}</p>
              </div>
            )}
            <div>
              <input
                className={`${getInputStyleClasses(nativeEmailError)}`}
                id="email"
                name="email"
                type="email"
                autoComplete="on"
                required
                placeholder="Email address"
                aria-label="Email address"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  setNativeEmailError(
                    event.currentTarget.value.length && !event.currentTarget.validity.valid
                      ? 'Invalid email address'
                      : null,
                  )
                }}
              />
              {nativeEmailError && <p className="text-red-500 text-xs">{nativeEmailError} &nbsp;</p>}
            </div>
            <div className={styles.firstNameLastNameContainer}>
              <div className={styles.firstNameLastNameContainerInside}>
                <input
                  className={`${getInputStyleClasses(nativeNameError)}`}
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  autoComplete="on"
                  required
                  placeholder="First Name*"
                  aria-label="First Name"
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  onBlur={(event) => {
                    setNativeNameError(
                      event.currentTarget.value.length && !event.currentTarget.validity.valid
                        ? 'Invalid First Name'
                        : null,
                    )
                  }}
                />
                {nativeNameError && <p className="text-red-500 text-xs">{nativeNameError} &nbsp;</p>}
              </div>
              <div className={styles.firstNameLastNameContainerInside}>
                <input
                  className={`${getInputStyleClasses(nativeSurnameError)}`}
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  autoComplete="on"
                  required
                  placeholder="Last Name*"
                  aria-label="Last Name"
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  onBlur={(event) => {
                    setSurnameError(
                      event.currentTarget.value.length && !event.currentTarget.validity.valid
                        ? 'Invalid Last Name'
                        : null,
                    )
                  }}
                />
                {nativeSurnameError && <p className="text-red-500 text-xs">{nativeSurnameError} &nbsp;</p>}
              </div>
            </div>
            <div>
              <input
                className={`${getInputStyleClasses(nativePhoneError)}`}
                id="phone"
                name="phone"
                type="phone"
                autoComplete="on"
                required
                placeholder="Mobile*"
                aria-label="Phone address"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  setNativePhoneError(
                    event.currentTarget.value.length && !event.currentTarget.validity.valid
                      ? 'Invalid phone address'
                      : null,
                  )
                }}
              />
              {nativePhoneError && <p className="text-red-500 text-xs">{nativePhoneError} &nbsp;</p>}
            </div>
            <div>
              <input
                className={`${getInputStyleClasses(nativePasswordError)}`}
                id="password"
                name="password"
                type="password"
                autoComplete="on"
                placeholder="Password"
                aria-label="Password"
                minLength={8}
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  if (event.currentTarget.validity.valid || !event.currentTarget.value.length) {
                    setNativePasswordError(null)
                  } else {
                    setNativePasswordError(
                      event.currentTarget.validity.valueMissing
                        ? 'Please enter a password'
                        : 'Passwords must be at least 8 characters',
                    )
                  }
                }}
              />
              {nativePasswordError && <p className="text-red-500 text-xs"> {nativePasswordError} &nbsp;</p>}
            </div>
            {button?.buttonText && (
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full"
                  type="submit">
                  {button?.buttonText || 'Sign up'}
                </button>
              </div>
            )}
          </Form>
        </div>
      </div>
      <CustomerRegisterFeatures data={data} />
    </div>
  )
}
