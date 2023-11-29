import { Typography, Button, Input, InputPassword } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { HeroTextBlock } from '~/sections/heroBanner/HeroTextBlock'

import clsx from 'clsx'
import { useState } from 'react'

import styles from './CustomerLogin.module.css'
import { CustomerLoginProps } from './CustomerLogin.types'

export const CustomerLogin = ({ data }: CustomerLoginProps) => {
  const fetcher = useFetcher()
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false)
  const [formData, setFormData] = useState({})

  const formTitle = data?.formTitle ?? 'Login'
  const formSubtitle = data?.formSubtitle ?? 'Login to your Style Society account.'
  const formSubmitBtn = data?.formSubmitBtn ?? {
    buttonText: 'Login',
    ctaType: 'primary',
  }
  const forgetPassWordLink = data?.forgetPassWordLink ?? {
    buttonText: 'Forgot password?',
    ctaType: 'primary',
    url: '/account/recover',
  }
  const loggedInMessage = 'You are already logged in'

  const handleEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValidEmail(() => {
      return emailRegex.test(email)
    })

    if (emailRegex.test(email)) {
      setFormData((prevFormData) => {
        return { ...prevFormData, email }
      })
    }
  }

  const handlePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
    const isValidPasswordStr = passwordRegex.test(password)

    setIsValidPassword(isValidPasswordStr)

    if (isValidPasswordStr) {
      setFormData((prevFormData) => {
        return { ...prevFormData, password }
      })
    }
  }

  const handleInputChange = (key, value) => {
    setSubmitButtonClicked(false)
    switch (key) {
      case 'email':
        return handleEmail(value)
      case 'password':
        return handlePassword(value)
      default:
        return null
    }
  }

  const handleLogin = () => {
    setSubmitButtonClicked(true)
    fetcher.submit(
      {
        email: formData.email,
        password: formData.password,
      },
      { method: 'post', action: '/account/login' },
    )
  }

  return (
    <div className={styles.login}>
      {!data?.isLoggedIn ? (
        <div className="w-full">
          <div className={styles.formBlock}>
            {formTitle && (
              <div className={styles.title}>
                <Typography tag="h1" variant="pageheading">
                  {formTitle}
                </Typography>
              </div>
            )}
            {formSubtitle && (
              <Typography
                tag="div"
                variant="bodyLarge"
                theme={{ root: styles.description }}
                dangerouslySetInnerHTML={{ __html: formSubtitle }}
              />
            )}
            <div className={styles.form}>
              <div className={styles.inputBlock}>
                <Input
                  label="Email address*"
                  name="email"
                  htmltype="email"
                  autoComplete="email"
                  withLabel
                  theme={{ box: styles.input }}
                  onChange={(value) => {
                    return handleInputChange('email', value)
                  }}
                />
                {!isValidEmail && submitButtonClicked && (
                  <Typography tag="p" variant="caption" theme={{ root: styles.error }}>
                    Email is not valid.
                  </Typography>
                )}
              </div>
              <div className={clsx(styles.inputBlock, styles.inputBlockPassword)}>
                <InputPassword
                  label="Password*"
                  name="password"
                  htmltype="password"
                  withLabel
                  suffix={null}
                  onChange={(value) => {
                    return handleInputChange('password', value)
                  }}
                />
                {!isValidPassword && submitButtonClicked && (
                  <Typography tag="p" variant="caption" theme={{ root: styles.error }}>
                    Password is not valid. Please make sure it contain minimum 8 characters, at least one lowercase
                    letter, at least one uppercase letter, and at least one special symbol.
                  </Typography>
                )}
              </div>
              {formSubmitBtn && (
                <Button
                  variant="solid"
                  status={data?.formSubmitBtn?.ctaType ?? 'primary'}
                  onClick={handleLogin}
                  theme={{
                    root: styles.btnLogin,
                  }}>
                  {formSubmitBtn?.buttonText}
                </Button>
              )}
              {forgetPassWordLink && (
                <div className={styles.fogotBtnWrap}>
                  <Button variant="link" href={forgetPassWordLink.url} theme={{ root: styles.fogotBtn }}>
                    {forgetPassWordLink?.buttonText}
                  </Button>
                </div>
              )}
            </div>
          </div>
          {(data?.headline || data?.signupButtons || data?.benefits) && (
            <HeroTextBlock
              heading={data?.headline?.html?.replaceAll(/<(\/*)h[^>]*>/g, '')}
              showBreadcrumbs={false}
              className={styles.textBlock}
              textCardTheme="numbered_list"
              featuresList={data?.benefits}
              ctaButtons={data?.signupButtons}
            />
          )}
        </div>
      ) : (
        <div className={styles.loggedInMessage}>{loggedInMessage}</div>
      )}
    </div>
  )
}
