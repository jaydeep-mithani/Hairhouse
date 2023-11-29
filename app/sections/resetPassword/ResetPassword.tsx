import { Typography, Input, Button, Link } from '@overdose/components'
import { useActionData } from '@remix-run/react'
import { getInputStyleClasses } from '~/lib/utils'
import clsx from 'clsx'
import { useState } from 'react'

import styles from './ResetPassword.module.css'
import { ResetPasswordProps } from './ResetPassword.types'

export const ResetPassword: React.FC<ResetPasswordProps> = ({ data }) => {
  const actionData = useActionData()
  const [nativeEmailError, setNativeEmailError] = useState<null | string>(null)
  if (!data) return null

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setNativeEmailError(
      event.currentTarget.value.length && !event.currentTarget.validity.valid ? 'Invalid email address' : null,
    )
  }

  const { title, subtitle } = data
  return (
    <div className={styles.root}>
      <div className={styles.resetForm}>
        {title && (
          <Typography tag="h1" variant="displayLarge" weight="bold">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography tag="p" variant="bodyLarge">
            {subtitle.text}
          </Typography>
        )}
        {actionData?.formError && (
          <div className="flex items-center justify-center mb-6 bg-zinc-500">
            <p className="m-4 text-s text-contrast">{actionData.formError}</p>
          </div>
        )}
        <div>
          <Input
            id="email"
            placeholder="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            aria-label="Email address"
            onBlur={onBlur}
            className={`mb-1 ${getInputStyleClasses(nativeEmailError)}`}
          />
          {nativeEmailError && <p className="text-red-500 text-xs">{nativeEmailError} &nbsp;</p>}
        </div>

        <Button
          shape="square"
          size="lg"
          theme={{
            root: clsx(styles.button),
          }}
          htmlType="submit">
          Send Email
        </Button>
        <Typography tag="p" variant="bodyLarge">
          Don&apos;t have an account?{' '}
          <Link to="/" className="text-left underline text-sm" prefetch="intent">
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
  )
}
